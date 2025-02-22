import { flag } from "flags/next";

const off = () => false;

export const adminFlag = flag({
	key: "admin",
	description: "Enable admin features",
	decide: off,
});
