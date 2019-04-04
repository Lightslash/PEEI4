function read_rules(nb_cote,nb_angle_droit,nb_cote_same,nb_cote_parallel){
    toRet = false;
    if(nb_cote==3){
        if(nb_angle_droit==1){
            if(nb_cote_same==2){
                toRet = "Ceci est un triangle rectangle isocèle";
            }else{
                toRet = "Ceci est un triangle rectangle";
            }
        }else if(nb_cote_same==2){
            toRet = "Ceci est un triangle isocèle";
        }else if(nb_cote_same==3){
            toRet = "Ceci est un triangle équilatéral";
        }else if(nb_angle_droit==0){
            toRet = "Ceci est un triangle quelconque";
        }
    }
    return toRet;
}