<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta charset="utf-8" />
  <link rel="stylesheet" href="registroproductos.css" />
  <title>Registro productos</title>
  <script type="text/javascript" src="jquery3.2.1.js"></script>
  <script type="text/javascript" src="function.js"></script>
<link rel="shortcut icon" type=image/jpg href="logo zeus 3d.png">
</head>

<?php 

include "dbconnect.php"; 
if(!empty($_POST)){
 $tabla="productos";
    $alert=' ';
    if(empty($_POST['tipo'])||empty($_POST['producto'])||($_POST['precio']<=0) ||empty($_POST['descripcion'])||empty($_POST['categoria'])||empty($_POST['sub_categoria'])||($_POST['cantidad']<=0))
    {
      $alert='<p calss="msg_error">todos los campos son obligatorios.<p>'; 
      }

    else{
        $tipo =$_POST['tipo'];
        $producto =$_POST['producto'];
        $precio =$_POST['precio'];
        $cantidad =$_POST['cantidad'];
        $descripcion =$_POST['descripcion'];
        $categoria =$_POST['categoria'];
        $subcategoria =$_POST['sub_categoria'];

      }
      $foto = $_FILES['foto'];
      $nombre_foto = $foto['name'];
      $type = $foto['type'];
      $url_temp =$foto['tmp_name'];

      $imgProducto='img_producto.png';
      if($nombre_foto !='')
      {
        $destino ='imagenes/';
        $img_nombre ='img_'.md5(date('d-m-Y H:m:s'));
        $imgProducto =$img_nombre. '.jpg';
        $src=$destino.$nombre_foto;
      }
      $query_insert= $conn->query("INSERT INTO $tabla (tipo,nombre,precio,cantidad,detalle,categoria,subcategoria,foto) values('$tipo','$producto','$precio','$cantidad','$descripcion','$categoria','$subcategoria','$src')");
     
      if($query_insert){ 
          
          $alert='<p class= "msg_save">guardado correctamente.</p>';
      }
      else{
        $alert='<p class= "msg_error">error al guardar formulario </p>';      
      }
}
?>

 <body>


<div class="overlay">

  <form method="POST" enctype="multipart/form-data" >
   <!--   formulario -->


  <div class="con">

  <header class="head-form">
      <h2>Registro de productos</h2>
      <!--     indicacion  -->
      <p>Ingrese los datos</p>
  </header>
    <br>
    <div class="field-set">
      <div class="alert"><?php echo isset($alert) ? $alert:'';?></div>  
      <label for="tipo">Tipo  </label> 
      <select class="select" name ="tipo"  id="tipo">
        <option value="1">Cortante</option>
        <option value="2">Topper</option>
        <option value="3">Souvenirs</option>
      </select> 
      </br>
       </br>
        
          <div>
          <label for="producto">Producto</label>
          <input class="form-input"type="text" name="producto" id="producto"placeholder="Nombre del producto">
        </div>
      </br>
        <div><label for="precio">Precio</label>
        <input class="form-input"type="number" name="precio" id="precio"placeholder="Precio del producto">
      </div>
      </br>
        <div><label for="cantidad">Cantidad</label>
        <input class="form-input"type="number" name="cantidad" id="cantidad"placeholder="cantidad del producto">
        </div>
      </br>
        <div><label for="descripcion">Descripcion</label>
        <input class="form-input"type="text" name="descripcion" id="descripcion"placeholder="descripcion del producto">
         </div>
      </br>
        <div><label for="categoria">Categoria</label>
        <input class="form-input"type="text" name="categoria" id="categoria"placeholder="categoria del producto">
         </div>
       </br>
         <div><label for="sub_categoria"> Sub Categoria</label>
        <input class="form-input"type="text" name="sub_categoria" id="sub_categoria"placeholder="subcategoria del producto">
         </div>
      </br>
      <div class="photo">
          <label for="foto">Foto</label>
        <div class="prevPhoto">
        <span class="delPhoto notBlock">X</span>
        <label for="foto"></label>
        </div>
        <div class="upimg">
        <input type="file" name="foto" id="foto">
        </div>
        <div id="form_alert"></div>
      </div>
        <button type="submit" class="btn_save"><i class="fa-save fa-lg"></i> Guardar Producto</button> 
      </div>
    </div>  
  </form> 
 
</div>

<script src="login.js"></script>

</html>