# Panduan Penggunaan

Berikut adalah cara penggunaan program dalam repo ini

## Mode Pengembangan

_Clone_ atau _download_ repo ini dan pastikan pnpm (nodejs package manager) telah terinstall. Cara instalasi pnpm dapat Anda lihat pada [laman resmi pnpm](https://pnpm.io/installation).

1.  Masuk ke dalam _root directory_ lalu jalankan `pnpm i` pada terminal untuk menginstall seluruh _dependency_.
2.  Jalankan development server dengan `pnpm dev` dan testing mode menggunakan cypress melalui perintah `pnpm test`.
3.  Setelah layanan yang Anda kembangkan telah siap jalankan `pnpm build` untuk mengkompilasi widget ini, widget siap terdistribusi akan muncul di folder **dist**.
4.  Simpan dan sajikan 2 file dalam folder **dist** (tepatnya pada subfolder **assets**) ke dalam layanan CDN.

## Mode Deployment

Gunakan dockerfile pada root folder atau deploy folder dist hasil build ke static file server manapun (misal github pages atau AWS S3).

## Mode Produksi

1. Pastikan 2 file asset widget telah Anda load, dengan rincian 1 file js dan 1 file css, baik melalui CDN ataupun _self-hosted_. Contoh :

```html
<script
  type="module"
  crossorigin
  src="https://widget.mikoding.com/assets/index.js"
></script>
<link rel="stylesheet" href="https://widget.mikoding.com/assets/index.css" />
```

2.  Buat sebuah elemen html dengan id copy-widget. Contoh :

```html
<div id="copy-widget" data-key="example-key" style="padding: 2rem;"></div>
```

3. Widget akan mendeteksi elemen secara otomatis dan menampilkan form.
