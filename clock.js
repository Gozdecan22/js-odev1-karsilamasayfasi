let userName = prompt("Kullanıcı Adını Giriniz");

let myName = document.querySelector("#myName");
myName.innerHTML = userName;

function showTime() {
  let date = new Date();
  let myClock = document.querySelector("#myClock");

  // ilk index 0-> Pazar dan başlar.
  let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  myClock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${
    days[date.getDay()]
  }`;
}
setInterval(showTime, 1000);
