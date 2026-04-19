
let n = localStorage.getItem("username");
document.getElementById("welcome").textContent = "welcome " + n;


// timer
let st = Date.now();
let t = document.getElementById("timer");

setInterval(function(){
    let s = Math.floor((Date.now() - st)/1000);
    let m = Math.floor(s/60);
    let se = s % 60;

    if(se < 10){
        se = "0" + se;
    }

    t.textContent = m + ":" + se;
},1000);


let td = new Date(Date.now() + 60000);
let c = document.getElementById("countdown");

setInterval(function(){
    let d = td - new Date();

    if(d <= 0){
        c.textContent = "done";
    } else {
        let se = Math.floor(d/1000) % 60;
        let m = Math.floor(d/(1000*60)) % 60;

        c.textContent = m + "m " + se + "s";
    }
},1000);


let q = document.getElementById("quote");

fetch("https://dummyjson.com/quotes/random")
.then(function(r){
    return r.json();
})
.then(function(d){
    q.textContent = '"' + d.quote + '"-' + d.author;
})
.catch(function(){
    q.textContent = "couldn't load quote";
});