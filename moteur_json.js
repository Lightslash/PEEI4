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
    for(let x=0;x<facts.length;x++){
        if(parseInt(facts[x].nb_cote)==nb_cote && parseInt(facts[x].nb_angle_droit)==nb_angle_droit && parseInt(facts[x].nb_cote_same)==nb_cote_same && parseInt(facts[x].nb_parallel)==nb_cote_parallel){
            toRet = facts[x].ret;
            break;
        }
    }
    return toRet;
}
function read_rules(nb_cote,nb_angle_droit,nb_cote_same,nb_cote_parallel){
    toRet = false;
    var rules = get('regles.json');
    toRet = find_rules(rules,{"nb_cote":nb_cote,"nb_angle_droit":nb_angle_droit,"nb_cote_same":nb_cote_same,"nb_cote_parallel":nb_cote_parallel});
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
        toRet = toRet.data;
    },async:false});
    return toRet;
}
function post(file, data){
    let toRet = false;
    $.ajax({type: "POST", url: url+"?file="+file,
        data: {"data":JSON.stringify(data)},
        success: function(result){
            toRet = JSON.parse(result);
            toRet = toRet.data;
    },async:false});
    return toRet;
}
function find_rules(arr,vars){
    let ret = false;
    for(let x=0;x<arr.length;x++){
        if(vars[arr[x].var]==parseInt(arr[x].val)){
            ret = arr[x].ret;
            if(arr[x].more){
                r = find_rules(arr[x].more,vars);
                if(typeof r == 'string'){
                    ret = r;
                }
            }
            break;
        }
    }
    return ret;
}