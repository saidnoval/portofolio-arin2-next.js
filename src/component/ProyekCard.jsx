
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function ProyekCard({ proyek }) {
  return (
    <Link
      href={`/Proyek/${proyek.slug}`}
      className="block overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:shadow-md"
    >
      <Card className="h-full">
        {proyek.gambar_url?.trim() ? (
          <Image
            src={proyek.gambar_url}
            alt={`Tangkapan layar ${proyek.judul}`}
            width={640}
            height={420}
            className="h-auto w-full object-cover"
          />
        ) : (
          <div className="flex h-52 items-center justify-center bg-muted text-muted-foreground">
            Gambar belum tersedia
          </div>
        )}

        <CardHeader>
          <Badge>{proyek.kategori}</Badge>

          <CardTitle className="text-lg text-primary">
            {proyek.judul}
          </CardTitle>

          <CardDescription>
            {proyek.deskripsi}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
