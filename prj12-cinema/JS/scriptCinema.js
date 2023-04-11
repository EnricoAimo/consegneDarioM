var filmsJSON = [
    {
        titolo: "Dune",
        regista: "Villeneuve",
        attori: [
            "Timothée Chalamet", 
            "Rebecca Ferguson", 
            "Zendaya"
        ],
        durata: 155,
        poster: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        trama: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future."
    },

    {
        titolo: "The Matrix",
        regista: "Wachowski",
        attori: [
            "Keanu Reeves", 
            "Laurence Fishburne", 
            "Carrie-Anne Moss"
        ],
        durata: 170,
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" ,
        trama: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence."
    }
];


var precedente=document.getElementById("btnIndietro");
var sucessivo=document.getElementById("btnAvanti");
var trama=document.getElementById("btnTrama");
var indice=0;
var film;
var visibile=false; 

precedente.addEventListener("click",diminuisci);
sucessivo.addEventListener("click",aumenta);
trama.addEventListener("click",mostraTrama);


function visualizza(){
    let titolo= document.querySelector("#titolo");    
    titolo.textContent=filmsJSON[indice].titolo;  

    let locandina= document.querySelector("#locandina");    
    locandina.setAttribute("src",filmsJSON[indice].poster);
    locandina.setAttribute("class","immagine");  

    let regista= document.querySelector("#regista");    
    titolo.textContent=filmsJSON[indice].regista; 

    let attori= document.querySelector("#attori");  
    while(attori.firstChild){
        attori.removeChild(attori.firstChild);}

    filmsJSON[indice].attori.forEach(attore => {
        let riga=document.createElement("li");
        let wiki= document.createElement("a");
        wiki.setAttribute("href","https://it.wikipedia.org/wiki/"+attore);
        wiki.textContent=attore;
        wiki.setAttribute("class","wiki")
        riga.appendChild(wiki);

        attori.appendChild(riga);
        attori.appendChild(document.createElement("br"));
    });  
    
    let durata= document.querySelector("#durata");    
    durata.textContent="Durata: "+filmsJSON[indice].durata;         
    
}

function diminuisci(){
    if(indice>0){
        indice--;
    }
    else{indice=filmsJSON.length-1}
    visibile=true;
    mostraTrama();
    visualizza();
}

function aumenta(){
    if(indice<(filmsJSON.length-1)){
        indice++;
    }
    else{
        indice=0;
    }
    visibile=true;
    mostraTrama();
    visualizza();
}

function mostraTrama(){
    if(visibile==false){
        let trama= document.querySelector("#trama");    
        trama.textContent=filmsJSON[indice].trama;
        visibile=true;
    }else{ 
        let trama= document.querySelector("#trama");    
        trama.textContent="";
        visibile=false;
    }
}

visualizza();