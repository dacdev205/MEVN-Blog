var working = setInterval(workingHours, 10)
var quantity = setInterval(quantitys, 10)
var clients = setInterval(happyClients, 10)
var awards = setInterval(awardsReceived, 10)

let count1 = 1;
let count2 =1;
let count3 =1;
let count4 =1;


function workingHours() {
    try {
        count1++;
        document.querySelector("#number1").innerHTML = count1;
        if(count1 == 550) {
            clearInterval(working);
    }
    } catch (error) {
        return;
    }
}


function quantitys() {
    try {
        count2++;
        document.querySelector("#number2").innerHTML = count2;
        if(count2 == 260) {
            clearInterval(quantity);
    }
    } catch (error) {
        return;
    }
}


function happyClients() {
    try {
        count3++;
        document.querySelector("#number3").innerHTML = count3;
        if(count3 == 410) {
            clearInterval(clients);
    }
    } catch (error) {
        return;
    }
}


function awardsReceived() {
    try {
        count4++;
        document.querySelector("#number4").innerHTML = count4;
        if(count4 == 120) {
            clearInterval(awards);
    }
    } catch (error) {
        return;
    }
}