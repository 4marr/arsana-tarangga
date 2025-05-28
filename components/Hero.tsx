"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Clock, Code, School, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Counter from "@/components/ui/counter"

export default function Hero() {
    const [scrollY, setScrollY] = useState(0);
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="beranda" className="relative w-full lg:px-16 pt-40 pb-36 lg:py-40 overflow-hidden min-h-screen">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/50" />

                {/* Animated Gradient Orbs */}
                <div
                    className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-primary/20 to-primary-gradient/20 blur-3xl"
                    style={{
                        transform: `translate(${scrollY * 0.1}px, ${scrollY * -0.05
                            }px)`,
                        opacity: Math.max(0.2, 1 - scrollY * 0.001),
                    }}
                />
                <div
                    className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-gradient-to-r from-primary-gradient/20 to-primary/20 blur-3xl"
                    style={{
                        transform: `translate(${scrollY * -0.1}px, ${scrollY * 0.05
                            }px)`,
                        opacity: Math.max(0.2, 1 - scrollY * 0.001),
                    }}
                />

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="absolute inset-0 -z-10 overflow-hidden">
                <img src="/heroBG.jpeg" alt="" className="object-cover w-full h-full opacity-30 object-[0%_60%]" />
            </div>

            <div className="px-4 lg:px-6 relative">
                <div className="flex flex-col items-center justify-center text-center">
                    <motion.div
                        className="flex flex-col justify-center items-center space-y-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div>
                            <div className="inline-flex items-center justify-center rounded-full border px-3 py-1 text-sm w-fit">
                                <Image
                                    src="/arsana.png"
                                    alt="BIFOR Logo"
                                    width={20}
                                    height={20}
                                    className="object-cover mr-1"
                                />
                                <span>Bintang Kehidupan</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <h1 className="text-4xl font-bold sm:text-5xl lg:text-7xl">Arsana Tarangga</h1>
                            <p className="max-w-[600px] text-muted-foreground lg:text-xl">Pasukan Pengibar Bendera yang berdedikasi untuk menjunjung tinggi nilai-nilai patriotisme, disiplin, dan kebanggaan nasional melalui setiap upacara bendera.</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="/anggota">
                                <button
                                    className="h-11 rounded-xl px-8 text-white font-semibold bg-gradient-to-r from-primary to-primary-gradient hover:from-primary/90 hover:to-primary-gradient/90 transition-all duration-300"
                                >
                                    Kenali Anggota Kami
                                </button>
                            </a>
                            <a href="#tentang">
                                <button
                                    className="group h-11 border focus-visible:ring-0 rounded-xl px-8 relative overflow-hidden border-primary"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-gradient/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                                    <span className="relative">Tentang Kami</span>
                                </button>
                            </a>
                        </div>

                        <div className="flex items-center gap-8 mb-8 lg:mb-0">
                            <div className="flex flex-col items-center">
                                <div ref={ref} className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-gradient">
                                    {isInView && <Counter to={11} />}
                                </div>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Users className="h-4 w-4 text-primary-gradient" />
                                    Anggota Aktif
                                </div>
                            </div>
                            <div className="h-10 border-r border-border"></div>
                            <div className="flex flex-col items-center">
                                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-gradient">
                                    {isInView && <Counter to={50} suffix="+" />}
                                </div>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <School className="h-4 w-4 text-primary-gradient" />
                                    Upacara Dilaksanakan
                                </div>
                            </div>
                            <div className="h-10 border-r border-border"></div>
                            <div className="flex flex-col items-center">
                                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-gradient">
                                    {isInView && <Counter to={10} suffix="+" />}
                                </div>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Clock className="h-4 w-4 text-primary-gradient" />
                                    Tahun Berdiri
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
