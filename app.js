// const animal = ['dog','horse', 'cat', 'bird', 'zebra'];

// for (let i = 1; i <animal.length; i++){
//     console.log( i, 'i have a ' + animal[i]);
// }

// const pilihan = "abcd";
// for (let i = 1; i <= 5; i++) {
//   console.log(`${i}. soal nomor ${i}:`);
//   for (let j = 0; j < pilihan.length; j++) {
//     console.log(` ${pilihan[j]}. jawaban nomor ${i}`);
//   }
// }

// const studentRow = [
//     ['Olivia', 'Liam', 'Emma', 'Noah'],
//     ['Ava', 'William', 'Sophia', 'James'],
//     ['Isabella', 'Oliver', 'Mia', 'Benjamin'],
//     ['Charlotte', 'Elijah', 'Amelia', 'Lucas']
// ];
// let counter = 1;
// for( row of studentRow){
//     console.log(`Seat row #${counter}`);
//     counter++;
//     for(student of row){
//         console.log(student); 
//     }
    
// };

// for (let i = 0; i < studentRow.length; i++){
//     const row = studentRow[i];
//     console.log(`Seat row #${i+1}`);

//     for (let j = 0; j < row.length; j++){
//         console.log(`   ${row[j]}`);
//     }
    
// }


// let num = 0;
// while (num < 10){
//     console.log(num);
//     num++;
// }

// const password = '12345';

// let guess = prompt('enter the password');
// while (guess !== password){
//     guess = prompt('enter the password');
// }
// alert('correct password!');

// let input = prompt('hei say something');

// while (true){
//     input = prompt(input);
//     if(input.toLowerCase() === 'stop') break;
// }
// alert('oke you stop it!');

// for(let i = 0; i<10000; i++){
//     console.log(i);
//     if(i === 200) break;
// }


// let maximum = parseInt(prompt('masukka nilai maksimal'));
// while (!maximum){
//     maximum = parseInt(prompt('Harus masukkan nilai maksimal'));
// }

// const targetNum = Math.floor(Math.random() * maximum)+1;
// console.log('targetNum', targetNum);

// let guess = parseInt(prompt('masukkan angka tebakan'));
// let attempts = 1;

// while(parseInt(guess) !==targetNum){
//     attempts++;
//     if(guess < targetNum){
//         guess = parseInt(prompt('nilai terlalu kecil, coba lagi'));
//     } else {
//         guess = parseInt(prompt('nilai terlalu besar, coba lagi'));
//     }
// }

// alert(`selamat anda berhasil menebak angka dengan ${attempts} kali coba`)


// const buah = ['apel', 'mangga', 'jeruk', 'pisang', 'anggur'];

// for (let i = 0; i <buah.length; i++){
//     console.log(` buah ${buah[i]}`);
    
// }

// for(let buahan of buah){
//     console.log(buahan);
    
// }

// const buah = ["pepaya", "pisang", "nanas"];

// for (const [index, namaBuah] of buah.entries()) {
//   const nomorBuah = index + 1;
//   console.log(`buah ${nomorBuah}: ${namaBuah}`);
// }

// const studentRow = [
//   ["Olivia", "Jamie", "Ema", "Watson"],
//   ["Amelia", "Oliver", "Eve", "Wood"],
//   ["Stephen", "Don Pablo", "Gavaria", "Santino"],
// ];

// let absentNum = 1;

// for (let row of studentRow) {
//   for (let student of row) {
//     console.log(`${absentNum}. ${student}`);
//     absentNum++;
//   }
// }

// const studentScore = {
//     Olivia: 80,
//     Jamie: 95,
//     Ema: 88,
//     Watson: 90,
//     Amelia: 85,
//     Oliver: 90,
//     Eve: 89,
//     Wood: 92,
//     Stephen: 100,
//     Gavaria: 100,
//     Santino: 94,
// };

// for(let student in studentScore){
//     console.log(`${student} mendapatkan nilai ${studentScore[student]}`); 
// }

// let total = 0;
// let scores = Object.values(studentScore);
// for (let score of scores){
//     total += score;
// }
// console.log(`nilai rata-rata siswa adalah ${total/scores.length}`);


// let dadu = Math.floor(Math.random() * 6) + 1;
// console.log('dadu', dadu);

// function lemparDadu(){
//     console.log(Math.floor(Math.random() * 6) + 1);
// }


// function enamKali(func){
//     func();
//     func();
//     func();
//     func();
//     func();
//     func();
// }

// function lemparDadu() {
//     hasil = Math.floor(Math.random() * 6) + 1;
//     console.log(hasil);
    
// }

// enamKali(lemparDadu);


// function hasilFunction(){
//     const rand = Math.random() * 1;

//     if(rand < 0.10){
//         return function(){
//             console.log('Hasil angkanya lebih kecil');
//         }
//     }
//     else {
//         return function(){
//             console.log('Hasil angkanya lebih besar');
//         }
//     }
// }

// const result = hasilFunction();

// result();

// const hasil = function hasilFunction() {
//   const angkaAcak = Math.floor(Math.random() * 10); 
//   if (angkaAcak > 5) {
//     return function () {
//       console.log(`Selamat, angkanya lebih besar, yaitu ${angkaAcak}`);
//     };
//   } else {
//     return function () {
//       console.log(`Maaf, angka lebih kecil, yaitu ${angkaAcak}`);
//     };
//   }
// };

// hasil()();

// const me = {
//     name: 'Sadli',
//     hobby : 'gaming',
//     age : 23,
//     kenalan : function(){
//         return `Halo, nama saya ${this.name}, saya suka ${this.hobby}, dan umur saya ${this.age} tahun`;
//     }
// }

// me.kenalan();

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// angka.forEach((num) => {
//   if (num % 2 === 0) {
//     console.log(num);
//   }
// });

// const animeCollection = {
//   naruto: { name: "Naruto", rating: 8.5 },
//   onePiece: { name: "One Piece", rating: 9.0 },
//   bleach: { name: "Bleach", rating: 8.0 },
//   onePunchMan: { name: "One Punch Man", rating: 8.5 },
// };

// for (let key in animeCollection) {
//   console.log(`${animeCollection[key].name} - ${animeCollection[key].rating}`);
// }

// const animes = [
//     { name: "Naruto", rating: 8.5 },
//     { name: "One Piece", rating: 9.0 },
//     { name: "Bleach", rating: 8.0 },
//     { name: "One Punch man", rating: 8.5 },
// ]

// const animeList = animes.map(function(anime){
//     return anime.name.toUpperCase();
// });

// console.log('animeList', animeList);

// console.log('animes', animes);



// animes.forEach(function(anime){
//     console.log(`${anime.name} - ${anime.rating}`);
    
// })

// const animeCollection = {
//   naruto: {
//     name: "Naruto",
//     rating: 8.5,
//     genres: ["Action", "Adventure", "Shounen"],
//   },
//   onePiece: {
//     name: "One Piece",
//     rating: 9.0,
//     genres: ["Action", "Adventure", "Fantasy"],
//   },
//   bleach: {
//     name: "Bleach",
//     rating: 8.0,
//     genres: ["Action", "Supernatural", "Shounen"],
//   },
//   onePunchMan: {
//     name: "One Punch Man",
//     rating: 8.5,
//     genres: ["Action", "Comedy", "Parody"],
//   },
// };

// for (const key in animeCollection) {
//   const anime = animeCollection[key];
//   console.log(`Anime: ${anime.name}, Rating: ${anime.rating}`);

//   // Menggunakan forEach untuk mengiterasi array genres
//   anime.genres.forEach((genre) => {
//     console.log(`  Genre: ${genre}`);
//   });
// }

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const angkaGenap = angka.map(function (num) {
//     return num * 2;
// });

// console.log(angkaGenap);



// const stringtoArray = (str) => [...str];
// console.log(stringtoArray("hello"));

// stringtoArray("hello");

// setTimeout(() => {
//     console.log('haii agil');
    
// }, 5000);

// console.log('bacot kau');

// setInterval(() => {
//     console.log(Math.random() * 10);
    
// }, 3000);

// const x = '1' - 1 + "1";
// console.log(x);

// const angka =[1,2,3,4,5,6,7,8,9,];

// const angkaGanjil = angka.filter((n)=>{
//     return n % 2 === 1;
// });

// console.log(angkaGanjil);
// console.log(angka);


// const animes = [
//   {
//     name: "Naruto",
//     rating: 8.5,
//     genres: ["Action", "Adventure", "Shounen"],
//   },
//   {
//     name: "One Piece",
//     rating: 9.0,
//     genres: ["Action", "Adventure", "Fantasy"],
//   },
//   {
//     name: "Bleach",
//     rating: 8.0,
//     genres: ["Action", "Adventure", "Shounen"],
//   },
//   {
//     name: "One Punch Man",
//     rating: 8.5,
//     genres: ["Action", "Comedy", "Parody"],
//   },
// ];

// const bestAnime = animes.reduce((bestAnime, currAnime) => {
    // console.log( bestAnime, currAnime);
//     if(currAnime.rating > bestAnime.rating){
//         return currAnime;
//     }
//     return bestAnime;
    
// });

// console.log(bestAnime);


// const animeBagus = animeCollection.filter((n)=> n.rating < 9 && n.genres.includes("Adventure") );

// console.log(animeBagus);

// const subtotal = [1500, 2000, 4000, 10000, 20000];
// const total = subtotal.reduce((currentTotal, singleSubtotal)=>{
//     return currentTotal + singleSubtotal;
// })
// console.log(total);

// function sapa(name, msg){
//     console.log(`${name} ${msg}`);
    
// }

// sapa(true,'haii');
