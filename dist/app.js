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
const jokes = document.getElementById('joke-tag');
const nextJoke = document.getElementById('n-j');
const list = document.getElementById('ulist');
const genre = document.getElementById('grups');
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
genre.addEventListener('click', function () {
    let point = list;
    point.innerHTML = "";
    function getCategoties() {
        return __awaiter(this, void 0, void 0, function* () {
            const respons = yield fetch(url1);
            const data = yield respons.json();
            for (let value of data) {
                let point = document.createElement('li');
                point.innerHTML = value;
                point.addEventListener('click', function () {
                    console.log("hej");
                });
                list.append(point);
            }
        });
    }
    getCategoties();
});
