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

idempotent restful api (opsional)
    dalam restful api, ketika membuat multiple request yang identik, harus memiliki efect yang sama seperti membuat satu reequest
    
    POST(belum idempotent)
        - umumnya pada POST, kita tidak perlu membuat api menjadi idempotent. request berkali kali untuk membuat record yang sama
        - namun kadang ini berbahaya, jika ada masalah maka datanya bisa jadi ada 2 yang di post
        - untuk mengatasi ini kita gunakan id record setiap mengirim post agar 

    GET(idempotent)

    PUT dan PATCH(idempotent)
        - jika update berkali kali hasilnya akan sama aja karena itu mereka sudah idempotent

    DELETE(idempotent)
        - ketika mengirim berkali kali request selanjutnya akan sudah menghilang karena sudah di hapus di awal
        - 200, lalu 400 kalau sudah tidak ada datanya

security => membatasi pihak yang boleh mengakses restfull api
    salah satunya menggunakan authentication dan authorization

    authentication => memvalidasi kredensial untuk memverifikasi pemiliknya
        - user yang ada pada system kita
        - contoh: proses login menggunakan username dan password

    authorization => proses setelah authentication
        - untuk memvalidasi apakah pemilik identitas/user tersebut memiliki hak akses untuk mengakses resource data yang diminta
        - contoh: Access-Control List

    contoh authentication dan authorization
        - Basic Auth => menggunakan username dan password
            - cukup menggunakan header authorization
            - contoh: Authorization: Basic base64(username:password)

        - API-Key => menggunakan API-Key atau Secret-Key
            - cukup gunakan headder sesuai yang diinginkan dan value berisi API-key atau Secret Key
            - contoh: API-Key:random-api-key-unrakcnajfkajnajcnriaunajfa

        - Oauth 2 => mekanisme authorication dan authorization yang populer saat ini
            - banyak digunakan intregasi antara aplikasi mobile dan server

versioning(tidak di rekemondasikan) => saat mengubah versioning karena ini dapat merusak kompatibilitas client
    - namun ini harus dilakukan ketika memang perlu untuk mengubah version
    - membuat versioning sebuah api

    - contoh menggunakan url
        - http://api.example/v1/products
        - http://api.example/v2/products
        - http://api.example/2019/products
        - http://api.example/2020/products

    - contoh menggunakan header (tidak lumrah digunakan)
        - HTTP Header => API_Version : 1
        - HTTP Header => API_Version : 2
        - HTTP Header => X-API_Version : 2019
        - HTTP Header => X-API_Version : 2020

stateless => menyimpan state data
    - jadi setiap request dari client ke server, harus berisikan semua informasi lengkap yang dibutuhkan oleh server
    - jadi server tidak perlu menyimpan state atau data client

    keuntungan stateless
        - mudah di scalling, karena request dari client bisa masuk ke server mana saja, sehingga tinggal menambah server baru
        - sederhana kita tidak perlu tahu state sebelumnya yang sangat kompleks
        - setiap request client akan sangat lengkap sehingga mudah di track dan di cek requestnya

hateoas(hyper as the engine of application state) => content yang memiliki link menuju resource yang ada
    contoh:
        {
            "id": 1,
            "name": "aria",
            "email": "ariafatah999@gmail.com",
            "_links": {
                "self": "/customer1/"
            }
        }
        atau
        {
            "account":"109021023",
            "balance": 10000000,
            "links": {
                "deposit": "/accounts/109021023/deposit",
                "withdraw": "/accounts/109021023/withdraw",
                "transfer": "/accounts/109021023/transfer"
            }
        }

    keuntungan
        - client bisa secara dinamis mendapatkan url lokasi resource nya

documentation => untuk mempermudah client dalam menggunakan restfull api
    - biasanya documentasi dibuat menggunakan tool
        - swagger
        - stoplight
        - redoc
        - open api => yang paling banyak digunakan karena sudah standar untuk dokumentasi restful api

development
    kesalahan ketika membuat resstful api
        - selalu membuat CRUD API
        - membuat response data sama dengan table di database
        - membuat API lebih dulu, baru mengerjakan web atau mobile menggunakan api yang sudah dibuat
        - mengembalikan data selengkapnya-lengkapnya di api
        - membuat api yang tidak dibutuhkan oleh client

tahapan membuat restful api
    - business flow
    - ui/ux screen
    - api documentaion
    - develope restful api

    contoh restfull api shoping chart
        - business flow => product detail
            - customer menambahkan barang ke keranjang, bia lebih dari satu barang
            - customer membuka halaman keranjang, bisa mengubah data quantity barang
            - customer memasukan alamat pengirim
            - customer menekan tombol order untuk membuat order

        - ui/ux creen => shopping chart

        - api documentation
            - product detail:
                - GET /product/{productid}
                - POST /cart

            - shopping chart
                - GET /carts
                - PATCH /carts/products
                - PATCH /carts/products/{productid}

            - shipping address
                - GET /address
                - POST /adress
                - PUT /carts/address
                - POST /orders

            - order detail
                - GET /orders/{orderid}

meintenance restfull api => perubahan saat fitur bertambah
    - berguna agar tidak terjadi kesalahan di kemudian hari
    
    proses maintanence yang boleh dilakukan
        - menambahkan data baru di api yang sudah ada
        - menambahkan api baru di endpoint url yang berbeda
        - mempercepat proses api yang sudah ada
        - menggabungkan beberapa api menjadi satu, tanpa menghilangkan api lama

    prose maintanence yang tidak boleh dilakukan
        - mengubah total response data api yang sudah ada
        - merubah field response data di api yang sudah ada
        - menghilangkan api yang sudah ada
        - men-split api yang sudah ada menjadi dua atau lebih
        - menggabungkan beberapa api menjadi satu dengan menghapus api yang lama

maturity model => seberapa sempurna restfull api
    - level zero
        - one url, one http method
        - contoh soap dan xml-rpc, dan hanya menggunakan satu url/ dan 1 method yaitu POST saja

    - level one
        - many url, one http method
        - contoh web service versi lama, namun hanya menggunakan satu method yaitu POSTd

    - level two
        - many url, multiple http method
        - misal utl yang sama, menggunakan GET untuk mengambil data, POST dan menambahkan data 

    - level three
        - resource describe their own capabilites and interconnections
        - mirip level2 namun akan memberikan detail relasi ke resource lainya, atau dingkatnya sudah mengimplementasi HATEOAS