-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-05-2020 a las 21:51:58
-- Versión del servidor: 10.1.36-MariaDB
-- Versión de PHP: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectofinalddbb`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindIdCine` (IN `pIdCine` INT)  NO SQL
SELECT * FROM cines WHERE cines.id = pIdCine$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindIdEstreno` (IN `pIdEstreno` INT)  NO SQL
SELECT * FROM estrenos WHERE estrenos.id = pIdEstreno$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spFindIdPelicula` (IN `pIdPelicula` INT)  NO SQL
SELECT * FROM peliculas WHERE peliculas.id = pIdPelicula$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spInsertFactura` (IN `pEntradasCompradas` INT(3), IN `pPrecioEntrada` FLOAT, IN `pPrecioTotal` FLOAT, IN `pId_sesion` INT(4), IN `pCine` VARCHAR(50), IN `pHora_sesion` VARCHAR(12))  NO SQL
INSERT INTO facturas (facturas.entradasCompradas, facturas.precioEntrada, facturas.precioTotal, facturas.id_sesion, facturas.cine, facturas.hora_sesion) VALUES (pEntradasCompradas, pPrecioEntrada, pPrecioTotal, pId_sesion, pCine, pHora_sesion)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spMostrarButacasPorCine` (IN `pIdCine` INT)  NO SQL
SELECT butacas.* FROM butacas JOIN cines ON butacas.id_cine = cines.id WHERE cines.id = pIdCine$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spMostrarCines` ()  NO SQL
SELECT * FROM cines$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spMostrarEstrenos` ()  NO SQL
SELECT * FROM estrenos$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spMostrarGeneros` ()  NO SQL
SELECT * FROM generos$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spMostrarPeliculas` ()  NO SQL
SELECT * FROM peliculas$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spMostrarPeliculasPorGeneros` (IN `pGenero` VARCHAR(50))  NO SQL
SELECT peliculas.* FROM peliculas JOIN peliculasgeneros ON peliculas.id = peliculasgeneros.id_pelicula JOIN generos ON peliculasgeneros.id_genero = generos.id WHERE generos.nombre = pGenero$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `spMostrarSesiones` (IN `pIdCine` INT)  NO SQL
SELECT * FROM sesiones WHERE sesiones.id_cine = pIdCine$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `butacas`
--

CREATE TABLE `butacas` (
  `id` int(11) NOT NULL,
  `numero` varchar(4) COLLATE utf8_unicode_ci NOT NULL,
  `reservado` tinyint(1) NOT NULL,
  `id_cine` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `butacas`
--

INSERT INTO `butacas` (`id`, `numero`, `reservado`, `id_cine`) VALUES
(1, 'A01', 0, 6),
(2, 'A02', 0, 6),
(3, 'A03', 0, 6),
(4, 'A04', 0, 6),
(5, 'A05', 0, 6),
(6, 'A06', 0, 6),
(7, 'A07', 0, 6),
(8, 'A08', 0, 6),
(9, 'B01', 0, 6),
(10, 'B02', 0, 6),
(11, 'B03', 0, 6),
(12, 'B04', 0, 6),
(13, 'B05', 0, 6),
(14, 'B06', 0, 6),
(15, 'B07', 0, 6),
(16, 'B08', 0, 6),
(17, 'C01', 0, 6),
(18, 'C02', 0, 6),
(19, 'C03', 0, 6),
(20, 'C04', 0, 6),
(21, 'C05', 0, 6),
(22, 'C06', 0, 6),
(23, 'C07', 0, 6),
(24, 'C08', 0, 6),
(25, 'D01', 0, 6),
(26, 'D02', 0, 6),
(27, 'D03', 0, 6),
(28, 'D04', 0, 6),
(29, 'D05', 0, 6),
(30, 'D06', 0, 6),
(31, 'D07', 0, 6),
(32, 'D08', 0, 6),
(33, 'E01', 0, 6),
(34, 'E02', 0, 6),
(35, 'E03', 0, 6),
(36, 'E04', 0, 6),
(37, 'E05', 0, 6),
(38, 'E06', 0, 6),
(39, 'E07', 0, 6),
(40, 'E08', 0, 6),
(41, 'A01', 0, 1),
(42, 'A02', 0, 1),
(43, 'A03', 0, 1),
(44, 'A04', 0, 1),
(45, 'A05', 0, 1),
(46, 'A06', 0, 1),
(47, 'A07', 0, 1),
(48, 'A08', 0, 1),
(49, 'A09', 0, 1),
(50, 'A10', 0, 1),
(51, 'A11', 0, 1),
(52, 'B01', 0, 1),
(53, 'B02', 0, 1),
(54, 'B03', 0, 1),
(55, 'B04', 0, 1),
(56, 'B05', 0, 1),
(57, 'B06', 0, 1),
(58, 'B07', 0, 1),
(59, 'B08', 0, 1),
(60, 'B09', 0, 1),
(61, 'B10', 0, 1),
(62, 'B11', 0, 1),
(63, 'C01', 0, 1),
(64, 'C02', 0, 1),
(65, 'C03', 0, 1),
(66, 'C04', 0, 1),
(67, 'C05', 0, 1),
(68, 'C06', 0, 1),
(69, 'C07', 0, 1),
(70, 'C08', 0, 1),
(71, 'C09', 0, 1),
(72, 'C10', 0, 1),
(73, 'C11', 0, 1),
(74, 'D01', 0, 1),
(75, 'D02', 0, 1),
(76, 'D03', 0, 1),
(77, 'D04', 0, 1),
(78, 'D05', 0, 1),
(79, 'D06', 0, 1),
(80, 'D07', 0, 1),
(81, 'D08', 0, 1),
(82, 'D09', 0, 1),
(83, 'D10', 0, 1),
(84, 'D11', 0, 1),
(85, 'E01', 0, 1),
(86, 'E02', 0, 1),
(87, 'E03', 0, 1),
(88, 'E04', 0, 1),
(89, 'E05', 0, 1),
(90, 'E06', 0, 1),
(91, 'E07', 0, 1),
(92, 'E08', 0, 1),
(93, 'E09', 0, 1),
(94, 'E10', 0, 1),
(95, 'E11', 0, 1),
(96, 'A01', 0, 2),
(97, 'A02', 0, 2),
(98, 'A03', 0, 2),
(99, 'A04', 0, 2),
(100, 'A05', 0, 2),
(101, 'A06', 0, 2),
(102, 'A07', 0, 2),
(103, 'A08', 0, 2),
(104, 'A09', 0, 2),
(105, 'B01', 0, 2),
(106, 'B02', 0, 2),
(107, 'B03', 0, 2),
(108, 'B04', 0, 2),
(109, 'B05', 0, 2),
(110, 'B06', 0, 2),
(111, 'B07', 0, 2),
(112, 'B08', 0, 2),
(113, 'B09', 0, 2),
(114, 'C01', 0, 2),
(115, 'C02', 0, 2),
(116, 'C03', 0, 2),
(117, 'C04', 0, 2),
(118, 'C05', 0, 2),
(119, 'C06', 0, 2),
(120, 'C07', 0, 2),
(121, 'C08', 0, 2),
(122, 'C09', 0, 2),
(123, 'D01', 0, 2),
(124, 'D02', 0, 2),
(125, 'D03', 0, 2),
(126, 'D04', 0, 2),
(127, 'D05', 0, 2),
(128, 'D06', 0, 2),
(129, 'D07', 0, 2),
(130, 'D08', 0, 2),
(131, 'D09', 0, 2),
(132, 'E01', 0, 2),
(133, 'E02', 0, 2),
(134, 'E03', 0, 2),
(135, 'E04', 0, 2),
(136, 'E05', 0, 2),
(137, 'E06', 0, 2),
(138, 'E07', 0, 2),
(139, 'E08', 0, 2),
(140, 'E09', 0, 2),
(141, 'A01', 0, 3),
(142, 'A02', 0, 3),
(143, 'A03', 0, 3),
(144, 'A04', 0, 3),
(145, 'A05', 0, 3),
(146, 'A06', 0, 3),
(147, 'A07', 0, 3),
(148, 'A08', 0, 3),
(149, 'A09', 0, 3),
(150, 'A10', 0, 3),
(151, 'B01', 0, 3),
(152, 'B02', 0, 3),
(153, 'B03', 0, 3),
(154, 'B04', 0, 3),
(155, 'B05', 0, 3),
(156, 'B06', 0, 3),
(157, 'B07', 0, 3),
(158, 'B08', 0, 3),
(159, 'B09', 0, 3),
(160, 'B10', 0, 3),
(161, 'C01', 0, 3),
(162, 'C02', 0, 3),
(163, 'C03', 0, 3),
(164, 'C04', 0, 3),
(165, 'C05', 0, 3),
(166, 'C06', 0, 3),
(167, 'C07', 0, 3),
(168, 'C08', 0, 3),
(169, 'C09', 0, 3),
(170, 'C10', 0, 3),
(171, 'D01', 0, 3),
(172, 'D02', 0, 3),
(173, 'D03', 0, 3),
(174, 'D04', 0, 3),
(175, 'D05', 0, 3),
(176, 'D06', 0, 3),
(177, 'D07', 0, 3),
(178, 'D08', 0, 3),
(179, 'D09', 0, 3),
(180, 'D10', 0, 3),
(181, 'E01', 0, 3),
(182, 'E02', 0, 3),
(183, 'E03', 0, 3),
(184, 'E04', 0, 3),
(185, 'E05', 0, 3),
(186, 'E06', 0, 3),
(187, 'E07', 0, 3),
(188, 'E08', 0, 3),
(189, 'E09', 0, 3),
(190, 'E10', 0, 3),
(191, 'A01', 0, 4),
(192, 'A02', 0, 4),
(193, 'A03', 0, 4),
(194, 'A04', 0, 4),
(195, 'A05', 0, 4),
(196, 'A06', 0, 4),
(197, 'A07', 0, 4),
(198, 'A08', 0, 4),
(199, 'A09', 0, 4),
(200, 'B01', 0, 4),
(201, 'B02', 0, 4),
(202, 'B03', 0, 4),
(203, 'B04', 0, 4),
(204, 'B05', 0, 4),
(205, 'B06', 0, 4),
(206, 'B07', 0, 4),
(207, 'B08', 0, 4),
(208, 'B09', 0, 4),
(209, 'C01', 0, 4),
(210, 'C02', 0, 4),
(211, 'C03', 0, 4),
(212, 'C04', 0, 4),
(213, 'C05', 0, 4),
(214, 'C06', 0, 4),
(215, 'C07', 0, 4),
(216, 'C08', 0, 4),
(217, 'C09', 0, 4),
(218, 'D01', 0, 4),
(219, 'D02', 0, 4),
(220, 'D03', 0, 4),
(221, 'D04', 0, 4),
(222, 'D05', 0, 4),
(223, 'D06', 0, 4),
(224, 'D07', 0, 4),
(225, 'D08', 0, 4),
(226, 'D09', 0, 4),
(227, 'E01', 0, 4),
(228, 'E02', 0, 4),
(229, 'E03', 0, 4),
(230, 'E04', 0, 4),
(231, 'E05', 0, 4),
(232, 'E06', 0, 4),
(233, 'E07', 0, 4),
(234, 'E08', 0, 4),
(235, 'E09', 0, 4),
(236, 'A01', 0, 5),
(237, 'A02', 0, 5),
(238, 'A03', 0, 5),
(239, 'A04', 0, 5),
(240, 'A05', 0, 5),
(241, 'A06', 0, 5),
(242, 'A07', 0, 5),
(243, 'A08', 0, 5),
(244, 'A09', 0, 5),
(245, 'B01', 0, 5),
(246, 'B02', 0, 5),
(247, 'B03', 0, 5),
(248, 'B04', 0, 5),
(249, 'B05', 0, 5),
(250, 'B06', 0, 5),
(251, 'B07', 0, 5),
(252, 'B08', 0, 5),
(253, 'B09', 0, 5),
(254, 'C01', 0, 5),
(255, 'C02', 0, 5),
(256, 'C03', 0, 5),
(257, 'C04', 0, 5),
(258, 'C05', 0, 5),
(259, 'C06', 0, 5),
(260, 'C07', 0, 5),
(261, 'C08', 0, 5),
(262, 'C09', 0, 5),
(263, 'D01', 0, 5),
(264, 'D02', 0, 5),
(265, 'D03', 0, 5),
(266, 'D04', 0, 5),
(267, 'D05', 0, 5),
(268, 'D06', 0, 5),
(269, 'D07', 0, 5),
(270, 'D08', 0, 5),
(271, 'D09', 0, 5),
(272, 'E01', 0, 5),
(273, 'E02', 0, 5),
(274, 'E03', 0, 5),
(275, 'E04', 0, 5),
(276, 'E05', 0, 5),
(277, 'E06', 0, 5),
(278, 'E07', 0, 5),
(279, 'E08', 0, 5),
(280, 'E09', 0, 5),
(281, 'A01', 0, 7),
(282, 'A02', 0, 7),
(283, 'A03', 0, 7),
(284, 'A04', 0, 7),
(285, 'A05', 0, 7),
(286, 'A06', 0, 7),
(287, 'A07', 0, 7),
(288, 'A08', 0, 7),
(289, 'B01', 0, 7),
(290, 'B02', 0, 7),
(291, 'B03', 0, 7),
(292, 'B04', 0, 7),
(293, 'B05', 0, 7),
(294, 'B06', 0, 7),
(295, 'B07', 0, 7),
(296, 'B08', 0, 7),
(297, 'C01', 0, 7),
(298, 'C02', 0, 7),
(299, 'C03', 0, 7),
(300, 'C04', 0, 7),
(301, 'C05', 0, 7),
(302, 'C06', 0, 7),
(303, 'C07', 0, 7),
(304, 'C08', 0, 7),
(305, 'D01', 0, 7),
(306, 'D02', 0, 7),
(307, 'D03', 0, 7),
(308, 'D04', 0, 7),
(309, 'D05', 0, 7),
(310, 'D06', 0, 7),
(311, 'D07', 0, 7),
(312, 'D08', 0, 7),
(313, 'E01', 0, 7),
(314, 'E02', 0, 7),
(315, 'E03', 0, 7),
(316, 'E04', 0, 7),
(317, 'E05', 0, 7),
(318, 'E06', 0, 7),
(319, 'E07', 0, 7),
(320, 'E08', 0, 7),
(321, 'A01', 0, 8),
(322, 'A02', 0, 8),
(323, 'A03', 0, 8),
(324, 'A04', 0, 8),
(325, 'A05', 0, 8),
(326, 'A06', 0, 8),
(327, 'A07', 0, 8),
(328, 'A08', 0, 8),
(329, 'A09', 0, 8),
(330, 'B01', 0, 8),
(331, 'B02', 0, 8),
(332, 'B03', 0, 8),
(333, 'B04', 0, 8),
(334, 'B05', 0, 8),
(335, 'B06', 0, 8),
(336, 'B07', 0, 8),
(337, 'B08', 0, 8),
(338, 'B09', 0, 8),
(339, 'C01', 0, 8),
(340, 'C02', 0, 8),
(341, 'C03', 0, 8),
(342, 'C04', 0, 8),
(343, 'C05', 0, 8),
(344, 'C06', 0, 8),
(345, 'C07', 0, 8),
(346, 'C08', 0, 8),
(347, 'C09', 0, 8),
(348, 'D01', 0, 8),
(349, 'D02', 0, 8),
(350, 'D03', 0, 8),
(351, 'D04', 0, 8),
(352, 'D05', 0, 8),
(353, 'D06', 0, 8),
(354, 'D07', 0, 8),
(355, 'D08', 0, 8),
(356, 'D09', 0, 8),
(357, 'E01', 0, 8),
(358, 'E02', 0, 8),
(359, 'E03', 0, 8),
(360, 'E04', 0, 8),
(361, 'E05', 0, 8),
(362, 'E06', 0, 8),
(363, 'E07', 0, 8),
(364, 'E08', 0, 8),
(365, 'E09', 0, 8),
(366, 'A01', 0, 9),
(367, 'A02', 0, 9),
(368, 'A03', 0, 9),
(369, 'A04', 0, 9),
(370, 'A05', 0, 9),
(371, 'A06', 0, 9),
(372, 'A07', 0, 9),
(373, 'A08', 0, 9),
(374, 'B01', 0, 9),
(375, 'B02', 0, 9),
(376, 'B03', 0, 9),
(377, 'B04', 0, 9),
(378, 'B05', 0, 9),
(379, 'B06', 0, 9),
(380, 'B07', 0, 9),
(381, 'B08', 0, 9),
(382, 'C01', 0, 9),
(383, 'C02', 0, 9),
(384, 'C03', 0, 9),
(385, 'C04', 0, 9),
(386, 'C05', 0, 9),
(387, 'C06', 0, 9),
(388, 'C07', 0, 9),
(389, 'C08', 0, 9),
(390, 'D01', 0, 9),
(391, 'D02', 0, 9),
(392, 'D03', 0, 9),
(393, 'D04', 0, 9),
(394, 'D05', 0, 9),
(395, 'D06', 0, 9),
(396, 'D07', 0, 9),
(397, 'D08', 0, 9),
(398, 'E01', 0, 9),
(399, 'E02', 0, 9),
(400, 'E03', 0, 9),
(401, 'E04', 0, 9),
(402, 'E05', 0, 9),
(403, 'E06', 0, 9),
(404, 'E07', 0, 9),
(405, 'E08', 0, 9),
(406, 'A01', 0, 10),
(407, 'A02', 0, 10),
(408, 'A03', 0, 10),
(409, 'A04', 0, 10),
(410, 'A05', 0, 10),
(411, 'A06', 0, 10),
(412, 'A07', 0, 10),
(413, 'A08', 0, 10),
(414, 'A09', 0, 10),
(415, 'A10', 0, 10),
(416, 'B01', 0, 10),
(417, 'B02', 0, 10),
(418, 'B03', 0, 10),
(419, 'B04', 0, 10),
(420, 'B05', 0, 10),
(421, 'B06', 0, 10),
(422, 'B07', 0, 10),
(423, 'B08', 0, 10),
(424, 'B09', 0, 10),
(425, 'B10', 0, 10),
(426, 'C01', 0, 10),
(427, 'C02', 0, 10),
(428, 'C03', 0, 10),
(429, 'C04', 0, 10),
(430, 'C05', 0, 10),
(431, 'C06', 0, 10),
(432, 'C07', 0, 10),
(433, 'C08', 0, 10),
(434, 'C09', 0, 10),
(435, 'C10', 0, 10),
(436, 'D01', 0, 10),
(437, 'D02', 0, 10),
(438, 'D03', 0, 10),
(439, 'D04', 0, 10),
(440, 'D05', 0, 10),
(441, 'D06', 0, 10),
(442, 'D07', 0, 10),
(443, 'D08', 0, 10),
(444, 'D09', 0, 10),
(445, 'D10', 0, 10),
(446, 'E01', 0, 10),
(447, 'E02', 0, 10),
(448, 'E03', 0, 10),
(449, 'E04', 0, 10),
(450, 'E05', 0, 10),
(451, 'E06', 0, 10),
(452, 'E07', 0, 10),
(453, 'E08', 0, 10),
(454, 'E09', 0, 10),
(455, 'E10', 0, 10),
(456, 'A01', 0, 11),
(457, 'A02', 0, 11),
(458, 'A03', 0, 11),
(459, 'A04', 0, 11),
(460, 'A05', 0, 11),
(461, 'A06', 0, 11),
(462, 'A07', 0, 11),
(463, 'A08', 0, 11),
(464, 'A09', 0, 11),
(465, 'B01', 0, 11),
(466, 'B02', 0, 11),
(467, 'B03', 0, 11),
(468, 'B04', 0, 11),
(469, 'B05', 0, 11),
(470, 'B06', 0, 11),
(471, 'B07', 0, 11),
(472, 'B08', 0, 11),
(473, 'B09', 0, 11),
(474, 'C01', 0, 11),
(475, 'C02', 0, 11),
(476, 'C03', 0, 11),
(477, 'C04', 0, 11),
(478, 'C05', 0, 11),
(479, 'C06', 0, 11),
(480, 'C07', 0, 11),
(481, 'C08', 0, 11),
(482, 'C09', 0, 11),
(483, 'D01', 0, 11),
(484, 'D02', 0, 11),
(485, 'D03', 0, 11),
(486, 'D04', 0, 11),
(487, 'D05', 0, 11),
(488, 'D06', 0, 11),
(489, 'D07', 0, 11),
(490, 'D08', 0, 11),
(491, 'D09', 0, 11),
(492, 'E01', 0, 11),
(493, 'E02', 0, 11),
(494, 'E03', 0, 11),
(495, 'E04', 0, 11),
(496, 'E05', 0, 11),
(497, 'E06', 0, 11),
(498, 'E07', 0, 11),
(499, 'E08', 0, 11),
(500, 'E09', 0, 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cines`
--

CREATE TABLE `cines` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `ubicacion` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `cines`
--

INSERT INTO `cines` (`id`, `nombre`, `ubicacion`) VALUES
(1, 'Cinesa Zubiarte', 'Bilbao, Leizaola Lehendakariaren Kalea, 2'),
(2, 'Multicines 7', 'Bilbao, José María de Escuza Kalea, 13, 15'),
(3, 'Cines Golem Alhóndiga', 'Bilbao, Arriquíbar Plaza, 4'),
(4, 'Cine Zugaza', 'Durango, Uribarri Kalea, 8'),
(5, 'Florida Guridi', 'Vitoria-Gazteiz, Ramon Ortiz de Zarate Kalea, 1'),
(6, 'Teatro Lizeo Antzokia', 'Gernika-Lumo, Ocho de Enero Kalea, 4'),
(7, 'Néstor Basterretxea Aretoa', 'Bermeo, Prantzisko Deuna Atea Plaza'),
(8, 'Cine Ikusgarri', 'Lekeitio, Otxoa Urkiza Kalea'),
(9, 'Lasarte Aretoa', 'Igorre, Agirre Lehendakari Estobidea, 19'),
(10, 'Cines Antiguo Berri', 'Donostia, Zarautz Kalea, 2'),
(11, 'Zornotza Aretoa', 'Amorebieta-Etxano, Urbano Larruzea Kalea');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estrenos`
--

CREATE TABLE `estrenos` (
  `id` int(11) NOT NULL,
  `fechaDeEstreno` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_pelicula` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `estrenos`
--

INSERT INTO `estrenos` (`id`, `fechaDeEstreno`, `id_pelicula`) VALUES
(1, '24 de octubre', 6),
(2, '3 de septiembre', 7),
(3, '2 de julio', 51);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `facturas`
--

CREATE TABLE `facturas` (
  `id` int(11) NOT NULL,
  `entradasCompradas` int(11) NOT NULL,
  `precioEntrada` float NOT NULL,
  `precioTotal` float NOT NULL,
  `id_sesion` int(11) NOT NULL,
  `cine` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `hora_sesion` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generos`
--

CREATE TABLE `generos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `generos`
--

INSERT INTO `generos` (`id`, `nombre`) VALUES
(1, 'Aventura'),
(2, 'Comedia'),
(3, 'Acción'),
(4, 'Terror'),
(5, 'Ciencia-ficción'),
(6, 'Drama'),
(7, 'Animación'),
(8, 'Crimen'),
(9, 'Musical'),
(10, 'Bélico'),
(11, 'Western');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE `peliculas` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `duracion` int(11) DEFAULT NULL,
  `anio` int(11) NOT NULL,
  `imagenCartelera` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `trailer` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `clasificacion` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`id`, `titulo`, `duracion`, `anio`, `imagenCartelera`, `trailer`, `clasificacion`) VALUES
(1, 'Joker', 122, 2019, 'view/img/joker.jpg', 'https://www.youtube.com/embed/ygUHhImN98w', '+18'),
(2, 'Sonic, la pelicula', 100, 2020, 'view/img/sonic.jpg', 'https://www.youtube.com/embed/mIgGCaIwdXU', 'PG'),
(3, 'No Time to Die', 174, 2020, 'view/img/no-time-to-die.jpg', 'https://www.youtube.com/embed/90HtfG6dZAM', '+13'),
(4, 'El hombre invisible', 124, 2020, 'view\\img\\el-hombre-invisible.jpg', 'https://www.youtube.com/embed/lKkLZvWf-Zc', '+17'),
(5, 'Mulan', 120, 2020, 'view/img/mulan.jpg', 'https://www.youtube.com/embed/8xIkGSTk1FA', '+13'),
(6, 'The walking dead movie', NULL, 2020, 'view/img/the-walking-dead.jpg', 'https://www.youtube.com/embed/eIBgEfwPLDQ', NULL),
(7, 'Monster Hunter', NULL, 2020, 'view/img/monster-hunter.jpg', 'https://www.youtube.com/embed/qUAaBxgZVL8', NULL),
(8, 'El irlandés', 209, 2019, 'view/img/el-irlandes.jpg', 'https://www.youtube.com/embed/gZ6Oq9F3ho0', '+16'),
(9, 'Avengers: Endgame', 181, 2019, 'view/img/avengers.jpg', 'https://www.youtube.com/embed/1XrrTJpA3yM', '+13'),
(10, 'Nosotros', 116, 2019, 'view/img/nosotros.jpg', 'https://www.youtube.com/embed/qJh9_0xH3mY', '+16'),
(11, 'Dragon Ball Super: Broly', 100, 2019, 'view/img/dragon-ball-super-broly.jpg', 'https://www.youtube.com/embed/9ll5zb-264w', '+13'),
(12, 'Los increibles 2', 125, 2018, 'view/img/los-increibles2.jpg', 'https://www.youtube.com/embed/8UwxL-Zheqk', '+8'),
(13, 'Frozen 2', 103, 2019, 'view/img/frozen2.jpg', 'https://www.youtube.com/embed/I-oJ5QjrX9M', '+8'),
(14, 'Como entrenar a tu dragon 3', 104, 2019, 'view/img/como-entrenar-a-tu-dragon3.jpg', 'https://www.youtube.com/embed/DWXJdezkThk', '+8'),
(15, 'Toy story 4', 100, 2019, 'view/img/toy-story4.jpg', 'https://www.youtube.com/embed/f33yJZ5uOpU', '+8'),
(16, 'Onward', 102, 2020, 'view/img/onward.jpg', 'https://www.youtube.com/embed/OaVg6SEFcqQ', '+8'),
(17, 'Bad boys for life', 124, 2020, 'view/img/bad-boys-for-life.jpg', 'https://www.youtube.com/embed/bbqWBZEjSO8', '+16'),
(18, 'Los odiosos ocho', 167, 2015, 'view/img/los-odiosos-ocho.jpg', 'https://www.youtube.com/embed/KmQji_BVwuk', '+18'),
(19, 'Bone tomawawk', 133, 2015, 'view/img/bone-tomahawk.jpg', 'https://www.youtube.com/embed/GoIkVhBoi-U', '+18'),
(20, 'Django unchained', 165, 2012, 'view/img/django-unchained.jpg', 'https://www.youtube.com/embed/CLofzNkIqAc', '+18'),
(21, 'Cats', 110, 2019, 'view/img/cats.jpg', 'https://www.youtube.com/embed/0SsLKC7T-PY', 'Para todos los públicos'),
(22, 'La La Land', 128, 2016, 'view/img/lalaland.jpg', 'https://www.youtube.com/embed/IHbHn5SLhZo', '+13'),
(23, 'Los Miserables', 124, 2012, 'view/img/los-miserables.jpg', 'https://www.youtube.com/embed/UgBv4ocNJaU', '+13'),
(24, 'Mamma Mia! Here We Go Again', 114, 2018, 'view/img/mamma-mia-here-we-go-again.jpg', 'https://www.youtube.com/embed/hcgSejNB9Bk\"', 'Para todos los públicos'),
(25, 'Into the Woods', 125, 2014, 'view/img/into-the-woods.jpg', 'https://www.youtube.com/embed/fEPCeIVrCWM', '+7'),
(26, 'El Gran Showman', 106, 2017, 'view/img/el-gran-sjowman.jpg', 'https://www.youtube.com/embed/MM3NX2EfCtY\"', '+10'),
(27, 'Fury', 135, 2014, 'view/img/fury.jpg', 'https://www.youtube.com/embed/yftjMJVN4dE', '+18'),
(28, 'Hasta el Último Hombre', 139, 2016, 'view/img/hasta-el-ultimo-hombre.jpg', 'https://www.youtube.com/embed/DC4xCLTawHQ', '+16'),
(29, 'Dunkerke', 106, 2017, 'view/img/dunquerque.jpg', 'https://www.youtube.com/embed/DsRcqwGOmUU', '+13'),
(30, 'American Sniper', 134, 2015, 'view/img/american-sniper.jpg', 'src=\"https://www.youtube.com/embed/2TT0SxVF0P8', '+16'),
(31, 'Midway', 138, 2019, 'view/img/midaway.jpg', 'https://www.youtube.com/embed/1qkuieXeHbg', '+13'),
(32, 'Full Metal Jacket', 116, 1987, 'view/img/full-metal-jacket.jpg', 'https://www.youtube.com/embed/7115nOKRFD8', '+18'),
(33, 'It Capitulo 2', 170, 2019, 'view/img/it2.jpg', 'https://www.youtube.com/embed/o1sQbtZpsic', '+18'),
(34, 'The Curse of La Llorona', 93, 2019, 'view/img/curse-of-la-llorona.jpg', 'https://www.youtube.com/embed/JoTbiH3Wppo', '+13'),
(35, 'The Prodigy', 91, 2019, 'view/img/the-prodigy.jpg', 'https://www.youtube.com/embed/y2S9VzDDdM8', '+16'),
(36, 'Pet Sematary', 120, 2019, 'view/img/pet-sematary.jpg', 'https://www.youtube.com/embed/4swfHkdN1t4', '+16'),
(37, 'The Lodge', 108, 2019, 'view/img/the-lodge.jpg', 'https://www.youtube.com/embed/koXzkBTvJl0', '+18'),
(38, 'Escape Room', 99, 2019, 'view/img/escape-room.jpg', 'https://www.youtube.com/embed/qATdnx_x0bs', '+16'),
(39, 'Star Wars: Episodio VIII - Los últimos Jedi', 152, 2017, 'view/img/starwars.jpg', 'https://www.youtube.com/embed/anOJjqQb8x0', '+7'),
(40, 'Blade Runner 2049', 164, 2017, 'view/img/bladerunner.jpg', 'https://www.youtube.com/embed/PkqHVGFAhbU', '+12'),
(41, 'Aniquilación', 120, 2018, 'view/img/aniquilacion.jpg', 'https://www.youtube.com/embed/VGRaBxmdLbQ', '+13'),
(42, 'Guardianes de la Galaxia Vol. 2', 138, 2017, 'view/img/guardianesdelagalaxia2.jpg', 'https://www.youtube.com/embed/ISS-a7b0iHw', '13'),
(43, 'High Life', 113, 2018, 'view/img/highlife.jpg', 'https://www.youtube.com/embed/fUmlRpGa4oU', '+16'),
(44, '¡Shazam!', 132, 2019, 'view/img/shazam.png', 'https://www.youtube.com/embed/3PE-jko9c1E', '+13'),
(45, 'Ali G Anda Suelto', 88, 2002, 'view/img/alig.jpg', 'https://www.youtube.com/embed/cRiCbOiChyM', '+16'),
(46, 'Spider-Man: Lejos de Casa', 129, 2019, 'view/img/spiderman.jpg', 'https://www.youtube.com/embed/I4F5sj-aaXw', '+7'),
(47, 'Den of Thieves', 148, 2018, 'view/img/thenofthives.jpg', 'https://www.youtube.com/embed/GuzjCCnTTsQ', '+16'),
(48, 'The Gentlemen', 113, 2019, 'view/img/thegentlemen.jpg', 'https://www.youtube.com/embed/faB5ZWbg6Xc', '+16'),
(49, 'Going in Style', 93, 2017, 'view/img/goinginstyle.jpg', 'https://www.youtube.com/embed/K6tK6d2Hqws', '+13'),
(50, 'The Sisters Brothers', 122, 2018, 'view/img/thesisterbrothers.jpg', 'https://www.youtube.com/embed/s-76uy4Hlt8', '+13'),
(51, 'Ghostbusters: Afterlife', NULL, 2020, 'view/img/ghostbusters.png', 'https://www.youtube.com/embed/WOR2vvYCwb0', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculasgeneros`
--

CREATE TABLE `peliculasgeneros` (
  `id` int(11) NOT NULL,
  `id_pelicula` int(11) NOT NULL,
  `id_genero` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `peliculasgeneros`
--

INSERT INTO `peliculasgeneros` (`id`, `id_pelicula`, `id_genero`) VALUES
(1, 1, 6),
(2, 1, 8),
(3, 2, 2),
(4, 2, 1),
(5, 3, 3),
(6, 3, 1),
(7, 4, 4),
(8, 4, 6),
(9, 5, 1),
(10, 5, 3),
(15, 8, 8),
(16, 8, 6),
(17, 9, 3),
(18, 9, 5),
(19, 10, 4),
(20, 10, 8),
(21, 11, 7),
(22, 12, 7),
(23, 13, 7),
(24, 14, 7),
(25, 15, 7),
(26, 16, 7),
(27, 17, 2),
(28, 17, 3),
(29, 18, 11),
(30, 18, 6),
(31, 19, 11),
(32, 19, 4),
(33, 20, 11),
(34, 20, 6),
(35, 21, 9),
(36, 22, 9),
(37, 23, 9),
(38, 23, 6),
(39, 24, 9),
(40, 24, 2),
(41, 25, 9),
(42, 26, 9),
(43, 26, 6),
(44, 27, 10),
(45, 27, 3),
(46, 28, 10),
(47, 28, 6),
(48, 29, 10),
(49, 29, 6),
(50, 30, 10),
(51, 30, 3),
(52, 31, 10),
(53, 31, 3),
(54, 32, 10),
(55, 32, 6),
(56, 33, 4),
(57, 34, 4),
(58, 35, 4),
(59, 36, 4),
(60, 37, 4),
(61, 38, 4),
(62, 39, 5),
(63, 39, 1),
(64, 40, 5),
(65, 41, 5),
(66, 41, 1),
(67, 42, 5),
(68, 42, 1),
(69, 43, 5),
(70, 43, 1),
(71, 44, 3),
(72, 44, 2),
(73, 45, 2),
(74, 46, 3),
(75, 46, 2),
(76, 47, 3),
(77, 47, 8),
(78, 48, 3),
(79, 48, 2),
(80, 49, 2),
(81, 49, 8),
(82, 50, 11),
(83, 50, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sesiones`
--

CREATE TABLE `sesiones` (
  `id` int(11) NOT NULL,
  `hora` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `id_cine` int(11) NOT NULL,
  `id_pelicula` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sesiones`
--

INSERT INTO `sesiones` (`id`, `hora`, `id_cine`, `id_pelicula`) VALUES
(1, '17:00-19:1', 1, 27),
(2, '19:20-21:4', 1, 31),
(3, '21:50-23:2', 1, 34),
(4, '17:00-19:2', 2, 44),
(5, '19:30-21:0', 2, 49),
(6, '21:10-22:4', 2, 16),
(7, '16:00-17:3', 3, 11),
(8, '17-40:19:4', 3, 17),
(9, '19:50-22:2', 3, 2),
(10, '22:30-00:0', 3, 35),
(11, '17:00-18:1', 4, 30),
(12, '18:20-20:2', 4, 41),
(13, '20:30-00:0', 4, 47),
(20, '16:30-19:3', 5, 9),
(21, '19:40-21:4', 5, 12),
(22, '21:50-23:5', 5, 23),
(23, '16:00-18:2', 6, 42),
(24, '18:30-20:2', 6, 50),
(25, '20:35-23:1', 6, 20),
(41, '17:00-18:3', 7, 13),
(42, '18:40-20:3', 7, 48),
(43, '20:40-22:2', 7, 38),
(44, '17:00-19:0', 8, 1),
(45, '19:10-21:2', 8, 19),
(46, '22:30-00:4', 8, 22),
(47, '17:00-18:5', 9, 26),
(48, '19:05-21:2', 9, 28),
(49, '21:35-23:1', 9, 29),
(50, '17:00-19:1', 10, 46),
(51, '19:20-21:0', 10, 14),
(52, '21:10-23:4', 10, 39),
(53, '16:00-19:0', 11, 8),
(54, '19:10-21:3', 11, 42),
(55, '21:40-00:2', 11, 33);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contrasenia` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `contrasenia`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3'),
(2, 'jon', '006cb570acdab0e0bfc8e3dcb7bb4edf'),
(3, 'prueba', 'c893bad68927b457dbed39460e6afd62');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `butacas`
--
ALTER TABLE `butacas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_cine` (`id_cine`);

--
-- Indices de la tabla `cines`
--
ALTER TABLE `cines`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estrenos`
--
ALTER TABLE `estrenos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pelicula` (`id_pelicula`);

--
-- Indices de la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_sesion` (`id_sesion`);

--
-- Indices de la tabla `generos`
--
ALTER TABLE `generos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `peliculasgeneros`
--
ALTER TABLE `peliculasgeneros`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pelicula` (`id_pelicula`),
  ADD KEY `id_genero` (`id_genero`);

--
-- Indices de la tabla `sesiones`
--
ALTER TABLE `sesiones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_cine` (`id_cine`),
  ADD KEY `id_pelicula` (`id_pelicula`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `butacas`
--
ALTER TABLE `butacas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=501;

--
-- AUTO_INCREMENT de la tabla `cines`
--
ALTER TABLE `cines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `estrenos`
--
ALTER TABLE `estrenos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `facturas`
--
ALTER TABLE `facturas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `generos`
--
ALTER TABLE `generos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT de la tabla `peliculasgeneros`
--
ALTER TABLE `peliculasgeneros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT de la tabla `sesiones`
--
ALTER TABLE `sesiones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `butacas`
--
ALTER TABLE `butacas`
  ADD CONSTRAINT `butacas_ibfk_1` FOREIGN KEY (`id_cine`) REFERENCES `cines` (`id`);

--
-- Filtros para la tabla `estrenos`
--
ALTER TABLE `estrenos`
  ADD CONSTRAINT `estrenos_ibfk_1` FOREIGN KEY (`id_pelicula`) REFERENCES `peliculas` (`id`);

--
-- Filtros para la tabla `facturas`
--
ALTER TABLE `facturas`
  ADD CONSTRAINT `facturas_ibfk_1` FOREIGN KEY (`id_sesion`) REFERENCES `sesiones` (`id`);

--
-- Filtros para la tabla `peliculasgeneros`
--
ALTER TABLE `peliculasgeneros`
  ADD CONSTRAINT `peliculasgeneros_ibfk_1` FOREIGN KEY (`id_genero`) REFERENCES `generos` (`id`),
  ADD CONSTRAINT `peliculasgeneros_ibfk_2` FOREIGN KEY (`id_pelicula`) REFERENCES `peliculas` (`id`);

--
-- Filtros para la tabla `sesiones`
--
ALTER TABLE `sesiones`
  ADD CONSTRAINT `sesiones_ibfk_1` FOREIGN KEY (`id_pelicula`) REFERENCES `peliculas` (`id`),
  ADD CONSTRAINT `sesiones_ibfk_2` FOREIGN KEY (`id_cine`) REFERENCES `cines` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
