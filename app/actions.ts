import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function toggleTheme() {
	"use server";
	const jar = await cookies();
	const themeCookie = jar.get("theme")?.value;
	const currentTheme = themeCookie ?? "light";
	const newTheme = currentTheme === "light" ? "dark" : "light";
	jar.set("theme", newTheme, {
		path: "/",
		maxAge: 31536000,
		sameSite: "lax",
	});
	revalidatePath("/");
}
