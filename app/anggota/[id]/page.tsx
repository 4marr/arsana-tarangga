import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, Slack, MapPin, Heart, Mail, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import troopsData from "@/data/troops.json"

interface TroopPageProps {
    params: {
        id: string
    }
}

export default function anggotaPage({ params }: TroopPageProps) {
    const { troops } = troopsData
    const troop = troops.find((t) => t.id === params.id)

    if (!troop) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-black">
            {/* Header */}
            <section className="bg-gradient-to-r from-maroon-900 to-black text-white py-8 px-4">
                <div className="max-w-4xl mx-auto">
                    <Button asChild variant="secondary" className="mb-4 bg-gray-800 hover:bg-gray-700 text-white">
                        <Link href="/anggota">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Kembali ke Daftar Anggota
                        </Link>
                    </Button>
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <Image
                            src={troop.photo || "/placeholder.svg"}
                            alt={troop.name}
                            width={200}
                            height={200}
                            className="object-cover rounded-full border-4 border-primary shadow-lg aspect-square"
                        />
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl font-bold mb-2">{troop.name}</h1>
                            <p className="text-xl text-gray-300 mb-4">{troop.position}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Profile Content */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="bg-gray-900 border-gray-700">
                            <CardHeader>
                                <CardTitle className="text-white">Tentang {troop.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-maroon-900/50 p-4 rounded-lg border-l-4 border-primary">
                                    <p className="text-primary font-semibold italic">"{troop.motto}"</p>
                                    <p className="text-gray-400 text-sm mt-1">- Motto Hidup</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <Card className="bg-gray-900 border-gray-700">
                            <CardHeader>
                                <CardTitle className="text-white">Informasi Personal</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Separator className="bg-gray-700" />
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-4 w-4 text-gray-400" />
                                    <div>
                                        <p className="text-sm text-gray-400">Sekolah</p>
                                        <p className="font-semibold text-white">{troop.school}</p>
                                    </div>
                                </div>
                                <Separator className="bg-gray-700" />
                                <div className="flex items-center gap-3">
                                    <Slack className="h-4 w-4 text-gray-400" />
                                    <div>
                                        <p className="text-sm text-gray-400">Jurusan</p>
                                        <p className="font-semibold text-white">{troop.major}</p>
                                    </div>
                                </div>
                                <Separator className="bg-gray-700" />
                                <div className="flex items-center gap-3">
                                    <Calendar className="h-4 w-4 text-gray-400" />
                                    <div>
                                        <p className="text-sm text-gray-400">Tanggal Lahir</p>
                                        <p className="font-semibold text-white">
                                            {troop.ttl}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-900 border-gray-700">
                            <CardHeader>
                                <CardTitle className="text-white">Kontak</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Instagram className="h-4 w-4" />
                                    <Link
                                        href={`https://instagram.com/${troop.contact.instagram.replace("@", "")}`}
                                        className="text-primary hover:underline"
                                        target="_blank"
                                    >
                                        {troop.contact.instagram}
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}
