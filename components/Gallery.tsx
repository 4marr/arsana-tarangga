import Image from "next/image";

export default function Gallery() {
    return (
        <section className="py-16 px-4 w-full">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Galeri Kegiatan</h2>
                        <p className="text-lg text-gray-300">
                            Dokumentasi berbagai kegiatan dan momen bersejarah Paskibra Arsana Tarangga
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="relative group overflow-hidden rounded-lg">
                            <Image
                                src="/kegiatan1.jpeg"
                                alt="Upacara Bendera Hari Senin"
                                width={400}
                                height={300}
                                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="font-semibold mb-1">Upacara Bendera</h3>
                                <p className="text-sm opacity-90">Upacara rutin setiap hari Senin</p>
                            </div>
                        </div>

                        <div className="relative group overflow-hidden rounded-lg">
                            <Image
                                src="/kegiatan1.jpeg"
                                alt="Latihan PBB Intensif"
                                width={400}
                                height={300}
                                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="font-semibold mb-1">Latihan PBB</h3>
                                <p className="text-sm opacity-90">Latihan intensif setiap minggu</p>
                            </div>
                        </div>

                        <div className="relative group overflow-hidden rounded-lg">
                            <Image
                                src="/kegiatan1.jpeg"
                                alt="Kompetisi PBB Tingkat Provinsi"
                                width={400}
                                height={300}
                                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="font-semibold mb-1">Kompetisi PBB</h3>
                                <p className="text-sm opacity-90">Juara 1 Tingkat Provinsi 2023</p>
                            </div>
                        </div>

                        <div className="relative group overflow-hidden rounded-lg">
                            <Image
                                src="/kegiatan1.jpeg"
                                alt="Upacara HUT RI"
                                width={400}
                                height={300}
                                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="font-semibold mb-1">Upacara HUT RI</h3>
                                <p className="text-sm opacity-90">Peringatan Kemerdekaan Indonesia</p>
                            </div>
                        </div>

                        <div className="relative group overflow-hidden rounded-lg">
                            <Image
                                src="/kegiatan1.jpeg"
                                alt="Pelatihan Kepemimpinan"
                                width={400}
                                height={300}
                                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="font-semibold mb-1">Pelatihan Kepemimpinan</h3>
                                <p className="text-sm opacity-90">Pengembangan karakter anggota</p>
                            </div>
                        </div>

                        <div className="relative group overflow-hidden rounded-lg">
                            <Image
                                src="/kegiatan1.jpeg"
                                alt="Penerimaan Anggota Baru"
                                width={400}
                                height={300}
                                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="font-semibold mb-1">Penerimaan Anggota Baru</h3>
                                <p className="text-sm opacity-90">Regenerasi Arsana Tarangga</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}
