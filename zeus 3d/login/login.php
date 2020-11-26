
<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta charset="utf-8" />
  <link rel="stylesheet" href="stiloslogin.css" />
  <title>ZEUS 3D login</title>
  <script src="jquery.js"></script>

  <script type="text/javascript">
      var image_tracker ='f';
      function change(){
        var image = document.getElementById('eye');
        if(image_tracker=='f'){
          image.src='imagenes/ojob.png';
          image_tracker='t';
        }else{
          image.src='imagenes/ojo.png';
          image_tracker='f';
        }

      }
  </script>
</head>
 <body>
    
  
  </body>
<div class="overlay">

<form method="POST">
   <!--   formulario -->


   <div class="con">
   <!--    contenido  -->
   <header class="head-form">
      <h2>Iniciar sesión</h2>
      <!--     indicacion  -->
      <p>Ingrse su email y contraseña</p>
      <?php
        session_start();
        include("mcript.php");
        if(isset($_POST['iniciar'])){
            include("dbconnect.php");
            $email=$_POST['email'];
            $pass=$_POST['password'];
            $tabla="usuarios";
            $consulta="SELECT * FROM $tabla";
            $correct_email = false;
            $correct_password = false;
            $datos = mysqli_query($conn, $consulta);
            $valorabuscar = '+';
            $valordereemplazo = "asd123";
            if($email == "" || $pass == ""){
              echo "Faltan campos por rellenar";
            }
            else {
              while($usuario=mysqli_fetch_array($datos)){
                if ($usuario['email']==$email){
                    $correct_email = true;
                    $passencrypt = $encriptar($pass);
                  if ($usuario['pass']==$passencrypt){
                    $correct_password = true;
                    echo "bienvenido";
                    $_SESSION['username'] = $usuario['username'];
                    $_SESSION['email'] = $usuario['email'];
                    $_SESSION['pass'] = $usuario['pass'];
                    echo "<meta http-equiv='refresh' content=0;url='../zeus3d.php";
                  }
                }
              }
              if ($correct_password == false){
                echo "<img class='alerta2' src='imagenes/alert.png'>";
                echo "<p align='center'> <font size='3pt' >Contraseña incorrecta</font> </p>";
              }
              if ($correct_email == false){
                echo "<img class='alerta2' src='imagenes/alert.png'>";
                echo "<p align='center'> <font size='3pt' >email incorrecto</font> </p>";
              }
            }
        }
      ?>
   </header>
   <br>
   <div class="field-set">
     
      <!--   mail -->
         <span>
         
            <img class="icon" src="imagenes/usuario.png" > 
        
         </span>
        <input class="form-input" id="txt-input" name="email" type="email" placeholder="Email">
      
      <br>
     
           <!--   contraseña -->
           <span>
         
           <img class="icon" src="imagenes/llave.png" >
        
         </span>
      <!--   Password Input-->
      <input class="form-input" name="password"  type="password" placeholder="ingrese contraseña" id="pwd"  name="password" >
     
<!--      mostar/ocultar contraseña  -->
     <span>
        <img class="icon-o" src="imagenes/ojo.png" aria-hidden="true"  type="button" id="eye" onclick="change();">
        
     </span>
     
     
      <br>
<!--        botones login -->
      <button class="log-in" name="iniciar" type="submit"> Iniciar sesión </button> 
   </div>
     <div class="other">
      <button class="btn submits frgt-pass">olvide la contraseña</button>
    <a href="registrarnos.php"  class=" button btn submits sign-up "><br>registrarse</a>
      <a href="../zeus3d.php"><br>pagina principal</a>
   </div>
     
  </div>
 
</form>

</div>


<script src="login.js"></script>

</html>