// disable stylelint
import mongoose from "mongoose";
import { driver, createAstraUri } from "stargate-mongoose";

export const connectDB = async () => {
	try {
		const uri = createAstraUri(
			process.env.ASTRA_DB_API_ENDPOINT!,
			process.env.ASTRA_DB_APPLICATION_TOKEN!
		);

		// check if there is an existing connection
		if (mongoose.connection.readyState !== 0) {
			//Disconnect the existing connection
			await mongoose.disconnect();
		}
		mongoose.set("autoCreate", true);
		mongoose.setDriver(driver);

		await mongoose
			.connect(uri, {
				isAstra: true,
			})
			.then((res) => {
				console.log("Connected Beta");
				// console.log(res);
			})
			.catch((e) => {
				console.log(e);
			});
	} catch (error) {
		console.log("----------- Moye moye  ----------");
		console.log(error);
		process.exit(1);
	}
};
