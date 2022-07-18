let searchNews = async(query) =>{
    try{
      let res = await fetch (`https://masai-api.herokuapp.com/news?q=${query}`,{
        headers:{
          "Content-Type":"application/json",
        }
      })
      let data = await res.json()
      return data.articles
    }
    catch(err){
      console.log('err:',err)
    }
  }

  let append = (data,container) =>{
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

let searchNewsCountry = async(query) =>{
    try{
      let res = await fetch (`https://masai-api.herokuapp.com/news/top-headlines?country=${query}`,{
        headers:{
          "Content-Type":"application/json",
        }
      })
      let data = await res.json()
      return data.articles
    }
    catch(err){
      console.log('err:',err)
    }
  }

  export{
      searchNews,append,searchNewsCountry
  };