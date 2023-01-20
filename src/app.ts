const url: any = new URL('https://api.chucknorris.io/jokes/random');
const url1: any = new URL('https://api.chucknorris.io/jokes/categories');
const url2: any = new URL('https://api.chucknorris.io/jokes/random?category={category}');

const jokes = document.getElementById('joke-tag') as HTMLDivElement;  
const nextJoke = document.getElementById('n-j') as HTMLButtonElement;
const list = document.getElementById('ulist') as HTMLDataListElement;

nextJoke.addEventListener('click', function() {
    async function chuck() {
        const respons = await
        fetch(url);
        const data = await respons.json();
        jokes.innerHTML = data.value;
    }

    chuck();    
});

async function getCategoties() {
    const respons = await
    fetch(url1);       
    const data = await respons.json();
    for(let value of data) {
        let point = document.createElement('li');
        point.innerHTML = value;
        list.append(point);
    }
} 

getCategoties();

async function showCategories() {
    const respons = await
    fetch(url2);
    const data = await respons.json();
    console.log(data)
}
    
showCategories();
