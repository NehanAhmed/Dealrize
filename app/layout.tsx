import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dealrize - AI Powered Influencer Mangement Tool",
  description: "Kivver is a AI powered Learning platform for Pakistani People to help them learn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}