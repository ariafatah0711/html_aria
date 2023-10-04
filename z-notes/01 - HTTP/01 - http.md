A. HTTP
- HTTP singkatan dari Hyper Text Transfer Protocol
- HTTP itu ibaratnya mengirim dan menerima data
    - HTTP request => untuk meminta informasi ke server
    - HTTP response => untuk membalas dari http request
- HTTP plain leanguage
    - GET(mengambil), POST(mengirim), PUT, DELETE(menghapus), HEAD, OPTION
- HTTP protokol statless => artinya request yang independen tidak ada ketertarikan atau hubungan dengan http request atau setelahnya(misal saat ingin merequest data/halaman a, lalu data d, lalu data c(jadi ga harus berurutan))
- Session => HTTP Cookie memaksa client menyimpan informasi yang diberikan oleh server

B. HTTP version
- saat ini kebanyakan berjalan di HTTP/1.1 atau HTTP2(mulai hadir sekitar tahun 2015)
    - HTTP 1.1 => dikirim bentuk teks
    - HTTP 2 => dikirim secara binary, menggunakan algoritma kompresi(diperkecil ukuranya), lebih capat
        - jika http 2 tidak di dukung browsernya maka otomatis browser akan melakukan feedback ke http 1.1

C. HTTPS
- HTTPS(hyper teks transform protocol secure)
- http itu defaultnya tidak aman(data yang dikirim ke server tidak di enkripsi)
- HTTPS merupakan http dengan enkripsi
    - HTTPS menggunakan SSL (Secure Sockets Layers)

D. HTTP Terminology
- web browser => merupakan aplikasi yang digunakan untuk mengakses web ex: chrome, firefox, dll
- TCP(Transmission Control Protocol) => adalah salah satu protocol dalam jaringan komputer yang biasa digunakan oleh web, email, FTP, atau lainya
    - saat kita menggunakan jaringan rata rata koneksi yang digunakan mayoritas adalah TCP
- IP(Internet Protocol) => identitas komputer di jaringan.
    - baik client atau server akan memilki IP(bisa dicari dengan ngetik di goggle (whats MY IP))
- URL(Uniform Resource Locater) => alamat dari sebuah resource di WEB("/github.com")
- DNS(Domain Name Server) => tempat yang berisi data katalog pemetaan antara nama domain di URL menuju lokasi IP computer
    - misal saat membuka sebuah website github, facebook, goggle. sebenernya kita mengakses IPnya
    - DNS digunakan untuk mengubah dari IP jadi DNS atau teks tanpa perlu ribet menulis IP
    - DNS Lookup adalah website untuk mencari nama Domain sebuah website
- web server => merupakan aplikasi yang berjalan di jaringan internet yang bertugas sebagai server
    - web server berisi informasi data yang biasa di akses client
    - web server menerima request dari client, dan membalas request tersebut berupa informasi yang diminta oleh client

E. HTTP Flow
- cara kerja atau alur HTTP
- HTTP memilki dua pihak yang terlibat yaitu client dan server
    - client akan mengirim request
    - server akan menerima dan membalas request
- server => merupakan sebuah komputer yang berisi semua informasi disimpan pada komputer
    - komputer server biasanya menjalankan dari aplikasi web server agar bisa menerima protocol HTTP
- client => merupakan komputer yang bertugas untuk mengirim HTTP request ke komputer server
    - untuk mengirim request HTTP, biasanya client menggunakan Web Browser
    - client dan harus server harus terkoneksi dalam jaringan yang sama, agar bisa berkomunikasi(misal tidak terkoneksi ke internet maka tidak bisa)
- Request => client mengirim request ke server dengan bentuk HTTP request
    - berisi informasi seperti local resource, data yang dikirim jika ada, dll
    - HTTP request akan diterima oleh server, lalu server akan memproses request yang diminta client
- Response => berisikan data yang diminta oleh client
    - setelah server memproses maka data akan dikirim ke client

F. Browser Network Tool
- network tool => lebih mempermudah melihat apa yang dilakukan oleh web browser
    - biasanya ada di inspect yang ada di chrome, firefox
    - dengan network tool kita bisa melihat semua detail HTTP request dan HTTP response yang dilakukan client dan server


G. HTTP Request dan HTTP Response
- HTTP Message => HTTP request dan HTTP response sebenarnya adalah sebuah HTTP message
    - HTTP message memliki standar format => jikalau ingin membuat client dan server sendiri, sebenarnya bisa dilakukan. asal kita memilki standarisasi format HTTP message
- HTTP message request => data untuk request
    ```\
    POST /login HTTP/1.1 => fungsinya untuk star line(https/1.1 itu versinya)
    HOST:           |
    ....            | => berisi header
    Content-length  |
                    | => berisi space untuk pemisah head dan body
    {"password: "rahasia"} => berisi body
    ```

- HTTP message untuk respose
    ```
    HTTP/1.1 200 => star line(200 itu statuc codenya)
    set-cookie:     |
    ....            | => header
    connections:    |
                    | => space
    {"status":"OK} => body
    ```

H. HTTP method
- HTTP method => seperti kategori reequest agar method http nya sesuai dengan apa yang kita inginkan
- GET => digunanakan untuk melakuakn request data
- HEAD => head digunakan seperti get, tapi tidak membutuhkan response body
    - head (hanya untuk mengetahui apakah datanya ada atau tidak)
- POST => digunakan untuk mengirim data ke server, biasa digunakan untuk mengirim data baru sehingga biasanya memilki request body 
    - body => body yanng dikirim melalui post bisa dalam bentuk gambar, audio, video, dll
- PUT => digunakan untuk menganti semua data yang terdapat di sever dengan data baru yang di kirim ke request
    - kalau post(mengirim/menambah) put(replcae/menimpa/menganti) semua data
- DELETE => digunakan untuk menghapus data
- PATCH => digunakan untuk mengubah sebagian data
- OPTIONS => digunakan untuk mendeskripsikan opsi komunikasi yang tersedia
- TRACE => digunakan untuk debugging. responce TRACE akan mengembalikan seluruh informasi yang dikirim client
    - saat membuat web direkomendasikan untuk tidak diaktifkan karena bisa di salah gunakan

I. URL
- URL(Uniform Resource Locator) => alamat dari sebuah resource di web
    - tanpa url kita tidak mengerti informasi apa yang kita cari(wajib mamasukan data URL)
- anatomi URL terdiri dari beberapa bagian contoh: https://www.github.com, https://www.github.com/ariafatah0711, https://www.github.com/?search=aria
- schema (http dan https) => bagian awal di URL yang menginditifikasi protocol yang digunakan oleh client
- authority => setelah dipisah dengan ://, dan diikuti dengan authority
    - yaitu terdiri dati nama domain dan nama port yang dipisah menggunakan :
        - DNS => www.example.com
        - port => defaultnya http 80 kalau https 443
        - contoh www.example.com:80 => namun untuk port sendiri itu tidak wajib karena sudah otomatis dari web browsernya
- path(tidak wajib) => path berisi informasi resource yang kita tuju
    - seperti kumpulan folder atau file yang kita tuju
    - /path/to/myfile.html
- paramters(tidak wajib) => parameter dipisah oleh ?
    - paramter berisi key=value dan jika ingin lebih bisa di pisah dengan &
    - ?key1=value1&key2=value2
- anchor(tidak wajib) => merupakan respetasi bookmark dalam sebuah halaman website
    - misal jika dalam website banyak sekali informasi maka kita bisa gunakan anchor
    - /#home

J. HTTP Header