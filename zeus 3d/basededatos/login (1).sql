-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-11-2020 a las 23:27:42
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `login`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(20) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `categoria` varchar(50) NOT NULL,
  `subcategoria` varchar(50) NOT NULL,
  `precio` float NOT NULL,
  `tipo` varchar(25) NOT NULL,
  `detalle` varchar(150) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `foto` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre`, `categoria`, `subcategoria`, `precio`, `tipo`, `detalle`, `cantidad`, `foto`) VALUES
(3, 'unicornio', 'unicornios', 'unicornios', 90, '1', 'unicornio volador', 10, 'imagenes/unicornio modelo (1).jpg'),
(6, 'oso', 'animales', 'animales', 90, '1', 'oso cortante de galletitas', 5, 'imagenes/oso.jpg'),
(7, 'reno navidad', 'animales', 'navidad', 90, '1', 'reno de navidad', 7, 'imagenes/reno parado.jpg'),
(8, 'stitch cortante', 'programas', 'lilo y stitch', 90, '1', 'cortante stitch', 10, 'imagenes/stith.jpg'),
(9, 'martillo thor', 'super heroes', 'marvel', 90, '1', 'cortante de thor', 5, 'imagenes/thor.jpg'),
(13, 'pato', 'animales', 'animales', 90, '1', 'pato', 4, 'imagenes/pato cara.jpg'),
(15, 'topper comunion chica', 'religioso', 'religioso', 20, '2', 'topper para cupcake', 5, 'imagenes/topper comunion _angelita copia.jpg'),
(16, 'piña', 'verano', 'comida', 90, '1', 'cortante piña/anana', 4, 'imagenes/piña copia.jpg'),
(17, 'topper comunion chico', 'religioso', 'religioso', 90, '1', 'topper para cupcake', 5, 'imagenes/topper comunion-angelito copia.jpg'),
(18, 'spiderman', 'super heroes', 'super heroes', 90, '1', 'cortante de galletita spiderman', 5, 'imagenes/spiderman 2.jpg'),
(19, 'unicornio 2', 'unicornios', 'unicornios', 90, '1', 'cortante de galletita unicornio', 5, 'imagenes/unicornio modelo 2.jpg'),
(20, 'unicornio mod 3', 'unicornios', 'unicornios', 120, '1', 'unicornio modelo 3', 4, 'imagenes/unicornio modelo 3.jpg'),
(21, 'zanahoria', 'festividades', 'pascua', 90, '1', 'cortante de galletita zanahoria', 6, 'imagenes/zanahoria modelo 3 copia.jpg'),
(22, 'pata conejo', 'festividades', 'pascua', 90, '1', 'pata conejo', 5, 'imagenes/PicsArt_03-08-04.15.06 copia.jpg'),
(23, 'submarino', 'verano', 'mar', 90, '1', 'cortante de galletita ', 6, 'imagenes/submarino copia.jpg'),
(24, 'panda cara', 'animales', 'animales', 95, '1', 'cortante de galletita ', 7, 'imagenes/panda cara.jpg'),
(26, 'cara panda chica', 'animales', 'animales', 90, '1', 'cortante de galletita ', 6, 'imagenes/panda cara 2.jpg'),
(28, 'unicornio cara', 'unicornios', 'unicornios', 90, '1', 'cortante de galletita ', 50, 'imagenes/unicornio cara modelo  (3).jpg'),
(29, 'unicornio cara mod 2', 'unicornios', 'unicornios', 90, '1', 'cortante de galletita ', 7, 'imagenes/unicornio cara modelo (4).jpg'),
(30, 'unicornio cara mod 3', 'unicornios', 'unicornios', 90, '1', 'cortante de galletita ', 7, 'imagenes/unicornio cara modelo  (2).jpg'),
(31, 'super man', 'super heroes', 'super heroes', 80, '1', 'cortante de galletita ', 7, 'imagenes/superman.jpg'),
(32, 'pantera negra', 'super heroes', 'super heroes', 90, '1', 'cortante de galletita ', 5, 'imagenes/pantera negra muestra copia.jpg'),
(33, 'sandia', 'verano', 'verano', 80, '1', 'cortante de galletita ', 3, 'imagenes/sandia modelo 2 copia.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `email` varchar(100) NOT NULL,
  `pass` varchar(35) NOT NULL,
  `tipo` varchar(20) NOT NULL,
  `privilegio` int(11) NOT NULL,
  `username` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD UNIQUE KEY `username` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
