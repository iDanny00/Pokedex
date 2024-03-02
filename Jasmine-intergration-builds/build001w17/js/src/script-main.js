onkeydown = function(event) {
    if (event.keyCode == 13) {
        //console.log("Enter")
        p.bsearch((p.bs((document.getElementById('psearch').value).toLocaleLowerCase()), p.binfo(document.getElementById('pokemon')), p.brequest()))
    }
}

var url = "http://pokeapi.co/api/v2/",types="" ,alert="" ,abili = "" ,ccount=0, pdata="" ,stext="" ,bifo = "" ,p = { //Code for Psearch script.
    bsearch: function (stxt,binfo,request) {
        pdata = p.bxhr();
        if (pdata == "Unknown Pokemon!") {
            document.getElementById("basic_info").innerHTML = ("");
            return null;
        }
        types = pdata.types.map(function(type){
            return(type.type.name)
        });
        var id = p.iformat(pdata.id);
        abili = pdata.abilities.map(function(ptype) {
            return(ptype.ability.name)
        });
        console.info("[info]  - " + " " +pdata.name.charAt(0).toUpperCase() + pdata.name.slice(1) + " is on the PokeDex !");
        p.ishow();
        p.adv_config();
    },
    bs: function (s) {
        stext=s;
    },
    binfo: function (binfo) {
        bifo = binfo;
    },
    brequest: function() {
        return(url + "pokemon/" + stext + "/");
    },
    bxhr: function () {
        var i = new XMLHttpRequest();
        i.open("GET", p.brequest(), false);
        console.info("[info]  - " + " Requesting PokeMon Information...");
        i.send()
        ir = JSON.parse(i.responseText)

        if (ir.detail == "Not found.") {
            console.info("[info]  - " + " " + (stext) + " does not exist, please try again -_-");
            alert = document.getElementById("alerts");
            alert.innerHTML = "ERROR";
            alert.style.display = "unset";
            return("Unknown Pokemon!");
        } else {
            return(JSON.parse(i.responseText));
        }

    },
    iformat: function (id) {
        if (pdata.id.toString().length == 1) {
            var id = "00" + (pdata.id); 
        } else if (pdata.id.toString().length == 2) {
            var id = "0" + (pdata.id);
        } else {
            var id = "" + pdata.id.toString();
        }
        return(id)
    },
    ishow: function () {
        document.getElementById("basic_info").style.display = "unset";
        
        document.getElementById("l1").innerHTML = ("<li id='l1' class='list-group-item lgi'>Pokemon Name:  -  <span style='border=none;' class='lgi_info'>" + pdata.name.charAt(0).toUpperCase() + pdata.name.slice(1) + "</span></li>");
        document.getElementById("l2").innerHTML = ("<li id='l2' class='list-group-item lgi'>Pokemon Index:  -  #<span style='border=none;' class='lgi_info'>" + p.iformat(pdata.id) + "</span></li>");
        document.getElementById("l3").innerHTML = ("<li id='l3' class='list-group-item lgi'>Pokemon Type:  -  <span style='border=none;' class='lgi_info'>" + types.join(", ") + "</span></li>");
        document.getElementById("l4").innerHTML = ("<li id='l4' class='list-group-item lgi'>Pokemon Weight:  -  <span style='border=none;' class='lgi_info'>" + pdata.weight + "kg </span></li>");
        document.getElementById("l0").innerHTML = ("<img src=" + "http://assets.pokemon.com//assets/cms2/img/pokedex/detail/" + p.iformat(pdata.id) + ".png" + "/>");
        
        document.getElementById('adv_btn').style.display = "unset";

        document.getElementById("adinfo_h").innerHTML = ("<span class='adinfo_h' id='adinfo_h'>Height : </span>" + "<span class='badge'>" + (pdata.height) + "</span>");
        document.getElementById("adinfo_w").innerHTML = ("<br/><br/><span class='adinfo_w' id='adinfo_w'>Weight : </span> " + "<span class='badge'>" + (pdata.weight) + " kg </span>");
        document.getElementById("adinfo_a").innerHTML = ("<br/><br/><span class='adinfo_a' id='adinfo_a'>Abilities : </span>" + "<span class='badge'>" + (abili.join(' / ')) + "</span>");
    },
    adv_config: function () {
        if (ccount == 0) {
            ccount ++;
            document.getElementById("adv_btn").className = "glyphicon glyphicon-chevron-up";
        } else if (ccount == 1) {
            ccount = 0;
            document.getElementById("adv_btn").className = "glyphicon glyphicon-chevron-down";
        }
        
    }
};
var index = { //Code for index page
    cbody: function () {
    },
};
