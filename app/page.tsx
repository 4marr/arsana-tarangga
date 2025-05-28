import Image from "next/image";
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import History from "@/components/History"
import About from "@/components/About"
import Gallery from "@/components/Gallery"
import Actvity from "@/components/Activity"
import Footer from "@/components/Footer"

export default function Home() {
    return (
        <div className={`min-h-screen font-[family-name:var(--font-quicksand)] overflow-hidden`}>
            <Header />
            <main className="flex flex-col items-center sm:items-start">
            <Hero />
            <History />
            <About />
            <Gallery />
            <Actvity />
            <Footer />
            </main>
        </div>
    );
}
