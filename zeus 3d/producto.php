<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="estilos.css">
	<link rel="stylesheet" href="Producto/bootstrap.min.css">
    <link rel="stylesheet" href="Producto/all.min.css">
    <link rel="stylesheet" href="Producto/style.css">
	<script src="jquery-3.2.1.js"></script>
    <link rel="shortcut icon" type=image/jpg href="logo zeus 3d.png">
	<title>ZEUS 3D</title>
</head>
<body>
    <?php
        $imagen = $_GET['imagen'];
        $precio = $_GET['precio'];
        $nombre = $_GET['nombre'];
    ?>
	<nav class="menu" id="menu">

		<div class="contenedor contenedor-enlaces-nav">
			<div class="productos" id="productos">
			</div>
				<div class="enlaces">
                <a href="zeus3d.php">inicio</a>
                <a href="ayuda.php">Ayuda</a>
                <a href="tablita_de_carrito.php">carrito</a>
				<?php 
                    session_start();
                    if(isset($_SESSION['username'])){
						$username = $_SESSION['username'];
					}
					if(isset($_SESSION['email'])){
						$email= $_SESSION['email'];
					}
					if ($username != ""){
						echo "<a href='#'>$username</a>";
					}
					else {
						echo "<a href='login/login.php'>Cuenta</a>";
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

            <div class="col-12">
                <!-- Main Content -->
                <main class="row">
                    <div class="col-12 bg-white py-3 my-3">
                        <div class="row">

                            <!-- Product Images -->
                            <div class="col-lg-5 col-md-12 mb-3">
                                <div class="col-12 mb-3">
                                    <div class="img-large border" style="background-image: url('<?php echo $imagen;?>')"></div>
                                </div>
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-sm-2 col-3">
                                            <div class="img-small border" style="background-image: url('<?php echo $imagen;?>')" data-src="<?php echo $imagen;?>"></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Product Images -->

                            <!-- Product Info -->
                            <div class="col-lg-5 col-md-9">
                                <div class="col-12 product-name large">
                                   <?php echo $nombre; ?> 
                                </div>
                                <div class="col-12 px-0">
                                    <hr>
                                </div>
                                <div class="col-12">
                                    <ul>
                                        <li>
                                        Medidas del artículo: <br>
                                        Aprox. 7 1/2 cms de ancho y 10 1/2 cms de alto 1/2 pulgada de profundidad.
*Restar 1 cm de ancho y alto para mediciones de galletas</li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <!-- Product Info -->

                            <!-- Sidebar -->
                            <div class="col-lg-2 col-md-3 text-center">
                                <div class="col-12 border-left border-top sidebar h-100">
                                <form method="post">
                                    <div class="row">
                                        <div class="col-12">
                                        <span class="detail-price">
                                            <?php echo $precio;?>
                                        </span>
                                        </div>
                                        <div class="col-xl-5 col-md-9 col-sm-3 col-5 mx-auto mt-3">
                                            <div class="form-group">
                                                <label for="qty">cantidad</label>
                                                <input type="number" name="cantidad" id="qty" min="1" value="1" class="form-control" required>
                                            </div>
                                        </div>
                                        <div class="col-12 mt-3">
                                            <button name="agregaralcarrito" class="btn btn-outline-dark" type="submit"><i class="fas fa-cart-plus mr-2"></i>agregar al carrito</button>
                                        </div>
                                        <!--<div class="col-12 mt-3">
                                            <a href="prueba z3d.php" class="btn btn-outline-secondary btn-sm" type="button"><i class="fas fa-heart mr-2"></i>agregar a la lista de deseos</a>
                                        </div>-->
                                    </div>
                                    </form>
                                </div>
                            </div>
                            <!-- Sidebar -->

                        </div>
                    </div>
                    <?php
                        include("login/dbconnect.php");
                        include("login/mcript.php");
                        if(isset($_POST['agregaralcarrito'])){
                            $cantidad = $_POST['cantidad'];
                            $tabla="compras";
                            $consulta="SELECT * FROM $tabla";
                            $preciototal = $cantidad * $precio;
                            $result = mysqli_query($conn,$consulta);
                            $bucle = 0;
                            $idcompra = rand(1,32786);
                            $result = mysqli_query($conn,$consulta);
                            $existe_email = false;
                            if (isset($_SESSION['email'])){
                                $email = $_SESSION['email'];
                            }
                            $idproducto2 = str_replace("asd123","+",$_GET['idproducto']);
                            $idproducto = $idproducto2;
                            while($compras=mysqli_fetch_array($result)){
                                if ($compras['email']==$email && $compras['realizada'] == 1){
                                    $existe_email = true;
                                } 
                            }
                            if($existe_email == true ){
                                $conn->query("DELETE FROM $tabla where email = '$email");
                                echo "borrando compra antigua y realizando compra nueva";
                                $conn->query("INSERT INTO $tabla (email, idproducto, nombre, cantidad, precio, realizada, precio_unitario) values ('$email', '$idproducto', '$nombre', '$cantidad', '$preciototal', 0, '$precio')");
                            }
                            else{
                                $conn->query("INSERT INTO $tabla (email, idproducto, nombre, cantidad, precio, realizada, precio_unitario) values ('$email', '$idproducto', '$nombre', '$cantidad', '$preciototal', 0, '$precio')");
                                echo "enviado";
                                ?>
                                <script>
                                window.location.replace("tablita_de_carrito.php");
                                </script>
                                <?php
                            }
                        }
                    ?>
                    <div class="col-12 mb-3 py-3 bg-white text-justify">
                        <div class="row">
                            <!-- Details -->
                            <div class="col-md-7">
                                <div class="col-12">
                                    <div class="row">
                                        <div class="col-12 text-uppercase">
                                            <h4><u>Detalles</u></h4>
                                        </div>
                                        <div class="col-12" id="details">
                                            <h5>Acerca de los productos</h5>

                                            <p>Imprimimos cada cortador de galletas nosotros mismos y se comprueban para evitar imperfecciones antes del envío. Este artículo es fácil de limpiar, resistente a los niños y  es reutilizable. Limpiarlo con agua tibia y jabon.</p>
                                            <hr><h4>Entrega</h4>

                                            <p>Entrega estimada:2 - 7 días hábiles </p>
                                            <h4>Otras dudas</h4>

                                            <p>Nuestros cortadores de galletas están impresos con PLA Plus, que es un plástico 100% seguro para alimentos. Es 10 veces más fuerte que el PLA normal, por lo que sus cortadores de galletas serán más duraderos. Las pruebas han demostrado que el PLA Plus se compone de ingredientes seguros que pueden entrar en contacto con productos alimenticios
                                            <hr>
            
                                            Damos la bienvenida a cualquier otra consulta que pueda tener sobre este artículo.
                                            ¡Pregúntanos sobre pedidos personalizados!  </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Details -->


                </main>
                <!-- Main Content -->
            </div>

            
        </div>

    </div>

    <script type="text/javascript" src="Producto/jquery.min.js"></script>
    <script type="text/javascript" src="Producto/bootstrap.min.js"></script>
    <script type="text/javascript" src="Producto/script.js"></script>
	<script src="https://kit.fontawesome.com/2c36e9b7b1.js"></script>
	<script src="main.js"></script>

</body>
</html>