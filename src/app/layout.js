import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "The India Watch | Strategic Market Research & Advisory",
  description: "Premier research and advisory firm equipping investors, CXOs, and enterprises with actionable market intelligence to navigate and win in India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased text-foreground bg-background">
        {children}
        <WhatsAppIcon />
      </body>
    </html>
  );
}
