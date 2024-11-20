"use client";

import Index from "../app/components/home/Index";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";

const coinageCapsKrugerGray = localFont({
    src: "./fonts/CoinageCapsKrugerGray.woff",
    variable: "--font-coinage-caps-kruger-gray",
    weight: "100 900",
});

export default function Home() {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <title>Sabapathi Fine Arts | Home</title>
                <meta charset="utf-8" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Carattere"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Lobster"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Open Sans"
                />
                <link rel="canonical" href="https://sabapathifinearts.in/" />
                <meta
                    name="description"
                    content="We offer high-quality, customized prints, including business cards, brochures, banners, and packaging. Discover how we can bring your vision to life!"
                />
                <meta
                    name="keywords"
                    content="Sabapathi Fine Arts, Sabapathi Fine, Sabapathi Arts, SabapathiFineArts, Sabapathifinearts, Sabapathifine, Sabapathiarts, Sabapathi, Sabapathi printing service, Sabapathi printing, printing services, custom printing, professional printing, digital printing, offset printing, high-quality prints, business cards printing, brochures printing, posters printing, large format printing, banner printing, affordable printing services, custom design printing, personalized printing, promotional materials, print shop, professional print solutions, bulk printing services, creative printing solutions"
                />
                <meta name="author" content="Sabapathi Fine Arts" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Sabapathi Fine Arts" />
                <meta name="robots" content="index, follow" />
                <link
                    rel="shortcut icon"
                    href="https://sabapathifinearts.in/images/main-logo.png"
                    type="image/png"
                />
                <meta property="og:title" content="Sabapathi Fine Arts" />
                <meta
                    property="og:description"
                    content="We offer high-quality, customized prints, including business cards, brochures, banners, and packaging. Discover how we can bring your vision to life!"
                />
                <meta
                    property="og:image"
                    content="https://sabapathifinearts.in/images/main-logo.png"
                />
                <meta
                    name="google-site-verification"
                    content="n8KvcidF-k2JrboA0MIcKHjDJuEIWJgroMtrulDPokg"
                />
                <meta
                    property="og:url"
                    content="https://sabapathifinearts.in/"
                />
            </head>
            <body className={`${coinageCapsKrugerGray.variable} antialiased`}>
                <Index />
                <SpeedInsights />
            </body>
        </html>
    );
}
