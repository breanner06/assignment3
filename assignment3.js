// Declare all variables //
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "brown",
    hairColor: "brown",
    fullName: function (){
    return this.firstName + " " + this.lastName;
    }
}
var age = "age: " + person1.age;
var eyeColor = "eyes: " + person1.eyeColor;
var hairColor = "hair: " + person1.hairColor;

const person2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 35,
    eyeColor: "green",
    hairColor: "black",
    fullName: function (){
    return this.firstName + " " + this.lastName;
    }
}
const person2output = {
    age2: "age: " + person2.age,
    eyeColor2: "eyes: " + person2.eyeColor,
    hairColor2: "hair: " + person2.hairColor,
}


//open first dossier using concat
function openDossier () {
    document.getElementById("person1").innerHTML = person1.fullName("").concat("<br>" , age, "<br> ", eyeColor, "<br> ", hairColor);
}

//open second dossier using a for loop to display properties
function openDossier2 () {
    let text= " ";
    for (let x in person2output) {
        text += person2output[x] + "<br>";
        document.getElementById("person2").innerHTML = person2.fullName("") + "<br>" + text;
    }    
}

//subtract ages from dossiers
function subtractAges(x, y) {
    return x-y;
    }

function ageDifference () {
document.getElementById("ageDifference").innerHTML = subtractAges(person1.age, person2.age) + " years";
}
