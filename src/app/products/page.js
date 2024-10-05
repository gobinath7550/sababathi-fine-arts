"use client";
import { usePathname } from "next/navigation";

import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import Products from "../components/home/sections/Products";

export default function Index() {
    const pathname = usePathname();
    return (
        <div className="flex flex-col items-center justify-center">
            <Header urlPath={pathname} />
            <main className="w-full">
                <Products />
            </main>
            <Footer />
        </div>
    );
}
