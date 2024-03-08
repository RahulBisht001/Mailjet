import {hostname} from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "media.beehiiv.com",
            },
            {
                hostname: "img.clerk.com",
            },
            {
                hostname: "images.ctfassets.net",
            },
        ],
    },
};

export default nextConfig;
