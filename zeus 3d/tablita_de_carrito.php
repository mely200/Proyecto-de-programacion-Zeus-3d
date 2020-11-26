<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="Producto/bootstrap.min.css">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Tabla</title>
</head>
<h3>Lista del carrito</h3>
<style>
.table-border{
border-right: 3px solid #000;
 border-top: 3px solid #000;
 border-left: 3px solid #000;
 border-bottom: 3px solid #000;
}

</style>
<table class="table table-light table-borderd"> 
	<tbody> 
		<tr>
			<th width="40%">Descripción</th> 
			<th width="15%" class="text-center">Cantidad</th>
			<th width="20%" class="text-center" >Precio</th>
			<th width="20%" class="text-center" >Total</th>
			<th width="5%"></th>
		</tr>
		<?php
			session_start();
			echo "<tr>";
			if (isset($_SESSION['email'])){
				$email = $_SESSION['email'];
				include("login/dbconnect.php");
				$tabla = "compras";
				$consulta="SELECT * FROM $tabla";
				$comprasdb = mysqli_query($conn, $consulta);
				$preciototal = 0;
				while($compras=mysqli_fetch_array($comprasdb)){
					if($email == $compras['email']){
						$nombre = $compras['nombre'];
						$cantidad = $compras['cantidad'];
						$precio = $compras['precio'];
						$precio_unitario = $compras['precio_unitario'];
						echo "<td width='40%'>$nombre</td>";
						echo "<td width='15%' class='text-center'>$cantidad</td>";
						echo "<td width='20%' class='text-center'>$precio_unitario</td>";
						echo "<td width='20%' class='text-center'>$precio</td>";
						echo "<th width='5%'>";
						echo "<form action='' method='post'>";
						echo "<input type='hidden' name='id' id='id' value=''>";
						echo "<button class='btn btn-danger' type='submit' name='btnAccion' value='Eliminar'>eliminar</button>";
						echo "</form>";
						echo "</th>";
						echo "</tr>";
						$preciototal = $preciototal + $precio;
					}
				}
			}
		?>			
		<tr>
			<td colspan="3" align="right"><h3>TOTAL FINAL: $<?php echo $preciototal; ?></h3></td>
			<td></td>
		</tr>
	</tbody> 

</table>
	<form action="" method="post">

					<input type="hidden" name="id" id="id" value="">

					<button class="btn btn-danger" type="submit" name="btnAccion" value="compra">comprar</button>
					<a class="btn btn-danger" type="submit" name="btnAccion" value="compra" href="prueba z3d.php">Agregar mas productos</a>
	</form>
<div class="alert alert-success">
No hay productos en el carrito...
</div>
</html>

