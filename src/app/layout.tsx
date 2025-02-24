import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
	variable: "--inter",
	subsets: ["latin"],
});

const open_sans = Open_Sans({
	variable: "--open_sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-background font-manrope antialiased",
					inter.variable,
					open_sans.variable
				)}
			>
				{children}
			</body>
		</html>
	);
}
