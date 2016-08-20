<?PHP 

require_once "db.php";

echo json_encode($_GET);

/*
if(isset($_POST)){

	print_r($_POST);

	$tag = $_POST["s_tag"];
	$desc = $_POST["s_desc"];
	$when_t = $_POST["s_time"];
	$when_d = $_POST["s_day"];
	$when_m = $_POST["s_month"];
	$when_y = $_POST["s_year"];
	$pri = $_POST["s_pri"];

	$qry = sprintf("INSERT INTO user_todo (name, detail ,pri ,s_t ,s_d ,s_m ,s_y ) VALUES ('%s','%s','%d','%s','%d','%d','%d')",$tag,$desc,$pri,$when_t,$when_d,$when_m,$when_y);

	$res = $con->query($qry);
	if($res){
		echo "Done";
	}else{
		echo "Oh damn";
	}

}

*/

?>