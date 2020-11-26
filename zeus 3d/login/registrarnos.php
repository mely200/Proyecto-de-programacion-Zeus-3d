<!-- 
  Tipos de Usuarios
  1-administrador
  2-moderador
  3-cliente
-->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta charset="utf-8" />
  <link rel="stylesheet" href="stiloslogin.css" />
  <title>ZEUS 3D registro</title>
  <script src="jquery.js"></script>


</head>
 <body>
   

  </body>
<div class="overlay">

<form  method="POST">
   <!--   formulario -->
   <div class="con">
   <!--    contenido  -->
   <header class="head-form">
      <h2>Registrate</h2>
      <!--     indicacion  -->
      <p>Completa los campos</p>
   </header>
   <br>
    <?php
      if(isset($_POST['register'])){
        include("dbconnect.php");
        $email = $_POST['email'];
        $pass1 = $_POST['password'];
        $pass2 = $_POST['confirm_password'];
        $tabla="usuarios";
        $consulta="SELECT * FROM $tabla";
        $existe_email = false;
        $username = $_POST['username'];
        if($email == "" || $pass1 == "" || $pass2 == ""){
          echo "Faltan campos a rellenar";
        }
        else{
          if($pass1 == $pass2){
            $result = mysqli_query($conn,$consulta);
            while($usuario=mysqli_fetch_array($result)){
              if ($usuario['email']==$email){
                $existe_email = true;
              } 
            }
            if ($existe_email == true){
              echo "ya existe una cuenta con ese email";
            }
            else{
              include("mcript.php");
              $pass_encrypt = $encriptar($pass1);
              $conn->query("INSERT INTO $tabla (email, pass, tipo, privilegio, username) values ('$email', '$pass_encrypt', 'Cliente', 3, '$username')");
              echo "registro exitoso";
              echo "<meta http-equiv='refresh' content=0;url='../zeus3d.php'>";
            }
          }
          else{
            echo "las contraseñas no son iguales";
          }
        }
      }
    ?>
   <div class="registro">
     <!-- username -->
     <span>
         
            <img class="icon" src="imagenes/usuario.png" > 
        
         </span>
        <input class="form-input" id="txt-input" name="username" type="text" placeholder="ingrese su nombre de usuario">
      
      <br>
      <!--   mail -->
         <span>
         
            <img class="icon" src="imagenes/usuario.png" > 
        
         </span>
        <input class="form-input" id="txt-input" name="email" type="email" placeholder="ingrese su Email">
      
      <br>
     
           <!--   contraseña -->
           <span>
         
           <img class="icon" src="imagenes/llave.png" >
        
         </span>
      <!--   Password Input-->
      <input class="form-input" name="password"  type="password" placeholder="ingrese contraseña" id="pwd"  name="password" >
<!--      mostar/ocultar contraseña  -->
     <br>
     <span>
         
           <img class="icon" src="imagenes/llave.png" >
        
         </span>
     <input class="form-input" name="confirm_password" type="password" placeholder="confirmar contraseña">
<!--        botones login -->
    <button name="register" class="log-in" type="submit"> Registrarse </button> 

    <a href="login.php"class="btn butto sign-up"><br> inicia sesion</a> 
     <a href="../zeus3d.php"><br>pagina principal</a>
   </div>
     
  </div>
 
</form>
</div>
<script src="login.js"></script>

</html>