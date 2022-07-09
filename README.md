Untuk jawaban soal sesuai dengan nama folder masing - masing :

- jawaban soal 1 di folder soal-1
- jawaban soal 2 di folder soal-2
- jawaban soal 3 di folder soal-3

Khusus untuk jawaban soal 2 berikut adalah langkah - langkah dalam menjalankan programnya:

1. Memindahkan directory yang saat ini diakses ke directory folder **soal-2** <br/><br/>
2. install tools yang digunakan dengan mengetik **npm install** di terminal. <br/><br/>
3. Mengatur konfigurasi database dengan me-rename file **.env copy** menjadi **.env** <br/><br/>
4. Menyesuakan username dan password database serta host yang digunakan di file **.env** <br/><br/>
5. Membuat database dengan mengetik **npx sequelize db:create** di termnial <br/><br/>
6. Memigrasikan model data ke database dengan mengetik **npx sequelize db:migrate** <br/><br/>
7. Menjalankan server dengan mengetik **npm start** di terminal <br/><br/>
8. Mengisi **slot**, **block** atau **vehicle_number** di bagian **body** pada masing - masing API <br/><br/>

Link dokumentasi API: https://documenter.getpostman.com/view/19176241/UzJPMEsi <br/><br/>

List API:

METHOD : **POST** <br/>
KEGUNAAN : Menambahkan parking slot <br/>
http://localhost:5000/api/v1/park <br/><br/><br/>

METHOD : **GET** <br/>
KEGUNAAN : Mendapatkan list parking slot yang kosong <br/>
http://localhost:5000/api/v1/park <br/><br/><br/>

METHOD : **PUT** <br/>
KEGUNAAN : Pengaturan kendaraan yang parkir <br/>
http://localhost:5000/api/v1/park <br/><br/><br/>

METHOD : **PUT** <br/>
KEGUNAAN : Pengaturan kendaraan yang keluar dari parkiran <br/>
http://localhost:5000/api/v1/park-out <br/><br/><br/>
