"use server";

import { NextRequest, NextResponse } from "next/server";

import jwt from "jsonwebtoken";
import connectDB from "@/shared/libs/db";
import Subscriber from "@/models/subscriber.model";
import { validateEmail } from "@/shared/utils/ZeroBounceApi";

export async function POST(req: NextRequest) {
	try {
		const data = await req.json();
		console.log("data", data);

		const apiKey = data.apiKey;
		const decode: any = jwt.verify(apiKey, process.env.JWT_SECRET_KEY!, {
			algorithms: ["HS256"],
		});

		await connectDB();

		// console.log("decode", decode.userId);

		// check if subscriber already exist
		const isSubscriberExist = await Subscriber.findOne({
			email: data.email,
			newsLetterOwnerId: decode.userId!,
		});

		console.log("isSubscriberExist", isSubscriberExist);

		if (isSubscriberExist) {
			return NextResponse.json({
				error: "you are already subscribed to the newsletter",
			});
		}

		// validate the email with zero bounce api
		const validationResponse = await validateEmail({ email: data.email });

		if (validationResponse.status === "invalid") {
			return NextResponse.json({ error: "Email is not valid!" });
		}

		// create a new subscriber
		const newSubscriber = await Subscriber.create({
			email: data.email,
			newsLetterOwnerId: decode.userId,
			source: "By API",
			status: "Subscribed",
		});

		// Remember , because i used only the user.id for creating the api key
		// hence we have to do the work accordingly.

		return NextResponse.json(newSubscriber);
	} catch (error) {
		console.log(error);
		return new NextResponse("Internal Error", { status: 500 });
	}
}
