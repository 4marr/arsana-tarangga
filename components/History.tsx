import { Calendar, Award, Star } from "lucide-react"
import Image from "next/image"

export default function History() {
    return (
        <section className="py-16 px-4 bg-gray-900 w-full">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Sejarah Arsana Tarangga</h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Perjalanan panjang pembentukan dan perkembangan Paskibra Arsana Tarangga
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="border-l-4 border-primary pl-6">
                            <h3 className="text-xl font-bold text-white mb-2">Pembentukan Awal</h3>
                            <p className="text-gray-300">Paskibra Arsana Tarangga berdiri sejak tahun 2016. Paskibra asrsana tarangga memiliki arti yang mendalam yaitu BINTANG KEHIDUPAN,Kata Arsana Tarangga di ambil dari bahasa Sanskerta "Arsana" dalam bahasa Sanskerta dapat berarti "keberanian", "kemuliaan", atau "kekuatan" sedangkan "tarangga" dapat diartikan sebagai "gelombang" atau "terumbu". Kombinasi ini juga digunakan untuk melambangkan kekuatan alam yang memiliki semangat kemuliaan. Sebelum Bernama Arsana Tarangga paskibra SMK Bina Informatika Bernama Laskar Garuda,Laskar Garuda mencerminkan kekuatan, semangat, dan persatuan bangsa Indonesia, yang diwakili oleh lambang Garuda Pancasila. Anggota Paskibra, yang merupakan bagian dari "Laskar Garuda", diharapkan menjadi penerus bangsa yang bersemangat, disiplin, dan siap menjaga kedaulatan negara.
                            </p>
                        </div>

                        <div className="border-l-4 border-primary pl-6">
                            <h3 className="text-xl font-bold text-white mb-2">Tri-sakhi</h3>
                            <p className="text-gray-300">Paskibra Arsana Tarangga Didirikan Oleh "Tri Sakhi"(Tiga sahabat) yang memiliki peran penting dalam perkembangan Paskibra Arsana Tarangga yaitu;
                            </p>
                            <ul className="list-disc list-inside mt-2">
                                <li>muhammad Bintang Drajat Ikhsan Maulana</li>
                                <li>Fajar Dwi Prianto</li>
                                <li>Muh. Dzulkifli</li>
                            </ul>
                        </div>

                        <div className="border-l-4 border-primary pl-6">
                            <h3 className="text-xl font-bold text-white mb-2">Era Keemasan</h3>
                            <p className="text-gray-300">Contoh prestasi Paskibra Arsana Tarangga :
                            </p>
                            <ul className="list-disc list-inside mt-2">
                                <li>Berkontribusi Dalam Pengibaran hut Ri ke 72 Tingkat kecamatan bogor selatan tahun 2017.</li>
                                <li>Mewakilkan Sekolah Smk bina informatika dalam Berbagai lomba Baris berbaris.</li>
                                <li>Salah satu anggota Paskibra Arsana Tarangga Berkontribusi dalam Pengibaran bendera Hut Ri ke 73 Tingkat Kota Bogor Pada tahun 2018.</li>
                                <li>Berkontribusi Menjadi Pasukan Pengibar Dalam acara Hut Ri ke 78 di Smk Bina Informatika</li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative">
                        <Image
                            src="/sejarah.jpeg"
                            alt="Sejarah Paskibra Arsana Tarangga"
                            width={600}
                            height={400}
                            className="object-cover object-bottom rounded-lg shadow-2xl border border-primary/20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                        <div className="absolute bottom-4 left-4 text-white">
                            <p className="text-sm opacity-90">Upacara HUT RI ke 78 - Agustus 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
