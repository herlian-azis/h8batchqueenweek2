let nama = "herlian"
let peran = "Penyihir"  // Peran harus di awali dengan huruf besar

if (nama ===""){
    console.log("Nama harus diisi!")
}else if(peran === ""){
    console.log("Pilih Peranmu untuk memulai game")
}else if(peran != "Tabib" && peran != "Ksatria" && peran != "Penyihir"){
    console.log("Peran tidak tersedia")
}else if ( peran === "Tabib"){
    console.log(`"Selamat datang di Dunia Proxytia, ${nama}"
"Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka."`)
}else if ( peran === "Ksatria"){
    console.log(`"Selamat datang di Dunia Proxytia, ${nama}"
"Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!"`)
}else if (peran === "Penyihir"){
    console.log(`"Selamat datang di Dunia Proxytia, ${nama}"
"Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!"`)
}