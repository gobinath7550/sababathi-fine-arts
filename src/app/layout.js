import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const bronsul = localFont({
  src: "./fonts/bronsul/Bronsul.woff",
  variable: "--font-bronsul",
  weight: "100 900",
});

const caviarDreams = localFont({
  src: "./fonts/caviar-dreams/CaviarDreams.woff",
  variable: "--font-dreams",
  weight: "100 900",
});

const caviarDreamsBold = localFont({
  src: "./fonts/caviar-dreams/CaviarDreamsBold.woff",
  variable: "--font-dreams-bold",
  weight: "100 900",
});

const caviarDreamsBoldItalic = localFont({
  src: "./fonts/caviar-dreams/CaviarDreamsBoldItalic.woff",
  variable: "--font-dreams-bold-italic",
  weight: "100 900",
});

const caviarDreamsItalic = localFont({
  src: "./fonts/caviar-dreams/CaviarDreamsItalic.woff",
  variable: "--font-dreams-italic",
  weight: "100 900",
});

const latoBlack = localFont({
  src: "./fonts/lato/Lato-Black.woff",
  variable: "--font-lato-black",
  weight: "100 900",
});

const latoBlackItalic = localFont({
  src: "./fonts/lato/Lato-BlackItalic.woff",
  variable: "--font-lato-black-italic",
  weight: "100 900",
});

const latoBold = localFont({
  src: "./fonts/lato/Lato-Bold.woff",
  variable: "--font-lato-bold",
  weight: "100 900",
});

const latoBoldItalic = localFont({
  src: "./fonts/lato/Lato-BoldItalic.woff",
  variable: "--font-lato-bold-italic",
  weight: "100 900",
});

const latoHairline = localFont({
  src: "./fonts/lato/Lato-Hairline.woff",
  variable: "--font-lato-hair-line",
  weight: "100 900",
});

const latoHairlineItalic = localFont({
  src: "./fonts/lato/Lato-HairlineItalic.woff",
  variable: "--font-lato-hair-line-italic",
  weight: "100 900",
});

const latoItalic = localFont({
  src: "./fonts/lato/Lato-Italic.woff",
  variable: "--font-lato-italic",
  weight: "100 900",
});

const latoLight = localFont({
  src: "./fonts/lato/Lato-Light.woff",
  variable: "--font-lato-light",
  weight: "100 900",
});

const latoLightItalic = localFont({
  src: "./fonts/lato/Lato-LightItalic.woff",
  variable: "--font-lato-light-italic",
  weight: "100 900",
});

const latoRegular = localFont({
  src: "./fonts/lato/Lato-Regular.woff",
  variable: "--font-lato-regular",
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
        className={`${geistSans.variable} ${geistMono.variable} ${bronsul.variable} ${caviarDreams.variable} ${caviarDreamsBold.variable} ${caviarDreamsBoldItalic.variable} ${caviarDreamsItalic.variable} ${latoBlack.variable} ${latoBold.variable} ${latoBoldItalic.variable} ${latoBlackItalic.variable} ${latoHairline.variable} ${latoHairlineItalic.variable} ${latoItalic.variable} ${latoLight.variable} ${latoLightItalic.variable} ${latoRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
