nodeJS => merupakan teknologi progam javascript yang kita buat diluar web browser
    node js mempopullerkan paradigma javascript evreywhere, dimana dengan menggunakan nodeJS kita bisa membuat aplikasi berbasis server side
    dengan bahasa pemograman javascript
    hal ini membantu kita hanya butuh belajar bahasa pemograman javascript untuk membuat aplikasi web yang dinamis tidak hanya static   
        jadi tidak perlu belajar bahasa pemograman lain seperti PHP, python atau Java untuk server side webnya

    yang tidak dapat dilakukan nodeJS
        - nodeJS tidak berjalan di web browser, jadi tidak semua fitur javascript bisa dilakukan di nodeJS
        - fitur seperti document object model dan banyak web API tidak bisa dilakukan di nodeJS.
            hal ini karena DOM dan beberapa web API berjalan membutuhkan browser

web application => aplikasi yang berjalan di server dan ditampilkan di browser client
    saat kita membuat web application, biasanya akan dibagi menjadi 3 bagian,
        client => merupakan user interface 
            front end (html, css, js) dan mengirim request ke server
        server => menerima request client 
            back end (PHP, python, java, NET)
        database => tempat untuk menyimpan data web application
            data disimpan dan di ambil oleh server (server => sebagai penengah untuk database)
            client tidak bisa langsung mengambil atau menyimpan data ke database seacara langsung oleh karena itu perlu penengah, yaitu server
            menggunakan aplikasi sistem (MySQL, PostgreSQL, MongoDB, dll)

    client -> server -> database

Concurrency dan Parallel
    dulu kita hanya bisa menjalankan satu progam pada satu waktu
    namun sekarang kita sudah dapat menjalankan progam pada satu waktu
        contoh: membuka browser, vs code

    thread => multiple proses dan dapat menjalankan banyak pekerjaan sekaligus
        proses ringan
            contoh membuka web di browser: dicoding.com, dan github
        asynch / parrel => buka website sekaligus

    concurrency => mengerjakan beberapa pekerjaan satu persatu
    parrarel => mengerjakan beberap pekerjaan sekaligus pada satu waktu    

        contoh: 
            - broswer melakukan concurrency ketika membuka web, browser akan melakukan HTTP request
                lalu mendonwold semua file(html, css, js), dan merender dalam bentuk tampilan web
            - browser melakukan parrarel ketika kita membuka beberapa tab web, dan juga sambil donwoald beberapa file
                dan menontoh video streaming

synchronus dan anscyhronus
    synchronus => ketika progam kita berjalan sequential, 
        dan semua tahapan ditunggu sampai prosesnya selesai baru akan di eksekusi tahapan selanjutnya
    asynchronus => ketika progam kita berjalan dan kita tidak perlu menunggu eksekusi kode tersebut selesai
        kita bisa lanjutkan tahapan ke kode progam selanjutnya

threadpool web model => tempat menyimpan thread
    thread => proses ringan yang dibuat saat membuat aplikasi
        namun jika terlalu banyak maka akan memberatkan sistem operasi kita
    oleh karena itu kita gunakan threadpool
    threadpool => tempat menyimpan thread, ketika kita butuh kita akan ambil dati threadpool, ketika sudah selesai
        kita akan kembalikan ke threadpool
    dengan threadpool kita bisa memanfaatkan thread yang sama berkali kali

    threadpool queue(antrian)
        - jika semua threadpool penuh kita tidak bisa meminta lagi thread ke threadpool, kita harus menunggu sampai ada thread yang tidak sibuk
        - dimana kita harus menunggu sampai ada thread tersedia untuk digunakan
        - biasanya threadpool memilki tempat untuk menyimpan tugas yang belum dikerjakan oleh thread di tempat bernama queue(antrian)
        - ketika kita mengirim perintah ke threadpool, perintah tersebut akan di kirim ke queue, lalu perintah itu akan di eksekusi satu persatu oleh thread yang tersedia di threadpool

    namun dia memiliki kekurangan yaitu harus menuggu jika terlalu banyak request

    contoh web server threadpool model
        : Apache HTTPD, Apache Tomcat, dll

blocking dan non-blocking
    blocking => synchronus
        saat kita membuat kode progam secara default akan berjalan secara blockng atau synchronus
        artinya kita harus menunggu sebuah kode selesai sebelum kode selanjutnya di eksekusi
    
    non-blocking(asynchronus) => akan di eksekusi tanpa harus menuggu kode progam selesai
        ketika memanggil kode non-blocking, biasanya kita perlu mengirimkan callback untuk dipanggil oleh kode non-blocking tersebut ketika kodenya sudah selesai
        contoh: Asynch seperti AJAX, fetch API

    