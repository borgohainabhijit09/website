import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import LeadPopup from "@/components/LeadPopup";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://theindiawatch.com"),
  title: {
    default: "The India Watch | Strategic Market Research & Advisory",
    template: "%s | The India Watch",
  },
  description: "Premier research and advisory firm equipping investors, CXOs, and enterprises with actionable market intelligence to navigate and win in India's complex markets.",
  keywords: ["India market research", "market entry strategy India", "business advisory India", "India watch", "market intelligence India", "corporate advisory"],
  authors: [{ name: "The India Watch" }],
  creator: "The India Watch",
  publisher: "The India Watch",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The India Watch | Strategic Market Research & Advisory",
    description: "Equipping investors, CXOs, and enterprises with actionable market intelligence to navigate and win in India.",
    url: "https://theindiawatch.com",
    siteName: "The India Watch",
    images: [
      {
        url: "/og-image.jpg", // Ensure you add this image to public/
        width: 1200,
        height: 630,
        alt: "The India Watch - Market Intelligence",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The India Watch | Strategic Market Research & Advisory",
    description: "Actionable market intelligence for the Indian market.",
    images: ["/og-image.jpg"],
    creator: "@theindiawatch",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  themeColor: "#0A2342",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased text-foreground bg-background">
        <Header />
        {children}
        <Footer />
        <WhatsAppIcon />
        <LeadPopup />
      </body>
    </html>
  );
}
