import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import FacebookPixel from "@/components/FacebookPixel";
import ScrollTracking from "@/components/ScrollTracking";
import ErrorTracking from "@/components/ErrorTracking";
import WebVitals from "@/components/WebVitals";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "San Diego Car Accident Lawyer | Free Consultation | Martinez & Williams",
  description: "Experienced San Diego car accident attorneys. $50M+ recovered. No fee unless we win. 24/7 free consultations. Call (619) 555-HURT today.",
  keywords: "San Diego car accident lawyer, car accident attorney San Diego, personal injury lawyer San Diego",
  authors: [{ name: "Martinez & Williams Personal Injury Attorneys" }],
  openGraph: {
    title: "San Diego Car Accident Lawyer | Martinez & Williams",
    description: "Experienced San Diego car accident attorneys. $50M+ recovered. No fee unless we win.",
    type: "website",
    locale: "en_US",
    url: "https://martinezwilliamslaw.com",
    siteName: "Martinez & Williams Personal Injury Attorneys",
  },
  twitter: {
    card: "summary_large_image",
    title: "San Diego Car Accident Lawyer | Martinez & Williams",
    description: "Experienced San Diego car accident attorneys. $50M+ recovered. No fee unless we win.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://martinezwilliamslaw.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Resource Hints for Performance - LCP Optimization */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        
        {/* Preload critical hero image for LCP optimization */}
        <link
          rel="preload"
          as="image"
          href="https://images.unsplash.com/photo-1663286357473-39dacb93b5d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920"
          fetchPriority="high"
        />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Martinez & Williams Personal Injury Attorneys",
              "image": "https://martinezwilliamslaw.com/logo.png",
              "@id": "https://martinezwilliamslaw.com",
              "url": "https://martinezwilliamslaw.com",
              "telephone": "+16195554878",
              "priceRange": "Free Consultation",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1234 Legal Plaza, Suite 500",
                "addressLocality": "San Diego",
                "addressRegion": "CA",
                "postalCode": "92101",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 32.7157,
                "longitude": -117.1611
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com",
                "https://www.linkedin.com",
                "https://www.twitter.com"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "150"
              }
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <GoogleAnalytics />
        <FacebookPixel />
        <ScrollTracking />
        <ErrorTracking />
        <WebVitals />
        {children}
      </body>
    </html>
  );
}

