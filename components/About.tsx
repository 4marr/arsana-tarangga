"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion";
import { Flag, Target } from "lucide-react"

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    }

    return (
        <section id="about" className="py-16 px-4 w-full relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/50" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-primary/5 to-primary-gradient/5 blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Tentang Arsana Tarangga</h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Paskibra Arsana Tarangga adalah unit pengibar bendera yang terdiri dari siswa-siswi pilihan yang memiliki
                        dedikasi tinggi terhadap tanah air.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={ref}>
                    <motion.div
                        className="group relative overflow-hidden rounded-xl border border-input bg-background/50 backdrop-blur-sm p-6 transition-all hover:shadow-md hover:shadow-primary/5 hover:border-primary/50"
                        variants={itemVariants}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-gradient/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                <Flag className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">Visi</h3>
                            <p className="text-muted-foreground">Menjadi pasukan pengibar bendera terdepan yang menjunjung tinggi nilai-nilai patriotisme dan
                                nasionalisme.</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="group relative overflow-hidden rounded-xl border border-input bg-background/50 backdrop-blur-sm p-6 transition-all hover:shadow-md hover:shadow-primary/5 hover:border-primary/50"
                        variants={itemVariants}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-gradient/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                <Target className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold">Misi</h3>
                            <p className="text-muted-foreground">Melaksanakan tugas pengibaran bendera dengan penuh disiplin, kehormatan, dan rasa bangga sebagai warga
                                negara Indonesia.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
