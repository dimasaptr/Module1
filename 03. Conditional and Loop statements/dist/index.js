"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const age = 16;
const isLegible = age >= 17;
const almotsLegible = age >= 15;
console.log(`Umur kamu ${age} Tahun`);
if (isLegible) {
    console.log(`Kamu sudah bisa bikin KTP!`);
}
else if (almotsLegible) {
    console.log(`Kamu sedikit lagi bisa bikin KTP!`);
}
else {
    console.log(`Kamu belum bisa bikin KTP!`);
}
// else {
//     console.log(`Kamu belum bisa bikin KTP!`);
// }
const height = 155;
const isTall = height >= 175;
console.log(`Tinggi kamu ${height} cm`);
if (isTall) {
    console.log(`Kamu memenuhi untuk daftar Pilot!`);
}
else {
    console.log(`Kamu tidak memenuhi untuk daftar Pilot!`);
}
const money = 16500;
const isEnoughMoney = money >= 17000;
console.log(`Uang kamu ${money} rupiah`);
if (isEnoughMoney) {
    console.log(`selamat! Kamu bisa membeli nasi goreng!`);
}
else {
    console.log(`Kamu tidak bisa membeli nasi goreng! huhu kasian deh`);
}
const grade = `E`;
if (grade === `A`) {
    console.log(`Nilai: Sangat Baik!`);
}
else if (grade === `B`) {
    console.log(`Nilai: Baik`);
}
else if (grade === `C`) {
    console.log(`Nilai: Cukup`);
}
else {
    console.log(`Tidak Lulus Ujian`);
}
//  else if (grade === `E`) {
//     console.log(`Nilai: Sangat Buruk`);
// } 
switch (grade) {
    case "A":
        console.log(`Nilai anda Sangat Baik!`);
        break;
    case "B":
        console.log(`Nilai anda Baik!`);
        break;
    case "C":
        console.log(`Nilai anda Cukup!`);
        break;
    case "D":
        console.log(`Nilai anda Buruk!`);
        break;
    case "E":
        console.log(`Nilai anda Sangat Buruk!`);
        break;
    default:
        console.log(`Nilai tidak valid!`);
}
const n = 7.5;
const isEven = n % 2 === 0;
if (isEven) {
    console.log(`${n} adalah bilangan genap.`);
}
else {
    console.log(`${n} adalah bialngan ganjil.`);
}
//# sourceMappingURL=index.js.map