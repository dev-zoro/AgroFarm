<?php

session_start();

if(!isset($_SESSION['username'])){
header('location:login.php');
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/about.css">
    <title>AgroFarm</title>
</head>

<body>


<?php

include 'dbcon.php';

    if(isset($_POST['submit'])){

        $name = $_POST['name'];
        $email = $_POST['email'];
        $problem = $_POST['problem'];

        $insertquery = " insert into websiteproblem(name, email, problem)  values('$name','$email', '$problem') ";

        $result = mysqli_query($con, $insertquery);


        if($result){
            ?>
            <script>
                alert("Problem has been submitted");
            </script>
            <?php
        }
        else{
            ?>
            <script>
                alert("Not submitted");
            </script>

            <?php
        }

    }

?>

    <div class="header">
        <div class="logo">
            <a href="farmer.php"><img src="img/logo12.png" alt=""></a>
        </div>
        <div class="navbar">
            <div class="site-navbar">
                <ul>
                    <li><a href="farmer.php">Home</a></li>
                    <li><a href="query.php">Query</a></li>
                    <li><a href="crop.php">Crops</a></li>
                    <li><a href="sellcrop.php">Sell Crop</a></li>
                    <li><a class="active" href="about.php">About</a></li>
                    <li><a href="logout.php">Logout</a></li>

                </ul>
            </div>
        </div>
    </div>

    <div class="body-layout">

        <div class="layout-1">
            <div class="sample-img">
                <img src="img/landing_img.jpg" alt="">
            </div>

            <div class="form-layout">
                <div class="heading">
                    <h3>Any problem in operating website?</h3>
                    <h4>Fill this form</h4>
                </div>

                <div class="form">
                    <form action="" method="post">
                        <input type="text" name="name" id="name" placeholder="Your Name" required> <br>
                        <input type="email" name="email" id="email" placeholder="Your Email" required> <br>

                        <textarea name="problem" id="contact" cols="60" rows="3" placeholder="Problem"
                            required></textarea> <br>
                        <button type="submit" name="submit" id="submit-query">SEND</button>

                    </form>


                </div>
            </div>

        </div>

    </div>

    <div class="map" id="map">
        <h3>OUR LOCATION</h3>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15137.768514066067!2d73.8682037!3d18.4636219!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x321bdae2cea9f064!2sVishwakarma%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1668970753794!5m2!1sen!2sin"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div class="footer">
        <p>WE WILL CONTACT YOU SOON!</p>
    </div>


</body>

</html>