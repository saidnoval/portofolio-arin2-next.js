## Tabel `skills`

Daftar keahlian Arini Khoiriyah.

| Kolom | Tipe | Keterangan |
| --- | --- | --- |
| `id` | `int8` | Primary key, nomor otomatis |
| `created_at` | `timestamptz` | Waktu data dibuat |
| `nama` | `text` | Nama keahlian |
| `level` | `text` | Tingkat kemampuan |

RLS aktif. Policy `Pengunjung boleh membaca keahlian`:
peran `anon` boleh select semua baris.