import mongoose, { Schema } from "mongoose";

const subscriberSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
		},
		newsLetterOwnerId: {
			type: String,
			required: true,
		},
		source: {
			type: String,
			required: true,
			default: "inboxIQbyrahul.com",
		},
		status: {
			type: String,
			default: "Subscribed",
		},
	},
	{ timestamps: true }
);

const Subscriber =
	mongoose.models.Subscribers ||
	mongoose.model("Subscribers", subscriberSchema);
export default Subscriber;
