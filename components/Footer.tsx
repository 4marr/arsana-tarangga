import { Flag, Instagram, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4 border-t border-gray-800 w-full">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo & Description */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="/arsana.png"
                                alt="BIFOR Logo"
                                width={40}
                                height={40}
                                className="object-cover"
                            />
                            <span className="font-bold text-xl">Arsana Tarangga</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Paskibra yang berdedikasi untuk menjunjung tinggi nilai-nilai patriotisme dan nasionalisme melalui setiap
                            upacara bendera.
                        </p>
                        <div className="flex items-center gap-2 text-gray-400">
                            <MapPin className="h-4 w-4" />
                            <span>SMK Bina Informatika</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-primary">Menu</h3>
                        <div className="space-y-2">
                            <Link href="/" className="block text-gray-400 hover:text-primary transition-colors">
                                Beranda
                            </Link>
                            <Link href="/anggota" className="block text-gray-400 hover:text-primary transition-colors">
                                Anggota
                            </Link>
                            <Link href="/#about" className="block text-gray-400 hover:text-primary transition-colors">
                                Tentang Kami
                            </Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-primary">Kontak</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-gray-400">
                                <Mail className="h-4 w-4" />
                                <span>arsanatarangga@email.com</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Instagram className="h-4 w-4" />
                                <span>@arsanatarangga</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Paskibra Arsana Tarangga. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
