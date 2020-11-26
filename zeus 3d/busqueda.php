<?php
    if(isset($_POST['buscando'])){
        $busqueda = $_POST['busqueda'];
        echo $busqueda;
        if ($busqueda != ""){
            while($productos=mysqli_fetch_array($datos)){
                $categoria = $productos['categoria'];
                $subcategoria = $productos['subcategoria'];
                $imagen = $productos['foto'];
                $nombreproducto = $productos['nombre'];
                $buscar = " ";
                $reemplazar = "%20";
                $nombreproducto = strtolower($nombreproducto);
                $busqueda = strtolower($busqueda);
                $count = 0;
                if (strncmp($nombreproducto, $busqueda, 4) == 0){
                    $imagennueva = str_replace($buscar, $reemplazar, $imagen);
                    echo "<div class='item-productos' clasificacion='$categoria' category='$subcategoria'><img src=../$imagennueva  alt=''><a href='#'>$nombreproducto</a></div>";
                }
            }
        }
        else {
            while($productos=mysqli_fetch_array($datos)){
                $categoria = $productos['categoria'];
                $subcategoria = $productos['subcategoria'];
                $imagen = $productos['foto'];
                $nombreproducto = $productos['nombre'];
                $buscar = " ";
                $reemplazar = "%20";
                $imagennueva = str_replace($buscar, $reemplazar, $imagen);
                echo "<div class='item-productos' clasificacion='$categoria' category='$subcategoria'><img src=../$imagennueva  alt=''><a href='#'>$nombreproducto</a></div>";
            }
        }
    }
?>