"use server";

import Subscriber from "@/models/subscriber.model";
import connectDB from "@/shared/libs/db";

export const getSubscribers = async ({
	newsLetterOwnerId,
}: {
	newsLetterOwnerId: string;
}) => {
	try {
		await connectDB();

		const allSubscribers = await Subscriber.find({ newsLetterOwnerId });
		return allSubscribers;
	} catch (error) {
		console.log(error);
		console.log("Error in the getSubscribers");
	}
};
