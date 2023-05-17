function calculate() {
  setInterval(() => {
    let birthdate = new Date(document.getElementById("birth").value);
    let now = new Date();
    let ageINMS = now.getTime() - birthdate.getTime();

    let ageSec = ageINMS / 1000;
    let agemint = ageSec / 60;
    let agehour = agemint / 60;
    let agedays = agehour / 24;
    let agemonth = agedays / 30.4375;
    let ageyear = agemonth / 12;
    document.querySelector("#years").innerHTML = Math.floor(ageyear) + " Years";
    document.querySelector("#months").innerHTML = Math.floor(agemonth % 12) + " Months";
    document.querySelector("#days").innerHTML = Math.floor(agedays % 30.4375) + " Days";
    document.querySelector("#hours").innerHTML = Math.floor(agehour % 24)  + " Hours";
    document.querySelector("#minutes").innerHTML = Math.floor(agemint % 60)  + " Mintues";
    document.querySelector("#seconds").innerHTML = Math.floor(ageSec % 60)  +  " Seconds";
  },);
}

function reset() {
  window.location.reload();
}
