url = "http://localhost/polygone/polygone.php";

function moteur(nb_cote,nb_angle_droit,nb_cote_same,nb_cote_parallel){
    strToRet = "Forme inconnu";
    ret = read_facts(nb_cote,nb_angle_droit,nb_cote_same,nb_cote_parallel);
    if(ret==false){
        ret = read_rules(nb_cote,nb_angle_droit,nb_cote_same,nb_cote_parallel);
        if(ret!=false){
            strToRet = ret;
            console.log('règles');
            add_facts(nb_cote,nb_angle_droit,nb_cote_same,nb_cote_parallel,ret);
        }
    }else{
        strToRet = ret;
        console.log('faits');
    }
    return strToRet;
}

function read_facts(nb_cote,nb_angle_droit,nb_cote_same,nb_cote_parallel){
    toRet = false;
    var facts = get('faits.json');
    return toRet;
}
function read_rules(nb_cote,nb_angle_droit,nb_cote_same,nb_cote_parallel){
    toRet = false;
    var rules = get('regles.json');
    console.log(rules);
    return toRet;
}
function reset(){
    rules = [];
    post('faits.json',rules);
}
function add_facts(nb_cote,nb_angle_droit,nb_cote_same,nb_cote_parallel,strToRet){
    tab = {
        "nb_cote" : nb_cote,
        "nb_angle_droit" : nb_angle_droit,
        "nb_cote_same" : nb_cote_same,
        "nb_parallel" : nb_cote_parallel,
        "ret" : strToRet
    };
    post('faits.json',tab);
}
function get(file){
    let toRet = false;
    $.ajax({type: "GET", url: url+"?file="+file, success: function(result){
        toRet = JSON.parse(result);
    },async:false});
    return toRet;
}
function post(file, data){
    let toRet = false;
    $.ajax({type: "POST", url: url+"?file="+file,
        data: {"data":JSON.stringify(data)},
        success: function(result){
            toRet = JSON.parse(result);
    },async:false});
    return toRet;
}