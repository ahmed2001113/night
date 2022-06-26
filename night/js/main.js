var stars =document.getElementById("stars");
var moon =document.getElementById("moon");
var mountains3 =document.getElementById("mountains3");
var mountains4 =document.getElementById("mountains4");
var river =document.getElementById("river");
var boat =document.getElementById("boat");
var mountains7 =document.getElementById("mountains7");
var novil = document.getElementById('novil');

window.onscroll= function(){
    var v = scrollY;
stars.style.left = v +'px';
moon.style.top = v*3 +'px';
mountains3.style.top = v*2 +'px';
mountains4.style.top = v*2 +'px';
river.style.top = v +'px';
boat.style.top = v +'px';
boat.style.left = v*3 +'px';
novil.style.fontSize = v +'px';
if( scrollY >= 67){
    novil.style.position = "fixed";
}
if(scrollY >= 120){
    novil.style.display = "none";
}
else{
    novil.style.display = "block";
}
if(scrollY >= 140){
    moon.style.display = "none";
    river.style.display = "none";
    mountains3.style.display = "none";
    mountains4.style.display = "none";
    boat.style.display = "none";
}
else{
    moon.style.display = "block";
    boat.style.display = "block";
    river.style.display = "block";
    mountains3.style.display = "block";
    mountains4.style.display = "block";
}



}

