
// var x= document.createElement("h");
// x.innerHTML="Nationalize API";
// x.style.textAlign="center";
// x.style.marginTop="70px";

let div=document.createElement("div");
div.setAttribute("class","main1");

let formgroup=document.createElement("div");
formgroup.setAttribute("class","form-group");

let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("class","form-control");
input.setAttribute("id","main");
input.setAttribute("placeholder","Enter Your Name");
input.style.width="500px";
input.style.marginTop="50px";
input.style.fontStyle="italic";

let button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-dark");
button.innerHTML="Search";
// button.style.marginright="100px";
// button.style.marginTop="40px";
button.addEventListener("click",foo);

// for display the nationality
let country=document.createElement("div");
country.setAttribute("id","country");


// for disply the top two countries
let country1=document.createElement("div");
country1.setAttribute("id","country1");

// for display the probability value 
let country2=document.createElement("div");
country2.setAttribute("id","country2");

formgroup.append(input,button,country,country1,country2);

div.append(formgroup);
document.body.append(div);

// for display Nationality based on the name
async function foo(){
try {
    let Nationality=document.getElementById("main").value;
console.log(Nationality);
let res=await fetch(`https://api.nationalize.io/?name=${Nationality}`);
let res1=await res.json();
console.log(res1);

country.innerHTML =`Nationality:    ${res1.country[0].country_id},${res1.country[1].country_id},${res1.country[2].country_id},${res1.country[3].country_id},${res1.country[4].country_id}`;

// for disply the top two countries
country1.innerHTML=`Top Two Countries:  ${res1.country[0].country_id},${res1.country[1].country_id}`;

// for The probability value
country2.innerHTML=`The Probability Value:    ${res1.country[0].probability},${res1.country[1].probability}`;


} catch (error) {
    console.log(error);
}
}


