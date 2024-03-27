"use server";

import { connectDB } from "@/shared/libs/db";
import Email from "@/models/email.model";

export const saveEmail = async ({
	title,
	content,
	newsLetterOwnerId,
}: {
	title: string;
	content: string;
	newsLetterOwnerId: string;
}) => {
	try {
		await connectDB();

		console.log(title);
		console.log(newsLetterOwnerId);

		console.log(Email);

		const email = await Email.findOne({ title, newsLetterOwnerId });

		console.log(email + "##3s");

		if (email) {
			await Email.findByIdAndUpdate(email._id, { content });
			return { message: "Email Updated successfully", success: true };
		} else {
			await Email.create({
				title,
				content,
				newsLetterOwnerId,
			});
			return { message: "Email saved successfully!" };
		}
	} catch (err) {
		console.log(err);
	}
};
