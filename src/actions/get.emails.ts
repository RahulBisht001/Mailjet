"use server";

import Email from "../models/email.model";
import connectDB from "@/shared/libs/db";

export const getEmails = async ({
	newsLetterOwnerId,
}: {
	newsLetterOwnerId: string;
}) => {
	try {
		await connectDB();
		const emails = await Email.find({ newsLetterOwnerId });
		console.log("------");
		// console.log(JSON.stringify(emails));
		return JSON.stringify(emails);
	} catch (error) {
		console.log(error);
	}
};
