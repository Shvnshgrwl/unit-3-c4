// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar,sidebar} from "../components/navSidebar.js"
document.querySelector("header").innerHTML = navbar()
document.querySelector("#sidebar").innerHTML = sidebar()

let search = (e) => {
    if(e.key == 'Enter'){
        let query = document.querySelector("#search_input").value;
        searchNews(query).then((data)=>{
            console.log(data)
            localStorage.setItem('data',JSON.stringify(data))
            window.location.href = "search.html"
        })
    }
}

document.querySelector("#search_input").addEventListener("keydown",search)

import {searchNews,append,searchNewsCountry}from "./fetch.js"
let countries=document.querySelector("#sidebar").children

function cSearch(){
    console.log(this.id)
    searchNewsCountry(this.id).then((data)=>{
        console.log(data)
        append(data,document.querySelector("#results"))
    })
}

for(let el of countries){
    el.addEventListener("click",cSearch)
}
console.log(countries)