<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="estilos.css">
	<script src="jquery-3.2.1.js"></script>
	<title>ZEUS 3D</title>
	<link rel="shortcut icon" type=image/jpg href="logo zeus 3d.png">
</head>
<body>
	<nav class="menu" id="menu">

		<div class="contenedor contenedor-enlaces-nav">
			<div class="productos" id="productos">
				<p><span><a href="zeus3d.php">tienda</a></span></p>
				<i class="fas fa-caret-down"></i>
			</div>
				<form method="POST" class="form-inline ">
					<input class="form-control mr-sm-2" name="busqueda" type="text" placeholder="Search" aria-label="Search">
				<button name="buscar" class="btn btn-outline-success " type="submit">buscar</button>
				</form>	
				<div class="enlaces">
				<a href="zeus3d.php">inicio</a>
                <a href="ayuda.php">Ayuda</a>
                <a href="tablita_de_carrito.php">carrito</a>
				<?php
					session_start();
					include("login/mcript.php");
					include("login/dbconnect.php");
					$valorabuscar = "asd123";
					$valordereemplazo = '+';
					if(isset($_SESSION['username'])){
						$username = $_SESSION['username'];
						echo "<a href='#'>$username</a>";
						echo "<a href='logout.php'>Cerrar Sesion</a>";
					}
					else{
						echo "<a href='login/login.php'>Iniciar Sesion</a>";
					}
				?>			
			</div>
		</div>

		<div class="contenedor contenedor-grid">
			<div class="grid" id="grid">
				<div class="categorias">
					<h3 class="subtitulo">Categorias</h3>

					<a href="#" data-categoria="cortantes" class="items_categoria" clasificacion="cortantes">cortantes <i class="fas fa-angle-right"></i></a>
					<a href="#" data-categoria="topper">toppers <i class="fas fa-angle-right"></i></a>
					<a href="#" data-categoria="regalos">regalos <i class="fas fa-angle-right"></i></a>
					
				</div>

				<div class="contenedor-subcategorias">
					<div class="subcategoria" data-categoria="cortantes">
						<div class="enlaces-subcategoria"class="lista-categorias">
							<h3 class="subtitulo">cortantes</h3>
							<a href="#"class="items_categoria" clasificacion="animales">animales</a>
							<a href="#"class="items_categoria" clasificacion="festividades">festividades</a>
							<a href="#"class="items_categoria" clasificacion="programas">programas</a>
							<a href="#"class="items_categoria" clasificacion="unicornios">unicornios</a>
							<a href="#"class="items_categoria" clasificacion="super heroes">super heroes</a>
						</div>

						
					</div>
					<div class="subcategoria" data-categoria="topper">
						<div class="enlaces-subcategoria">
							<h3 class="subtitulo">toppers</h3>
							<a href="#">strangersthings</a>
							<a href="#">boda</a>
							<a href="#">personalizados</a>
						</div>

						
					
					</div>

					
				</div>
			</div>
		</div>
	</nav>
	<section id="datos" class="lista-productos"> 
		<?php
			$tabla = "productos";
			$consulta = "SELECT * FROM $tabla";
			$datos = mysqli_query($conn, $consulta);
			if(isset($_POST['busqueda'])){
				$busqueda = $_POST['busqueda'];
				while($productos=mysqli_fetch_array($datos)){
					$idproducto = $productos['id_producto'];
					$categoria = $productos['categoria'];
					$subcategoria = $productos['subcategoria'];
					$imagen = $productos['foto'];
					$nombreproducto = $productos['nombre'];
					$precioproducto = $productos['precio'];
					$buscar = " ";
					$reemplazar = "%20";
					$nombreproducto = strtolower($nombreproducto);
					$busqueda = strtolower($busqueda);
					$count = 0;
					if (strncmp($nombreproducto, $busqueda, 4) == 0){
						$imagennueva = str_replace($buscar, $reemplazar, $imagen);
						echo "<div class='item-productos' clasificacion='$categoria' category='$subcategoria'><a href='producto.php?imagen=../$imagennueva&nombre=$nombreproducto&precio=$precioproducto&idproducto=$idproducto'><img src=../$imagennueva  alt=''></a><a href='producto.php?imagen=../$imagennueva&nombre=$nombreproducto&precio=$precioproducto&idproducto=$idproducto'>$nombreproducto</a></div>";
					}
				}
			}
			else{
				while($productos=mysqli_fetch_array($datos)){
					$idproducto = $productos['id_producto'];
					$categoria = $productos['categoria'];
					$subcategoria = $productos['subcategoria'];
					$imagen = $productos['foto'];
					$nombreproducto = $productos['nombre'];
					$precioproducto = $productos['precio'];
					$buscar = " ";
					$reemplazar = "%20";
					$imagennueva = str_replace($buscar, $reemplazar, $imagen);
					echo "<div class='item-productos' clasificacion='$categoria' category='$subcategoria'><a href='producto.php?imagen=../$imagennueva&nombre=$nombreproducto&precio=$precioproducto&idproducto=$idproducto'><img src=../$imagennueva  alt=''></a><a href='producto.php?imagen=../$imagennueva&nombre=$nombreproducto&precio=$precioproducto&idproducto=$idproducto'>$nombreproducto</a></div>";
				}
			}
		?>
			</section>
		</div>
	</div>
	<main class="contenedor">
		<article></article>
	</main>
	<script src="https://kit.fontawesome.com/2c36e9b7b1.js"></script>
	<script src="main.js"></script>

	</body>
</html>