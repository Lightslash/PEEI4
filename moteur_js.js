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
function reset(){
    reset_facts();
}