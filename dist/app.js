"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const url = new URL('https://api.chucknorris.io/jokes/random');
const url1 = new URL('https://api.chucknorris.io/jokes/categories');
const url2 = new URL('https://api.chucknorris.io/jokes/random?category={category}');
const jokes = document.getElementById('joke-tag');
const nextJoke = document.getElementById('n-j');
const list = document.getElementById('ulist');
nextJoke.addEventListener('click', function () {
    function chuck() {
        return __awaiter(this, void 0, void 0, function* () {
            const respons = yield fetch(url);
            const data = yield respons.json();
            jokes.innerHTML = data.value;
        });
    }
    chuck();
});
function getCategoties() {
    return __awaiter(this, void 0, void 0, function* () {
        const respons = yield fetch(url1);
        const data = yield respons.json();
        for (let value of data) {
            let point = document.createElement('li');
            point.innerHTML = value;
            list.append(point);
        }
    });
}
getCategoties();
function showCategories() {
    return __awaiter(this, void 0, void 0, function* () {
        const respons = yield fetch(url2);
        const data = yield respons.json();
        console.log(data);
    });
}
showCategories();
