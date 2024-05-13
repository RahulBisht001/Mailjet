"use server";

import Subscriber from "@/models/subscriber.model";
import connectDB from "@/shared/libs/db";
import { generateAnalyticsData } from "@/shared/utils/analytics.generator";

export const subscribersAnalytics = async () => {
	try {
		await connectDB();
		const subscribers = await generateAnalyticsData(Subscriber);
		return subscribers;
	} catch (error) {
		console.log(error);
	}
};
