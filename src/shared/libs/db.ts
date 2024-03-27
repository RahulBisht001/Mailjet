import mongoose from "mongoose";
require("dotenv").config();

// console.log(process.env.DB_URI)
// const dbUrl: string = process.env.DB_URI || "";

const connectDB = async () => {
	try {
		const { connection } = await mongoose.connect(
			"mongodb+srv://rahulbisht1012:XSUtgudJkTAJ3q2i@cluster0.7ig3m.mongodb.net/"
		);
		console.log(
			`Database connected successfully with connection id : ${connection.host}`
		);
	} catch (err: any) {
		console.log("-----------------------------");
		console.log("Database Error hai Bhaiya");
		console.log(err.message);
		console.log("-----------------------------");

		// setTimeout(connectDB, 5000);
		process.exit(1);
	}
};

export default connectDB;
