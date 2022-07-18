function navbar(){
    return `<nav id = "navbar">
    <div id="home"><h2><a href="index.html">NewsApp</a></h2></div>
    <div><input type="text" id="search_input" placeholder = "Search for news"></div>
    </nav>`
}

function sidebar(){
    return `<button id="in">India</button>
    <button id="ch">China</button>
    <button id="us">USA</button>
    <button id="uk">UK</button>
    <button id="nz">Newzeland</button>`
}

export {navbar,sidebar}