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
	},
	{ timestamps: true }
);

const Subscriber =
	mongoose.models.Subscribers ||
	mongoose.model("Subscribers", subscriberSchema);
export default Subscriber;
