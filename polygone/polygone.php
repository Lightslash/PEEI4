<?php
header("Access-Control-Allow-Origin: *");
$data = null;
if(isset($_GET['file'])){
    $file = $_GET['file'];
    if(isset($_POST['data'])){
        $da = $_POST['data'];
        $da_json = json_decode($da,true);
        if($da_json==[]){
            file_put_contents("$file", json_encode($da_json));
            $data = "RESET";
        }else{
            $json = file_get_contents("$file");
            $json_data = json_decode($json);
            array_push($json_data,$da_json);
            file_put_contents("$file", json_encode($json_data));
            $data = "ADD";
        }
    }else{
        $json = file_get_contents("$file");
        $json_data = json_decode($json);
        $data = $json_data;
    }
}else{
    $data = "ERROR";
}
$toRet = array(
    "data" => $data
);
echo json_encode($toRet);
?>