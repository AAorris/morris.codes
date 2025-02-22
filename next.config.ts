import type { NextConfig } from "next";
import withVercelToolbar from "@vercel/toolbar/plugins/next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "av4h4gua5d07fb3t.public.blob.vercel-storage.com",
			},
		],
	},
};

export default withVercelToolbar()(nextConfig);
