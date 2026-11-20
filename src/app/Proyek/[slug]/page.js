
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { Badge } from "@/component/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/component/ui/card";

export default async function DetailProyek({ params }) {
  const { slug } = await params;

  console.log("Slug dari URL:", slug);

  const { data: item, error } = await supabaseAdmin
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  console.log("Data proyek:", item);
  console.log("Error Supabase:", error);

  if (error) {
    console.error("Gagal mengambil detail proyek:", error.message);
    throw new Error("Gagal mengambil detail proyek.");
  }

  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <Link
        href="/Proyek"
        className="mb-6 inline-block text-sm text-muted-foreground hover:text-primary"
      >
        ← Kembali ke Proyek
      </Link>

      <Card>
        {item.gambar_url && (
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={item.gambar_url}
              alt={`Tangkapan layar ${item.judul}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1024px"
            />
          </div>
        )}

        <CardHeader>
          <Badge className="w-fit">{item.kategori}</Badge>

          <CardTitle className="text-3xl">
            {item.judul}
          </CardTitle>

          <p className="text-sm text-muted-foreground">
            {item.minggu}
          </p>
        </CardHeader>

        <CardContent>
          <h2 className="mb-3 text-xl font-semibold">
            Deskripsi Proyek
          </h2>

          <p className="whitespace-pre-wrap text-muted-foreground">
            {item.deskripsi}
          </p>

          {item.fitur && (
            <div className="mt-6">
              <h2 className="mb-3 text-xl font-semibold">
                Fitur Proyek
              </h2>

              <ul className="list-inside list-disc space-y-2">
                {(Array.isArray(item.fitur)
                  ? item.fitur
                  : item.fitur.split("\n")
                ).map((fitur, index) => (
                  <li key={index}>{fitur}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
