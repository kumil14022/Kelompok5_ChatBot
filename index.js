const { Bot, webhookCallback } = require("grammy");
const express = require("express");

require("dotenv").config();

const bot = new Bot(process.env.BOT_TOKEN);

//menyambut 
bot.command("hallo", (ctx) => ctx.reply("Selamat Datang Di Kontak Resmi SMK NUSA BANGSA.\nSilahkan Pilih Keperluan Anda :\n 1. Info PPDB 2023/2024\n 2. Tentang Sekolah\n 3. Pertayaan Lain\n *ChatBot*"));
bot.command("selamat pagi", (ctx) => ctx.reply("Selamat Datang Di Kontak Resmi SMK NUSA BANGSA.\nSilahkan Pilih Keperluan Anda :\n 1. Info PPDB 2023/2024\n 2. Tentang Sekolah\n 3. Pertayaan Lain\n *ChatBot*"));
bot.command("pagi", (ctx) => ctx.reply("Selamat Datang Di Kontak Resmi SMK NUSA BANGSA.\nSilahkan Pilih Keperluan Anda :\n 1. Info PPDB 2023/2024\n 2. Tentang Sekolah\n 3. Pertayaan Lain\n *ChatBot*"));
bot.command("selamat siang", (ctx) => ctx.reply("Selamat Datang Di Kontak Resmi SMK NUSA BANGSA.\nSilahkan Pilih Keperluan Anda :\n 1. Info PPDB 2023/2024\n 2. Tentang Sekolah\n 3. Pertayaan Lain\n *ChatBot*"));
bot.command("siang", (ctx) => ctx.reply("Selamat Datang Di Kontak Resmi SMK NUSA BANGSA.\nSilahkan Pilih Keperluan Anda :\n 1. Info PPDB 2023/2024\n 2. Tentang Sekolah\n 3. Pertayaan Lain\n *ChatBot*"));
bot.command("selamat sore", (ctx) => ctx.reply("Selamat Datang Di Kontak Resmi SMK NUSA BANGSA.\nSilahkan Pilih Keperluan Anda :\n 1. Info PPDB 2023/2024\n 2. Tentang Sekolah\n 3. Pertayaan Lain\n *ChatBot*"));
bot.command("sore", (ctx) => ctx.reply("Selamat Datang Di Kontak Resmi SMK NUSA BANGSA.\nSilahkan Pilih Keperluan Anda :\n 1. Info PPDB 2023/2024\n 2. Tentang Sekolah\n 3. Pertayaan Lain\n *ChatBot*"));
bot.command("assalamualaikum", (ctx) => ctx.reply("Selamat Datang Di Kontak Resmi SMK NUSA BANGSA.\nSilahkan Pilih Keperluan Anda :\n 1. Info PPDB 2023/2024\n 2. Tentang Sekolah\n 3. Pertayaan Lain\n *ChatBot*"));
bot.command("hai", (ctx) => ctx.reply("Selamat Datang Di Kontak Resmi SMK NUSA BANGSA.\nSilahkan Pilih Keperluan Anda :\n 1. Info PPDB 2023/2024\n 2. Tentang Sekolah\n 3. Pertayaan Lain\n *ChatBot*"));
bot.command("halo", (ctx) => ctx.reply("Selamat Datang Di Kontak Resmi SMK NUSA BANGSA.\nSilahkan Pilih Keperluan Anda :\n 1. Info PPDB 2023/2024\n 2. Tentang Sekolah\n 3. Pertayaan Lain\n *ChatBot*"));

//setelah memilih menu muncul ini
bot.command("1", (ctx) => ctx.reply("Kami Telah Membuka Pendaftaran Siswa/i Baru MI NURUL HUDA RUMPAKSINANG Tahun Ajaran 2022/2023. Pendaftaran Dibuka Dari Bulan Februari s/d Juni 2023. Persyaratan Pendaftaran Sebagai Berikut :\n 1. Photo Copy KTP Wali Murid\n 2. Photo Copy Kartu Keluarga\n 3. Photo Copy Akte Kelahiran\n 4. Photo Copy Ijazah TK/RA (Jika Ada)\n 5. Pas Photo Ukuran 2 x 3 = 2 Lembar\n 6. Pas Photo Ukuran 3 x 4 = 2 Lembar\n Note : Jika Ingin Ke Sekolah Diharapkan Membuat Janji Terlebih Dahulu. Terima Kasih\n *ChatBot*"));
bot.command("2", (ctx) => ctx.reply("VISI : Membentuk Siswa Menjadi Manusia Yang Cerdas, Kreatif, Mandiri, Berwawasan Global, Dan Berakhlak Mulia.\nMISI : Menyelengarakan Pendidikan Yang Akan Melahirkan Lulusan Yang Beriman Dan Bertaqwa.\n *ChatBot*"));
bot.command("3", (ctx) => ctx.reply("Silahkan Bertanya. Admin Kami Akan Segera Membalas chat anda..\nTerima Kasih.\n *ChatBot*"));

//jika pilihan tidak ada di menu
bot.on("message", (ctx) => ctx.reply(" "));

if (process.env.NODE_ENV === "production") {
  const app = express();
  app.use(express.json());
  app.use(webhookCallback(bot, "express"));

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Bot listening on port ${PORT}`);
  });
} else {
  bot.start();
}

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));