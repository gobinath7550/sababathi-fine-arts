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

export const metadata = {
    title: "Sababathi Fine Arts",
    description: "Sababathi Fine Arts",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${geistMonoVF.variable} ${bebasNeueRegular.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
