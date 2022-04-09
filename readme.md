# Panduan Penggunaan

Berikut adalah cara penggunaan program dalam repo ini

## Mode Pengembangan

_Clone_ atau _download_ repo ini dan pastikan pnpm (nodejs package manager) telah terinstall. Cara instalasi pnpm dapat Anda lihat pada [laman resmi pnpm](https://pnpm.io/installation).

1.  Masuk ke dalam _root directory_ lalu jalankan `pnpm i` pada terminal untuk menginstall seluruh _dependency_.
2.  Jalankan development server dengan `pnpm dev` dan testing mode menggunakan cypress melalui perintah `pnpm test`.
3.  Setelah layanan yang Anda kembangkan telah siap jalankan `pnpm build` untuk mengkompilasi widget ini, widget siap terdistribusi akan muncul di folder **dist**.
4.  Simpan dan sajikan 3 file dalam folder **dist** (tepatnya pada subfolder **assets**) ke dalam layanan CDN.

## Mode Produksi

1. Pastikan 3 file asset widget ini telah Anda load, dengan rincian 2 js dan 1 css, baik melalui CDN ataupun _self-hosted_. Contoh :

> <script type="module" crossorigin src="https://widget.mikoding.com/assets/index.5418c707.js"></script>
> <link rel="modulepreload" href="https://widget.mikoding.com/assets/vendor.0a89d859.js"> 
> <link rel="stylesheet" href="https://widget.mikoding.com/assets/index.fd430c9b.css">

2.  Buat sebuah elemen html dengan id copy-widget. Contoh :

> <div id="copy-widget" data-token="example-token" style="padding: 2rem;"></div>

3. Widget akan mendeteksi elemen secara otomatis dan menampilkan form.
