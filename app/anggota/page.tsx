import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Trophy } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import troopsData from "@/data/troops.json"
import Header from "@/components/Header"

export default function anggotaPage() {
    const { troops } = troopsData

    return (
        <div className="min-h-screen bg-black">
            <Header />
            {/* Header */}
            <section className="bg-gradient-to-r from-primary via-black to-primary text-white py-32 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        Anggota Paskibra <span className="text-primary">Arsana Tarangga</span>
                    </h1>
                    <p className="text-xl text-gray-300">Kenali para pejuang bendera yang berdedikasi untuk bangsa dan negara</p>
                </div>
            </section>

            {/* Troops Grid */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {troops.map((troop) => (
                            <Card
                                key={troop.id}
                                className="bg-gray-900 border-gray-700 hover:border-primary/50 hover:shadow-lg transition-all"
                            >
                                <CardHeader className="text-center">
                                    <div className="mx-auto mb-4">
                                        <Image
                                            src={troop.photo || "/placeholder.svg"}
                                            alt={troop.name}
                                            width={120}
                                            height={120}
                                            className="object-cover rounded-full border-4 border-primary/20 aspect-square"
                                        />
                                    </div>
                                    <CardTitle className="text-xl text-white">{troop.name}</CardTitle>
                                    <CardDescription className="text-primary font-semibold">{troop.position}</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <Button asChild className="w-full bg-primary hover:bg-primary-gradient text-white">
                                        <Link href={`/anggota/${troop.id}`}>Lihat Profil Lengkap</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
