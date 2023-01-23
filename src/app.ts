const url: any = new URL('https://api.chucknorris.io/jokes/random');
const url1: any = new URL('https://api.chucknorris.io/jokes/categories');

const jokes = document.getElementById('joke-tag') as HTMLDivElement;  
const nextJoke = document.getElementById('n-j') as HTMLButtonElement;
const list = document.getElementById('ulist') as HTMLDataListElement;
const genre = document.getElementById('grups') as HTMLButtonElement;

nextJoke.addEventListener('click', function() {
    async function chuck() {
        const respons = await
        fetch(url);
        const data = await respons.json();
        jokes.innerHTML = data.value;
    }

    chuck();    
});

genre.addEventListener('click', function() {
    let point = list
   point.innerHTML = ""; 
    async function getCategoties() {
        const respons = await
        fetch(url1);       
        const data = await respons.json();
        for(let value of data) {
            let point = document.createElement('li');
            point.innerHTML = value;
            point.addEventListener('click', function(){
                console.log("hej");
            })
            list.append(point);
        }
    } 
    
    getCategoties()
});