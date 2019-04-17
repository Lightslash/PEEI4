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
    }else if(nb_cote==4){
        if(nb_angle_droit==4){
            if(nb_cote_same==4){
                toRet = "Ceci est un carré";
            }else{
                toRet = "Ceci est un rectangle";
            }
        }else if(nb_angle_droit==0){
            if(nb_cote_parallel>2){
                if(nb_cote_same==4){
                    toRet = "Ceci est un losange";
                }else{
                    toRet = "Ceci est un parallélogramme";
                }
            }else if(nb_cote_parallel==2){
                toRet = "Ceci est un trapèze";
            }else{
                toRet = "Ceci est un quadrilatère quelconque";
            }
        }
    }else if(nb_cote==5){
        toRet = "Ceci est un pentagone";
    }else if(nb_cote==6){
        toRet = "Ceci est un hexagone";
    }else if(nb_cote==8){
        toRet = "Ceci est un octogone";
    }else if(nb_cote==10){
        toRet = "Ceci est un décagone";
    }else if(nb_cote==12){
        toRet = "Ceci est un dodécagone";
    }else if(nb_cote==20){
        toRet = "Ceci est un icosagone";
    }
    return toRet;
}