
const API_URL = "https://api.thecatapi.com/v1/images/search";

async function myDog () {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data);
    const img = document.querySelector('img');
    img.src = data[0].url;
}

myDog();