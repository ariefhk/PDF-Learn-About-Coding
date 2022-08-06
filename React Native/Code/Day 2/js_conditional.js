var bool = true;

if (bool) {
  console.log("Menjalankan Code");
}

var tokoStatus = "open";
var minuteRemainingOpen = 10;

if (minuteRemainingOpen <= 5 && tokoStatus === "close") {
  console.log("Toko Mau Buka");
} else if (tokoStatus === "close") {
  console.log("Toko Tutup");
} else {
  console.log("Toko Buka, Beli AH");
}

var warungStatus = "open";
var cireng = "soldout";
var buah = "ada";

if (warungStatus === "open") {
  console.log("Mau belanja Cireng sama Buah Ah");
  if (cireng === "soldout" || buah === "soldout") {
    console.log("Belanja gua ga lengkap");
  } else if (cireng === "soldout") {
    console.log("Cireng habis");
  } else if (buah === "soldout") {
    console.log("Buah habis");
  }
} else {
  console.log("Warung Tutup, gua balik lagi");
}

var buttonDiteken = 9;
switch (buttonDiteken) {
  case 1:
    {
      console.log("Matiin TV");
    }
    break;
  case 2:
    {
      console.log("Turunin Volume TV");
    }
    break;
  case 3:
    {
      console.log("Naikin Volume TV");
    }
    break;
  case 4:
    {
      console.log("Matiin suara TV");
    }
    break;

  default:
    {
      console.log("Ga terjadi apa-apa");
    }
    break;
}

var age = 10;
var bisaNgevote = age >= 24 ? "Bisa ngevote" : "ga bisa kemudaan";

console.log(bisaNgevote);