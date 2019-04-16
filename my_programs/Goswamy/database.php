<?php
include_once 'connection.php'

if(!$conn)
{
    echo "Connection Failed!".mysqli_error();
}
else{
    echo "Connection Successful!"
}


echo $_POST['brand'];

$sql= "SELECT * FROM mobiles;";
$result=mysqli_query($conn,$sql);
$resultCheck=mysqli_num_rows($result);
if($resultCheck > 0){
while($row=mysqli_fetch_assoc()){
    echo"$row['name']."<br>"";
}
}
else{
    echo "No results found";
}