let kerdesek;
let kep = document.getElementById("kép1");
let válasz1 = document.getElementById("válasz1");
let válasz2 = document.getElementById("válasz2");
let válasz3 = document.getElementById("válasz3");
let currentId;
let kerdesekSzama;
let valaszok = ["válasz1", "válasz2", "válasz3"];
let helyesValasz;
let kattinthat;
fetch("/question.json")
    .then(r => r.json())
    .then(d => letöltés(d));

function letöltés(adat) {

    kerdesek = adat;
    currentId = 0;
    kerdesekSzama = kerdesek.length;
    helyesValasz = kerdesek[0].correctAnswer;

    console.log(kerdesekSzama);
    kérdésMegjelenítés(kerdesek[0]);

};

function kérdésMegjelenítés(kérdés) {
    if (kérdés.image == "") {
        kep.src = "https://szoft1.comeback.hu/hajo/teszt-0050.jpg";

    } else {
        kep.src = `https://szoft1.comeback.hu/hajo/${kérdés.image}`;
    }
    válasz1.textContent = kérdés.answer1;
    válasz2.textContent = kérdés.answer2;
    válasz3.textContent = kérdés.answer3;

    válasz1.style.backgroundColor = "white";
    válasz2.style.backgroundColor = "white";
    válasz3.style.backgroundColor = "white";
    kattinthat = true;
};

function vissza() {
    currentId - 1 <= 0 ? currentId = kerdesekSzama - 1 : currentId = currentId - 1;
    kérdésMegjelenítés(kerdesek[currentId]);
}
function elore() {
    currentId + 1 >= kerdesekSzama ? currentId = 0 : currentId = currentId + 1;
    kérdésMegjelenítés(kerdesek[currentId]);
}

function szinez(valasz) {
    //console.log(valaszok.indexOf(valasz.id+""))
    if (kattinthat) {
        if ("" + (kerdesek[currentId].correctAnswer - 1) === "" + valaszok.indexOf(valasz.id + "")) {
            //helyes ág
            valasz.style.backgroundColor = "green";
        } else {
            valasz.style.backgroundColor = "red";
        }
    }
    kattinthat = false;

}




function kérdésMegjelenítés(kérdés) {
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;


    
}

function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kérdésMegjelenítés(data));
}    

function válaszfeldolgozás(válasz) {
    if (!válasz.ok) {
        console.error(`Hibás válasz: ${response.status}`)
    }
    else {
        return válasz.json()
    }
}