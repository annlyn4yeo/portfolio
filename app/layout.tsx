import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://next-supabase-vote.vercel.app/"),

  title: {
    template: "%s | Portfolio",
    default: "Portfolio - Annlyn",
  },
  authors: {
    name: "annlyn",
  },

  description: "My personal portfolio, an abitious frontend wed-dev from Bengaluru",
  openGraph: {
    title: "Portfolio",
    description:
      "Cast your vote now and see live updates on the poll results, powered by the real-time capabilities of Supabase database integration in our web app.",
    url: "https://next-supabase-vote.vercel.app/",
    siteName: "Portfolio Annlyn",
    images: "/og.png",
    type: "website",
  },
  keywords: ["daily web coding", "annlyn", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
