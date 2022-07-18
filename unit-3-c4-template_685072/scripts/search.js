// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar,sidebar} from "../components/navSidebar.js"
document.querySelector("header").innerHTML = navbar()


let data = JSON.parse(localStorage.getItem("data"))
let container = document.querySelector("#results")

function append (data,container) {

    container.innerHTML = null
    data.forEach(({title,description,urlToImage})=>{
        let newsData = []
      let div = document.createElement("div")
      div.setAttribute("id","news")
      let image = document.createElement("img")
      image.src = urlToImage
      let h3 = document.createElement("h3")
      h3.innerHTML= title
      let desc = document.createElement("p")
      desc.innerHTML = description
      newsData.push(title,description,urlToImage)
      div.addEventListener("click",function(){
        localStorage.setItem("newsData",JSON.stringify(newsData))
        window.location.href = "news.html"
      })

      div.append(image,h3,desc)
      container.append(div)
    })
}
  append (data,container)