import localFont from "next/font/local";
import "./globals.css";

const coinageCapsKrugerGray = localFont({
    src: "./fonts/CoinageCapsKrugerGray.woff",
    variable: "--font-coinage-caps-kruger-gray",
    weight: "100 900",
});

export default function RootLayout({ children }) {
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
                <meta
                    name="description"
                    content="We offer high-quality, customized prints, including business cards, brochures, banners, and packaging. Discover how we can bring your vision to life!"
                />
                <meta
                    name="keywords"
                    content="Sabapathi Fine Arts, printing services, custom printing, professional printing, digital printing, offset printing, high-quality prints, business cards printing, brochures printing, posters printing, large format printing, banner printing, affordable printing services, custom design printing, personalized printing, promotional materials, print shop, professional print solutions, bulk printing services, creative printing solutions"
                />
                <meta name="author" content="Sabapathi" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Sabapathi Fine Arts" />
                <meta
                    property="og:description"
                    content="Sabapathi Fine Arts – Welcome to Sabapathi Fine Arts, your trusted partner for premium printing solutions. We specialize in delivering high-quality, customized printing services to businesses and individuals. From business cards and brochures to large-format banners and packaging, our state-of-the-art equipment ensures sharp, vibrant, and durable prints. Explore our wide range of services and let us bring your vision to life with exceptional results, fast turnaround times, and outstanding customer service."
                />
                <meta property="og:image" content="/images/main-logo.png" />
                <meta
                    property="og:url"
                    content="https://sababathi-fine-arts.vercel.app/"
                />
            </head>
            <body className={`${coinageCapsKrugerGray.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
