"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge"

export default function Activity() {
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
        <section className="py-16 px-4 w-full relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Kegiatan Kami</h2>
                    <p className="text-lg text-gray-300">
                        Berbagai kegiatan yang kami lakukan untuk mengasah kemampuan dan mempererat persaudaraan
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={ref}>
                    <motion.div
                        className="group relative overflow-hidden rounded-xl border border-input bg-background/50 backdrop-blur-sm p-6 transition-all hover:shadow-md hover:shadow-primary/5 hover:border-primary/50"
                        variants={itemVariants}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-gradient/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <h3 className="mb-2 text-xl font-bold">Upacara Bendera</h3>
                            <p className="text-muted-foreground mb-2">Melaksanakan upacara bendera setiap hari Senin dan hari-hari besar nasional dengan penuh khidmat dan
                                disiplin.</p>
                            <Badge variant="secondary" className="bg-yellow-400/20 text-yellow-400">
                                Rutin
                            </Badge>
                        </div>
                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-primary-gradient group-hover:w-full transition-all duration-300" />
                    </motion.div>
                    <motion.div
                        className="group relative overflow-hidden rounded-xl border border-input bg-background/50 backdrop-blur-sm p-6 transition-all hover:shadow-md hover:shadow-primary/5 hover:border-primary/50"
                        variants={itemVariants}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-gradient/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <h3 className="mb-2 text-xl font-bold">Latihan PBB</h3>
                            <p className="text-muted-foreground mb-2">Latihan Peraturan Baris Berbaris (PBB) secara rutin untuk menjaga kekompakan dan ketepatan gerakan.</p>
                            <Badge variant="secondary" className="bg-yellow-400/20 text-yellow-400">
                                Mingguan
                            </Badge>
                        </div>
                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-primary-gradient group-hover:w-full transition-all duration-300" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
