"use server";

import { currentUser } from "@clerk/nextjs";
import jwt from "jsonwebtoken";

export const generateApiKey = async () => {
	try {
		const user = await currentUser();
		const token = jwt.sign(
			{ userId: user!.id as string },
			process.env.JWT_SECRET_KEY!,
			{
				algorithm: "HS256",
			}
		);

		return token;
	} catch (error) {
		console.log(error);
		console.log("Error in generateApiKey");
	}
};

export const regenerateApiKey = async () => {
	const user = await currentUser();
	const token = jwt.sign({ userId: user!.id }, process.env.JWT_SECRET_KEY!, {
		algorithm: "HS256",
	});
	return token;
};
