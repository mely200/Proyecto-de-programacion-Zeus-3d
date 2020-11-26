const productos = document.getElementById('productos'),
	  btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
	  grid = document.getElementById('grid');
	  
productos.addEventListener('mouseover', () => {
		grid.classList.add('activo');
});

grid.addEventListener('mouseleave', () => {

		grid.classList.remove('activo');
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
	elemento.addEventListener('mouseenter', (e) => {
		document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
				categoria.classList.remove('activo');

				if(categoria.dataset.categoria == e.target.dataset.categoria){
					categoria.classList.add('activo');
				}
			});
	});

});

$(document).ready(function(){
	
	// FILTRANDO PRODUCTOS  ============================================

	$('.items_categoria').click(function(){
		var catProduct = $(this).attr('clasificacion');
		console.log(catProduct);

		// OCULTANDO PRODUCTOS =========================
			$('.item-productos').hide();
		
		// MOSTRANDO PRODUCTOS =========================
		
			$('.item-productos[clasificacion="'+catProduct+'"]').show();
		
	});
	$('.items_categoria[clasificacion="cortantes"]').click(function(){
			$('.item-productos').show();
	});

});

