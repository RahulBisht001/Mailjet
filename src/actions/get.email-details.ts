"use server";

import Email from "@/models/email.model";
import connectDB from "@/shared/libs/db";

export const getEmailDetails = async ({
	title,
	newsLetterOwnerId,
}: {
	title: string;
	newsLetterOwnerId: string;
}) => {
	try {
		await connectDB();
		const email = await Email.findOne({ title, newsLetterOwnerId });
		return email;
	} catch (error) {
		console.log(error);
	}
};
