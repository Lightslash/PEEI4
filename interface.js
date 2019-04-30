function search(){
    nb_cote = check_nb(document.getElementById('nb_cote').value);
    nb_angle_droit = check_nb(document.getElementById('nb_angle_droit').value);
    nb_cote_same = check_nb(document.getElementById('nb_cote_same').value);
    nb_cote_parallel = check_nb(document.getElementById('nb_cote_parallel').value);
    console.log(nb_cote);
    answer = moteur(nb_cote,nb_angle_droit,nb_cote_same,nb_cote_parallel);
    display_answer(answer);
}
function check_nb(nb){
    if(nb==''){
        return 0;
    }else{
        return parseInt(nb);
    }
}
function display_answer(answer){
    document.getElementById('answer-container').innerHTML = answer;
}
function range(id){
    document.getElementById(id+'_box').value = document.getElementById(id).value;
}