console.log("hello world");

const URL = "https://api.thedogapi.com/v1/images/search";

//fetch devuelve una promesa
fetch(URL)
.then(res => res.json())
.then(data => {
    const img = document.querySelector('img');
    img.src= data[0].url;
});

async function myDog () {
    const res = await fetch(URL);
    const data = await res.json();
    const img = document.querySelector('img');
    img.src = data[0].url;
}

const myButton = document.querySelector("button");
myButton.onclick = myDog;