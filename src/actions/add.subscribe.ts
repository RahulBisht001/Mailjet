"use server";

import connectDB from "@/shared/libs/db";
import Subscriber from "@/models/subscriber.model";
import { clerkClient } from "@clerk/nextjs";
import { validateEmail } from "@/shared/utils/ZeroBounceApi";

export const addSubscriber = async ({
	email,
	username,
}: {
	email: string;
	username: string;
}) => {
	try {
		// fetch all the users
		const allUsers = await clerkClient.users.getUserList();
		// first find the newsletter owner
		const newsletterOwner = allUsers.find((i) => i.username === username);

		if (!newsletterOwner) {
			throw Error("Newsletter owner not found");
		}
		// check if subscriber already exist
		const isSubscriberExist = await Subscriber.findOne({
			email,
			newsLetterOwnerId: newsletterOwner?.id,
		});

		if (isSubscriberExist) {
			return { error: "you are already subscribed to the newsletter" };
		}

		// validate the email with zero bounce api
		const validationResponse = await validateEmail({ email });

		if (validationResponse.status === "invalid") {
			return { error: "Email is not valid!" };
		}

		// create a new subscriber
		const newSubscriber = await Subscriber.create({
			email,
			newsLetterOwnerId: newsletterOwner?.id,
		});

		return newSubscriber;
	} catch (error) {
		await connectDB();
		console.error(error);
		return { error: "An Error occured while subscribing" };
	}
};
