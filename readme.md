# Panduan Penggunaan

Berikut adalah cara penggunaan program dalam repo ini

## Mode Pengembangan

_Clone_ atau _download_ repo ini dan pastikan pnpm (nodejs package manager) telah terinstall. Cara instalasi pnpm dapat Anda lihat pada [laman resmi pnpm](https://pnpm.io/installation).

1.  Masuk ke dalam _root directory_ lalu jalankan `pnpm i` pada terminal untuk menginstall seluruh _dependency_.
2.  Jalankan development server dengan `pnpm dev` dan testing mode menggunakan cypress melalui perintah `pnpm test`.
3.  Setelah layanan yang Anda kembangkan telah siap jalankan `pnpm build` untuk mengkompilasi widget ini, widget siap terdistribusi akan muncul di folder **dist**.
4.  Simpan dan sajikan 3 file dalam folder **dist** (tepatnya pada subfolder **assets**) ke dalam layanan CDN.

## Mode Produksi

Pastikan 3 file asset widget ini telah Anda load, dengan rincian 2 js dan 1 css, baik langsung melalui CDN ataupun _self-hosted_. Buat sebuah element html dengan id copy-widget. Contoh :

> <div id='copy-widget'></div>

Widget akan mendeteksi element secara otomatis dan menampilkan form.
