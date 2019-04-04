var rules = [];
function read_facts(nb_cote,nb_angle_droit,nb_cote_same,nb_cote_parallel){
    toRet = false;
    for(var x=0;x<rules.length;x++){
        var r = rules[x];
        if(nb_cote==r[0] && nb_angle_droit==r[1] && nb_cote_same==r[2] && nb_cote_parallel==r[3]){
            toRet = r[4];
        }
    }
    return toRet;
}
function add_facts(nb_cote,nb_angle_droit,nb_cote_same,nb_cote_parallel,strToRet){
    rules.push([nb_cote,nb_angle_droit,nb_cote_same,nb_cote_parallel,strToRet]);
}
function reset_facts(){
    rules = [];
}