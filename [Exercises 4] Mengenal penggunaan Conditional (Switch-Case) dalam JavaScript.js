var Tanggal = 1; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var Bulan= 1; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var Tahun = 1999; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)


switch(Bulan) {
    case 1: Bulan = 'Januari'; break; 
    case 2: Bulan = 'february'; break; 
    case 3: Bulan = 'Maret'; break; 
    case 4: Bulan = 'April'; break; 
    case 5: Bulan = 'Mei'; break; 
    case 6: Bulan = 'Juni'; break;
    case 7: Bulan = 'Juli'; break;
    case 8: Bulan = 'Agustus'; break; 
    case 9:  Bulan = 'September'; break; 
    case 10: Bulan = 'Oktober'; break; 
    case 11: Bulan = 'November'; break; 
    case 12: Bulan = 'Desember'; break; 
}

kalender = `"${Tanggal} ${Bulan} ${Tahun}"`

        if (Tanggal <= 0 || Bulan <= 0 || Tahun <= 0) {
            console.log("Masukan tanggal dengan benar")
        } else if (Tanggal > 31) {
            console.log("tanggal di kalender masehi hanya 31")
        } else if (Bulan > 12) {
            console.log("bulan di kalender masehi hanya 12")
        } else if (Tahun > 2200 || Tahun <= 1900) {
            console.log("Tahun Tidak Tersedia")
        }else {
            console.log(kalender)
        }