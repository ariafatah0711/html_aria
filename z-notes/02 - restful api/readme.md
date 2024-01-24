integrasi aplikasi => mengintregasikan aplikasi dan server
    - cara intregasi aplikasi
        - file sharing => intregasi dengan cara berbagi file (excel, csv, text, json) [offline]
        - database sharing => intregasi yang memanfaatkan database shering untuk berbagi data [online]
            - tidak real time ketika ada perubahan
        - remote procedure invocation => mekanisme antar aplikasi dengan cara api yang digunakan oleh aplikasi lain [online]
            - setiap perubahan semua client akan dapat data yang sama
        - messaging => intregasi aplikasi yang memanfaatkan aplikasi message broker atau message bus 
            - mirip api tapi tidak real time (dellay) [synchronus]
        
pengenalan api (application progamming interface)
    - api => perantara yang menghubungkan satu pihak dengan pihak lain agar bisa saling berkomunikasi

    - contoh :
        - saat kita gunain sistem operasi, kita butuh api berupa driver yang perlu dipasng terlebih dahulu
        - saat kita ingin berkomunikasi applikasi facebook, kita membutuhkan api dari facebook agar aplikasi kita bisa
            berinteraksi dengan aplikasi facebook

contoh implementasi api
    - driver perangkat keras
    - SOAP
    - COBRA
    - Restfull api
    - apache thirft
    - protocol buffer
    - GRPC

pengenalan resftull api
    - REST => singkatan REprentasi State Transfer
    - RESTfull api => merupakan implementasi API yang memanfaatkan HTTP sebagai protocol komunikasinya

kenapa restfull api
    - menggunakan HTTP sebagai protokol komunikasi, dimana sudah sangat populer saat ini
    - karena sangat mudah digunakan
    - dapat digunakan di aplikasi web atau aplikasi non web
    - ringan dan mudah dimengerti oleh manusia

archictrtural constrainst
    - rest di design berjalan di atas web services

    - design agar web service kita benar benar sesuai dengan restfull api
        - client-server => harus memisahkan antara kompleksitas data internal dengan yang akan diekspose ke client
        - stateless => tiap interaksi harus independent (full seluruh informasi) jadi jika ada banyak request apapun akan tetap dikirim
        - cacheable => melakukan chace data di local sehingga tidak perlu meminta data di local
            - agar client tidak perlu selalu meminta data terus
        - uniform interface => jadi antar komunikasinya harus seragam seperti http
        - layerd system => menjadikan sistem bisa disusun sesuai datanya
            - jadi sistmenya berlapis bisa ngambil api dari server yang ngambil api
        - code on demand(opsional) => restfull api juga diperbolehkan mengembalikan script yang bisa dieksekusi oleh client jika diperlukan
            - hal ini bisa mempermudah dari sisi client sehingaa kita hanya perlu ubah dari server
            - misal saat client gunakan aplikasi kita dan di server ada perubahan layout maka server akan memberikan ke client

resource naming => merupakan pembuatan url untuk restsful api menggunakan kata benda bukan kata kerja
    - resource dalam restful api adalah data yang bersifat bisa satu atau banyak
    - misal "customers" adalah kumpulan dari data "customer"

    - url
        contoh benar
            - https://api.example.com/products
            - https://api.example.com/members

        contoh salah
            - https://api.example.com/get-all-products
            - https://api.example.com/select-members-table

    - hirarki
        contoh benar
            - https://api.example.com/products/{productid}/images
            - https://api.example.com/merchants/{merchantid}/address

        contoh salah
            - https://api.example.com/products-images/{productid}

    - action
        contoh benar
            - https://api.example.com/users/login
            - https://api.example.com/users/forgot-password

        contoh salah
            - https://api.example.com/login-user
            - https://api.example.com/forgot-password-user

    - gunakan - dan lowercase
        contoh benar
            - https://api.example.com/products/{productid}/warehouse-location

        contoh salah
            - https://api.example.com/products/{productid}/warehouse_location
            - https://api.example.com/products/{productid}/warehouseLocation

    - gunakan CRUD pada http method
        contoh benar
            - GET https://api.example.com/products/{productid}
            - POST https://api.example.com/products

        contoh salah
            - GET https://api.example.com/get-products-by-id/{productid}
            - POST https://api.example.com/create-product

    - gunakan query untuk filter
        contoh benar
            - https://api.example.com/products?name=indomie
            - https://api.example.com/products?name=indomie&page=10

        contoh salah
            - https://api.example.com/products/filter-by-name/{name}
            - https://api.example.com/products/page/1

content negotiation
    - body content yang digunakan di restfull api, seperti JSON, XML, dll
    
    - http header => accept dan content type
        - Accept => untuk memberitahu server tipe data apa yang dapat diterima oleh client
        - Content-Type => untuk memberitahu server tipe data yang di kirim oleh client

JSON (Javascript Onject Notation) => merupakan tipe data object

response status => selalu gunakan status code yang sesuai standarisasi https
    sukses 2xx, client tidak valid 4xx, masalah server 5xx

chaching => data yang bersifat sementara yang disimpan pada sistem penyimpanan
    dalam restful api, data chace biasanya disimpan di client (misal web browser, atau di mobile app)

http header Etag => digunakan untuk menambahkan informasi terhadap resource yang dikembalikan di server
    Etage berisikan versi dari resource yang diminta misal

    Etage: "33fakjcnqjr38cnruquq9u54qncutiru91s"

http header request if-not-math
    - selanjutnya client menyimpan data chache, setiap client mengirim request ke server, client akan menambahkan http header if-not-math
    - http header if-not-math berisikan etag yang sebelumnya
    - jika data tidak berubah, maka server akan mengembalikan HTTP response code 304 : Not modified

