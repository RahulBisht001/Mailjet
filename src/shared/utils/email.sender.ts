"use server";

import * as AWS from "aws-sdk";
import * as nodeMailer from "nodemailer";

interface Props {
	userEmails: string[];
	subject: string;
	content: string;
}

AWS.config.update({
	accessKeyId: process.env.AWS_ACCESS_KEY,
	secretAccessKey: process.env.AWS_SECRET_KEY,
	region: "ap-south-1",
});

AWS.config.getCredentials(function (error) {
	if (error) {
		console.log(error);
	}
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

const adminMail = "rahulbishtrb1012@gmail.com";

// Create a transporter with the help of nodemailer
const transporter = nodeMailer.createTransport({
	SES: ses,
});

export const sendEmail = async ({ userEmails, subject, content }: Props) => {
	try {
		const response = transporter.sendMail({
			from: adminMail,
			to: userEmails,
			subject,
			html: content,
		});

		return response;
	} catch (error) {
		console.log(error);
		throw error;
	}
};
