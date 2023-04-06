


function attore(nome, foto,wiki){
    this.nome=nome;
    this.foto=foto;
    this.wiki=wiki;
}

var lista = [
   new attore("The Rock","https://www.ilmessaggero.it/photos/MED/38/03/3643803_2300_dwayne.jpg","https://it.wikipedia.org/wiki/Dwayne_Johnson"),
   new attore("Cate Blanchet", "https://static.labiennale.org/files/styles/full_screen_slide/public/cinema/2020/750x500/blanchett-b.jpg?itok=MLjTZeZw", "https://it.wikipedia.org/wiki/Cate_Blanchett"),
   new attore("Snoop Dog","https://www.rollingstone.com/wp-content/uploads/2022/07/GettyImages-1401282760.jpg?w=1024","https://it.wikipedia.org/wiki/Snoop_Dogg" ),
   new attore("Haggard", "https://upload.wikimedia.org/wikipedia/commons/e/e6/Haggard_at_Global_East_Rock_Festival_2010_%28cropped%29.jpg","https://it.wikipedia.org/wiki/Haggard_(gruppo_musicale)")
];

3




function creaContenuto(){
var tuttiLi = document.querySelectorAll("li");

    for(let i=0; i<tuttiLi.length;i++){
        var li=tuttiLi[i];
        var imm=li.firstElementChild;
        imm.setAttribute("src",lista[i].foto);
        imm.setAttribute("class","immagine");
        li.appendChild(document.createElement("br"));
        var wikiLink=document.createElement("a");
        wikiLink.setAttribute("href", lista[i].wiki);
        wikiLink.textContent= lista[i].nome;       
        wikiLink.setAttribute("class","collegamento");
        li.appendChild(wikiLink);
        
    }   

}

creaContenuto();


