"use client";
import { usePathname } from "next/navigation";

import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import Products from "../components/home/sections/Products";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";

const coinageCapsKrugerGray = localFont({
    src: "./../fonts/CoinageCapsKrugerGray.woff",
    variable: "--font-coinage-caps-kruger-gray",
    weight: "100 900",
});

export default function Index() {
    const pathname = usePathname();

    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <title>Sabapathi Fine Arts | Products</title>
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
                <link
                    rel="canonical"
                    href="https://sabapathifinearts.in/products"
                />
                <meta
                    name="description"
                    content="Explore our premium, tailored printing services designed to meet all your needs. Let us transform your ideas into stunning prints!"
                />
                <meta
                    name="keywords"
                    content="Sabapathi Fine Arts Products, Sabapathi Fine Products, Sabapathi Arts Products, SabapathiFineArts Products, Sabapathifinearts Products, Sabapathifine, Sabapathiarts, Sabapathi, Sabapathi printing service, Sabapathi printing, printing services, custom printing, professional printing, digital printing, offset printing, high-quality prints, business cards printing, brochures printing, posters printing, large format printing, banner printing, affordable printing services, custom design printing, personalized printing, promotional materials, print shop, professional print solutions, bulk printing services, creative printing solutions"
                />
                <meta name="author" content="Sabapathi Fine Arts" />
                <meta property="og:type" content="website" />
                <meta name="robots" content="index, follow" />
                <meta property="og:site_name" content="Sabapathi Fine Arts" />
                <meta
                    name="google-site-verification"
                    content="n8KvcidF-k2JrboA0MIcKHjDJuEIWJgroMtrulDPokg"
                />
                <link
                    rel="shortcut icon"
                    href="https://sabapathifinearts.in/images/main-logo.png"
                    type="image/png"
                />
                <meta property="og:title" content="Sabapathi Fine Arts" />
                <meta
                    property="og:description"
                    content="Explore our premium, tailored printing services designed to meet all your needs. Let us transform your ideas into stunning prints!"
                />
                <meta
                    property="og:image"
                    content="https://sabapathifinearts.in/images/main-logo.png"
                />
                <meta
                    property="og:url"
                    content="https://sabapathifinearts.in/products"
                />
            </head>
            <body className={`${coinageCapsKrugerGray.variable} antialiased`}>
                <div className="flex flex-col items-center justify-center">
                    <Header urlPath={pathname} />
                    <main className="w-full">
                        <Products />
                    </main>
                    <Footer />
                </div>
                <SpeedInsights />
            </body>
        </html>
    );
}
