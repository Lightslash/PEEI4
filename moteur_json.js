url = "http://localhost/";

function moteur(nb_cote,nb_angle_droit,nb_cote_same,nb_cote_parallel){
    strToRet = "Forme inconnu";
    ret = read_facts(nb_cote,nb_angle_droit,nb_cote_same,nb_cote_parallel);
    if(ret==false){
        ret = read_rules(nb_cote,nb_angle_droit,nb_cote_same,nb_cote_parallel);
        if(ret!=false){
            strToRet = ret;
        }
    }
    return strToRet;
}

function read_facts(nb_cote,nb_angle_droit,nb_cote_same,nb_cote_parallel){
    var facts = get('regles.json');
    console.log(facts);
}
function read_rules(nb_cote,nb_angle_droit,nb_cote_same,nb_cote_parallel){

}
function reset(){
    
}
function get(file){
    $.ajax({url: url+file, success: function(result){
        console.log(result);
    },async=false});
}
function post(file){
    $.post(url, function(result){
        
    });
}