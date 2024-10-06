import localFont from "next/font/local";
import "./globals.css";

const geistMonoVF = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono-vf",
    weight: "100 900",
});

const bebasNeueRegular = localFont({
    src: "./fonts/bebas-neue/BebasNeue-Regular.woff",
    variable: "--font-bebas-neue-regular",
    weight: "100 900",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <title>Sabapathi Fine Arts</title>
                <meta
                    name="description"
                    content="Sabapathi Fine Arts – Welcome to Sabapathi Fine Arts, your trusted partner for premium printing solutions. We specialize in delivering high-quality, customized printing services to businesses and individuals. From business cards and brochures to large-format banners and packaging, our state-of-the-art equipment ensures sharp, vibrant, and durable prints. Explore our wide range of services and let us bring your vision to life with exceptional results, fast turnaround times, and outstanding customer service."
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
            <body
                className={`${geistMonoVF.variable} ${bebasNeueRegular.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
