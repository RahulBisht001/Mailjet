type ZeroBounceResponse = any;

const baseUrl = "https://api.zerobounce.net/v2";

export const validateEmail = async ({ email }: { email: string }) => {
	const uri = `${baseUrl}/validate?api_key=${process.env.ZERO_BOUNCE_API_KEY}&email=${email}`;

	try {
		const response = await fetch(uri, { method: "GET" });

		if (!response.ok) {
			throw new Error(`HTTP Error ! status : ${response.status}`);
		}

		const data: ZeroBounceResponse = await response.json();
		return data;
	} catch (error) {
		console.log(error);
		console.log("Error From ZeroBounce API");
		throw error;
	}
};
