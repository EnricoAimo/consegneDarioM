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
    },
    {
        titolo: "Blade Runner",
        regista: "Ridley Scott",
        attori:["Harrison Ford",
        "Rutger Hauer", 
        "Sean Young"
        ],
        durata: 117,
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        trama:"A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
    },
    {
        titolo: "Drive",
        regista: "Nicolas Winding Refn",
        attori:["Ryan Gosling", 
        "Carey Mulligan", 
        "Bryan Cranston"],
        durata: 100,
        poster: "https://m.media-amazon.com/images/M/MV5BZjY5ZjQyMjMtMmEwOC00Nzc2LTllYTItMmU2MzJjNTg1NjY0XkEyXkFqcGdeQXVyNjQ1MTMzMDQ@._V1_SX300.jpg",
        trama:"A mysterious Hollywood action film stuntman gets in trouble with gangsters when he tries to help his neighbor's husband rob a pawn shop while serving as his getaway driver"
    },
    {
        titolo: "Interstellar",
        regista: "Christopher Nolan",
        attori:["Matthew McConaughey",
         "Anne Hathaway",
          "Jessica Chastain"],
        durata: 169,
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        trama:"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    }
];


var precedente=document.getElementById("btnIndietro");
var sucessivo=document.getElementById("btnAvanti");
var trama=document.getElementById("btnTrama");
var loginBtn=document.getElementById("btnLogin");
var btnCompra;

var indice=0;
var film;
var visibile=false; 

precedente.addEventListener("click",diminuisci);
sucessivo.addEventListener("click",aumenta);
trama.addEventListener("click",mostraTrama);
loginBtn.addEventListener("click",login);



function visualizza(){
    let titolo= document.querySelector("#titolo");    
    titolo.textContent=filmsJSON[indice].titolo;  

    let locandina= document.querySelector("#locandina");    
    locandina.setAttribute("src",filmsJSON[indice].poster);
    locandina.setAttribute("class","immagine");  

    let regista= document.querySelector("#regista");    
    regista.textContent="Regista: "+filmsJSON[indice].regista; 

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


function login(){
    let user= document.querySelector("#username").value;
    let password= document.querySelector("#password").value;
    if(user!="" && password!=""){
       let utente={
        nome:user,
        pass: password
       }
    
        let utenteJSON = JSON.stringify(utente);
        localStorage.setItem("utente",utenteJSON);

        recuperaUtenza();
        location.reload;   
        loginBtn.removeEventListener("click", login);
        loginBtn.textContent="logout";
        loginBtn.addEventListener("click",logout);
    }   
    
}

function  logout(){
    loginBtn.removeEventListener("click", logout);
    loginBtn.textContent="login";
    loginBtn.addEventListener("click",login);
    localStorage.clear();
    recuperaUtenza();
    location.reload();
}

function recuperaUtenza(){
    let utenteConnessoJSON = localStorage.getItem("utente");   
    let utenteConnesso= JSON.parse(utenteConnessoJSON);
    if(utenteConnesso!=null){
        let compra=document.querySelector("#btnCompra");
        if(compra==null){
            compra = document.createElement("button");
            compra.setAttribute("id","btnCompra")
            compra.textContent="compra";        
                        
            let divLo=document.querySelector("#divLocandina") ;
            divLo.insertBefore(document.createElement("br"),regista);
            divLo.insertBefore(compra,regista)   ;     
            compra.addEventListener("click",comprami);            
        }
        recuperaLista();
    }
}

function recuperaLista(){
    var carrello= document.querySelector("#carrello");
    while(carrello.firstChild){
        carrello.removeChild(carrello.firstChild);}
    
    let listaFilmJSON = localStorage.getItem("listaFilm");
    let listaFilm= JSON.parse(listaFilmJSON);
    if(listaFilm!=null){
        listaFilm.films.forEach(element => {
            let riga=document.createElement("li");
            riga.textContent=element;
            carrello.appendChild(riga);
        });
    }
    else{
        var l={
            "films":[]
        };
        let filmsJSON = JSON.stringify(l);
        localStorage.setItem("listaFilm",filmsJSON);
    }
}

function comprami(){
    
    let listaFilmJSON = localStorage.getItem("listaFilm");
    let listaFilm= JSON.parse(listaFilmJSON);
    let titolo = filmsJSON[indice].titolo;
    listaFilm.films[listaFilm.films.length]=titolo;
    listaFilmJSON =JSON.stringify(listaFilm);
    localStorage.setItem("listaFilm",listaFilmJSON);
    recuperaLista();

}


recuperaUtenza();
visualizza();
