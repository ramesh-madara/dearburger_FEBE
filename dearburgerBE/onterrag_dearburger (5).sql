-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2024 at 11:47 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onterrag_dearburger`
--

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `version` varchar(255) NOT NULL,
  `class` varchar(255) NOT NULL,
  `group` varchar(255) NOT NULL,
  `namespace` varchar(255) NOT NULL,
  `time` int(11) NOT NULL,
  `batch` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `version`, `class`, `group`, `namespace`, `time`, `batch`) VALUES
(1, '2024-04-29-034500', 'App\\Database\\Migrations\\CreateDbRestaurant', 'default', 'App', 1714616668, 1),
(2, '2024-04-29-034540', 'App\\Database\\Migrations\\CreateTblInventory', 'default', 'App', 1714616668, 1),
(3, '2024-04-29-035247', 'App\\Database\\Migrations\\CreateTblExpenses', 'default', 'App', 1714616668, 1),
(4, '2024-04-29-035257', 'App\\Database\\Migrations\\CreateTblCategory', 'default', 'App', 1714616668, 1),
(5, '2024-04-29-035309', 'App\\Database\\Migrations\\CreateTblMenuItems', 'default', 'App', 1714616668, 1),
(6, '2024-04-29-035323', 'App\\Database\\Migrations\\CreateTblItemPrice', 'default', 'App', 1714616668, 1),
(7, '2024-04-29-035336', 'App\\Database\\Migrations\\CreateTblItemPriceOptions', 'default', 'App', 1714616668, 1),
(8, '2024-04-29-035358', 'App\\Database\\Migrations\\CreateTblAddons', 'default', 'App', 1714616668, 1),
(9, '2024-04-29-035406', 'App\\Database\\Migrations\\CreateTblOptions', 'default', 'App', 1714616668, 1),
(10, '2024-04-29-035414', 'App\\Database\\Migrations\\CreateTblIngredients', 'default', 'App', 1714616668, 1),
(11, '2024-04-29-035421', 'App\\Database\\Migrations\\CreateTblIngredientOptions', 'default', 'App', 1714616668, 1),
(12, '2024-04-29-035435', 'App\\Database\\Migrations\\CreateTblOrderType', 'default', 'App', 1714616668, 1),
(13, '2024-04-29-035440', 'App\\Database\\Migrations\\CreateTblOrder', 'default', 'App', 1714616668, 1),
(14, '2024-04-29-035445', 'App\\Database\\Migrations\\CreateTblOrderItems', 'default', 'App', 1714616668, 1),
(15, '2024-04-29-035500', 'App\\Database\\Migrations\\CreateTblPaymentTypes', 'default', 'App', 1714616668, 1),
(16, '2024-04-29-035522', 'App\\Database\\Migrations\\CreateTblMenuItemOptions', 'default', 'App', 1714616668, 1),
(17, '2024-04-29-090624', 'App\\Database\\Migrations\\AlterForeignKey', 'default', 'App', 1714616668, 1),
(18, '2024-05-02-064233', 'App\\Database\\Migrations\\AddUser', 'default', 'App', 1714632183, 2),
(19, '2024-04-31-035247', 'App\\Database\\Migrations\\CreateTblExpenses', 'default', 'App', 1714975501, 3),
(20, '2024-04-31-034540', 'App\\Database\\Migrations\\CreateTblInventory', 'default', 'App', 1714976111, 4),
(21, '2024-05-06-061154', 'App\\Database\\Migrations\\CreateTblInventoryItemCategories', 'default', 'App', 1714976111, 4),
(22, '2024-05-01-034540', 'App\\Database\\Migrations\\CreateTblInventory', 'default', 'App', 1714976256, 5),
(23, '2024-05-07-061154', 'App\\Database\\Migrations\\CreateTblInventoryItemCategories', 'default', 'App', 1714976521, 6),
(24, '2024-05-08-061154', 'App\\Database\\Migrations\\CreateTblInventoryItemCategories', 'default', 'App', 1714976940, 7),
(25, '2024-05-16-035309', 'App\\Database\\Migrations\\CreateTblMenuItems', 'default', 'App', 1715860614, 8),
(26, '2024-05-16-035310', 'App\\Database\\Migrations\\CreateTblMenuItems', 'default', 'App', 1715860772, 9),
(27, '2024-05-16-035311', 'App\\Database\\Migrations\\CreateTblMenuItems', 'default', 'App', 1715860905, 10),
(28, '2024-05-16-035312', 'App\\Database\\Migrations\\CreateTblMenuItems', 'default', 'App', 1715861221, 11),
(29, '2024-05-16-035313', 'App\\Database\\Migrations\\CreateTblMenuItems', 'default', 'App', 1715861373, 12),
(30, '2024-04-29-090625', 'App\\Database\\Migrations\\AlterForeignKey', 'default', 'App', 1715861743, 13),
(31, '2024-04-29-035359', 'App\\Database\\Migrations\\CreateTblAddons', 'default', 'App', 1715862027, 14),
(32, '2024-04-29-035361', 'App\\Database\\Migrations\\CreateTblAddons', 'default', 'App', 1715862240, 15),
(33, '2024-05-16-090626', 'App\\Database\\Migrations\\AlterForeignKey', 'default', 'App', 1715862240, 15),
(34, '2024-05-19-085424', 'App\\Database\\Migrations\\CreateTableOrderTimeline', 'default', 'App', 1716110810, 16),
(35, '2024-05-19-085425', 'App\\Database\\Migrations\\CreateTblOrderTimeline', 'default', 'App', 1716111012, 17),
(36, '2024-05-19-090628', 'App\\Database\\Migrations\\AlterForeignKey', 'default', 'App', 1716111281, 18),
(37, '2024-04-29-035502', 'App\\Database\\Migrations\\CreateTblPaymentTypes', 'default', 'App', 1716276857, 19);

-- --------------------------------------------------------

--
-- Table structure for table `tables`
--

CREATE TABLE `tables` (
  `tableNo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tables`
--

INSERT INTO `tables` (`tableNo`) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10);

-- --------------------------------------------------------

--
-- Table structure for table `tbladdons`
--

CREATE TABLE `tbladdons` (
  `addonID` int(11) NOT NULL,
  `menuItemID_menu` int(5) NOT NULL,
  `menuItemID_addon` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbladdons`
--

INSERT INTO `tbladdons` (`addonID`, `menuItemID_menu`, `menuItemID_addon`) VALUES
(3, 1, 6),
(4, 3, 7),
(5, 4, 7),
(6, 3, 6);

-- --------------------------------------------------------

--
-- Table structure for table `tblcategory`
--

CREATE TABLE `tblcategory` (
  `categoryID` char(5) NOT NULL,
  `categoryName` varchar(100) NOT NULL,
  `categoryStatus` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblcategory`
--

INSERT INTO `tblcategory` (`categoryID`, `categoryName`, `categoryStatus`) VALUES
('1', 'Rice', 1),
('2', 'Kottu', 1),
('3', 'Burger', 1),
('4', 'Beverages', 1),
('5', 'Addon', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tblcustomers`
--

CREATE TABLE `tblcustomers` (
  `customerID` int(11) NOT NULL,
  `customerPhone` varchar(15) DEFAULT NULL,
  `customerName` varchar(250) DEFAULT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblcustomers`
--

INSERT INTO `tblcustomers` (`customerID`, `customerPhone`, `customerName`, `date`) VALUES
(1, '1234567890', 'John Doe', '2024-05-30 00:00:00'),
(2, '2345678901', 'Jane Smith', '2024-05-29 00:00:00'),
(3, '3456789012', 'Alice Johnson', '2024-05-28 00:00:00'),
(4, '4567890123', 'Bob Brown', '2024-05-27 00:00:00'),
(5, '5678901234', 'Eve Wilson', '2024-05-26 00:00:00'),
(6, '6789012345', 'Charlie Davis', '2024-05-25 00:00:00'),
(7, '7890123456', 'Grace Lee', '2024-05-24 00:00:00'),
(8, '8901234567', 'Samuel Clark', '2024-05-23 00:00:00'),
(9, '9012345678', 'Sophia Rodriguez', '2024-05-22 00:00:00'),
(10, '0123456789', 'Liam Martinez', '2024-05-21 00:00:00'),
(11, '1234567890', 'Emma Hernandez', '2024-05-20 00:00:00'),
(12, '2345678901', 'Oliver Moore', '2024-05-19 00:00:00'),
(13, '3456789012', 'Ava Green', '2024-05-18 00:00:00'),
(14, '4567890123', 'Noah Adams', '2024-05-17 00:00:00'),
(15, '5678901234', 'Isabella Baker', '2024-05-16 00:00:00'),
(16, '6789012345', 'Mia Garcia', '2024-05-15 00:00:00'),
(17, '7890123456', 'James Wilson', '2024-05-14 00:00:00'),
(18, '8901234567', 'Benjamin Thomas', '2024-05-13 00:00:00'),
(19, '9012345678', 'William Anderson', '2024-05-12 00:00:00'),
(20, '0123456789', 'Charlotte Martinez', '2024-05-11 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tblexpenses`
--

CREATE TABLE `tblexpenses` (
  `entryID` int(11) NOT NULL,
  `inventoryItemID` char(5) NOT NULL,
  `qty` int(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `description` text NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblexpenses`
--

INSERT INTO `tblexpenses` (`entryID`, `inventoryItemID`, `qty`, `price`, `description`, `date`) VALUES
(1, '1', 10, 800.00, '', '2024-05-03'),
(2, '2', 12, 960.00, '', '2024-05-17'),
(3, '4', 200, 8000.00, '', '2024-05-17'),
(4, '1', 12, 2500.00, '', '2024-04-18'),
(5, '4', 150, 6000.00, '', '2024-04-18'),
(6, '3', 2, 1000.00, '', '2024-03-07'),
(7, '4', 200, 8600.00, '', '2024-03-07'),
(8, '4', 200, 6500.00, '', '2024-02-08'),
(9, '1', 2, 588.00, '', '2024-01-24'),
(10, '2', 2, 500.00, '', '2024-01-24'),
(11, '4', 145, 5680.00, '', '2024-01-24'),
(12, '1', 10, 10000.00, '', '2024-02-02'),
(13, '1', 5, 5000.00, '', '2024-05-10'),
(14, '2', 10, 10000.00, 'Thighs', '2024-05-13'),
(15, '1', 1, 1.00, '', '2024-05-13'),
(16, '1', 2, 20.00, '', '2024-05-04'),
(17, '1', 1, 50.00, '', '2024-05-04'),
(18, '2', 5, 50.00, '', '2024-05-04'),
(19, '1', 2, 50.00, '', '2024-05-04'),
(20, '2', 5, 50.00, '', '2024-05-04'),
(21, '1', 5, 50.00, '', '2024-05-04'),
(22, '3', 50, 2500.00, '', '2024-04-18'),
(23, '1', 5, 5000.00, '', '2024-05-01'),
(24, '6', 2, 5600.00, '', '2024-01-11'),
(25, '1', 1, 1000.00, '', '2024-01-12'),
(26, '1', 1, 1000.00, '', '2024-05-03'),
(27, '1', 1, 1000.00, '', '2024-05-02'),
(28, '1', 1, 2000.00, '', '2024-04-12'),
(29, '1', 1, 500.00, '', '2024-04-18'),
(30, '1', 5, 5000.00, '', '2024-05-16'),
(31, '3', 200, 500.00, '', '2024-05-16'),
(32, '4', 1, 200.00, '', '2024-05-17'),
(33, '1', 10, 5000.00, '', '2024-03-10'),
(34, '1', 10, 5000.00, '', '2024-03-07'),
(35, '1', 1, 5000.00, '', '2024-04-12'),
(36, '2', 10, 5000.00, '', '2024-01-04'),
(37, '4', 2, 400.00, 'LETTUCE', '2024-05-10'),
(38, '2', 10, 10000.00, '', '2024-02-07'),
(39, '3', 50, 2500.00, '', '2024-04-18'),
(40, '3', 50, 5000.00, '', '2024-03-07'),
(41, '1', 1, 100.00, '', '2024-05-03'),
(42, '1', 1, 10.00, '', '2024-05-11'),
(43, '1', 1, 10.00, '', '2024-05-03'),
(44, '1', 1, 10.00, '', '2024-05-03'),
(45, '1', 1, 10.00, '', '2024-05-14'),
(46, '1', 1, 10.00, '', '2024-05-03'),
(47, '1', 1, 10.00, '', '2024-05-11'),
(48, '1', 1, 10.00, '', '2024-05-04'),
(49, '1', 1, 10.00, '', '2024-05-02'),
(52, '3', 3, 132.00, '', '2024-01-11'),
(54, '3', 10, 500.00, '', '2024-01-05'),
(55, '12', 2, 5000.00, '', '2024-02-07'),
(56, '4', 3, 1500.00, '', '2024-02-01'),
(57, '9', 2, 1000.00, '', '2024-02-01'),
(58, '10', 5, 5000.00, '', '2024-02-01'),
(59, '12', 2, 2000.00, '', '2024-02-01'),
(60, '12', 1, 1000.00, '', '2024-02-01'),
(61, '12', 1, 100.00, '', '2024-02-01'),
(62, '1', 5, 5000.00, '', '2024-02-01'),
(63, '1', 1, 10.00, '', '2024-05-03'),
(64, '1', 1, 10.00, '', '2024-05-04'),
(65, '1', 1, 10.00, '', '2024-05-03'),
(66, '1', 1, 10.00, '', '2024-05-11'),
(67, '1', 1, 1.00, '', '2024-05-04'),
(68, '1', 1, 10.00, '', '2024-05-04'),
(69, '1', 1, 10.00, '', '2024-05-03'),
(70, '1', 1, 10.00, '', '2024-05-02'),
(71, '4', 2, 500.00, '', '2024-05-01'),
(72, '9', 2, 1000.00, '', '2024-05-01'),
(73, '10', 2, 2000.00, '', '2024-05-01'),
(74, '2', 5, 5000.00, '', '2024-05-01'),
(75, '12', 5, 500.00, '', '2024-05-01'),
(76, '1', 1, 1.00, '', '2024-05-09'),
(77, '1', 1, 10.00, '', '2024-05-03'),
(78, '10', 1, 10.00, '', '2024-05-10'),
(79, '10', 1, 10.00, '', '2024-05-14'),
(80, '6', 10, 10.00, '', '2024-05-04'),
(81, '2', 50, 10.00, '', '2024-05-01');

-- --------------------------------------------------------

--
-- Table structure for table `tblingredientoptions`
--

CREATE TABLE `tblingredientoptions` (
  `ingredientsOptionID` char(5) NOT NULL,
  `ingredientsID` int(11) NOT NULL,
  `variation` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tblingredients`
--

CREATE TABLE `tblingredients` (
  `ingredientsID` int(11) NOT NULL,
  `menuItemID` char(5) NOT NULL,
  `inventoryItemID` char(5) NOT NULL,
  `qty` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblingredients`
--

INSERT INTO `tblingredients` (`ingredientsID`, `menuItemID`, `inventoryItemID`, `qty`) VALUES
(1, '1', '1', 0.25),
(2, '1', '3', 1),
(3, '1', '9', 0.01),
(4, '2', '4', 0.01),
(5, '2', '10', 0.02),
(6, '2', '3', 1),
(7, '2', '2', 0.5);

-- --------------------------------------------------------

--
-- Table structure for table `tblinventory`
--

CREATE TABLE `tblinventory` (
  `inventoryItemID` int(5) NOT NULL,
  `itemName` varchar(100) NOT NULL,
  `inventoryItemCategoryId` varchar(50) NOT NULL,
  `qty` decimal(11,3) DEFAULT NULL,
  `sku` varchar(11) DEFAULT NULL,
  `repurchaseQty` decimal(11,3) NOT NULL,
  `repurchasestatus` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblinventory`
--

INSERT INTO `tblinventory` (`inventoryItemID`, `itemName`, `inventoryItemCategoryId`, `qty`, `sku`, `repurchaseQty`, `repurchasestatus`) VALUES
(1, 'Beef', '1', 46.250, 'Kg', 5.000, NULL),
(2, 'Chicken', '1', -42.500, 'Kg', 5.000, 'REPURCHASE'),
(3, 'Eggs', '1', -181.000, 'Units', 5.000, 'REPURCHASE'),
(4, 'Lettuce', '1', 3.020, 'Kg', 5.000, 'REPURCHASE'),
(5, 'Tuna', '1', 10.000, 'Kg', 5.000, NULL),
(6, 'Gas', '2', 11.000, 'Units', 5.000, 'REPURCHASE'),
(8, 'Other', '3', 0.000, 'NA', 5.000, NULL),
(9, 'Coconut Oil', '1', 6.730, 'L', 5.000, NULL),
(10, 'Cheese', '1', 1.040, 'Kg', 5.000, 'REPURCHASE'),
(11, 'Olive Oil', '1', 20.000, 'L', 5.000, NULL),
(12, 'Almonds', '1', 9.000, 'Kg', 5.000, NULL),
(13, 'Peanuts', '1', 2.000, 'Kg', 5.000, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tblinventoryitemcategories`
--

CREATE TABLE `tblinventoryitemcategories` (
  `inventoryItemCategoryId` int(11) NOT NULL,
  `inventoryItemCategoryName` char(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblinventoryitemcategories`
--

INSERT INTO `tblinventoryitemcategories` (`inventoryItemCategoryId`, `inventoryItemCategoryName`) VALUES
(1, 'food-ingredient'),
(2, 'maintenance'),
(3, 'other');

-- --------------------------------------------------------

--
-- Table structure for table `tblitemprice`
--

CREATE TABLE `tblitemprice` (
  `itemPriceID` char(5) NOT NULL,
  `menuItemID` char(5) NOT NULL,
  `itemPriceOptionsID` char(5) NOT NULL,
  `itemPrice` decimal(10,2) NOT NULL,
  `itemPriceStartDate` date NOT NULL,
  `itemPriceEndDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblitemprice`
--

INSERT INTO `tblitemprice` (`itemPriceID`, `menuItemID`, `itemPriceOptionsID`, `itemPrice`, `itemPriceStartDate`, `itemPriceEndDate`) VALUES
('1', '1', '1', 900.00, '2024-05-01', '2024-05-09');

-- --------------------------------------------------------

--
-- Table structure for table `tblitempriceoptions`
--

CREATE TABLE `tblitempriceoptions` (
  `itemPriceOptionsID` char(5) NOT NULL,
  `itemPriceID` char(5) NOT NULL,
  `PriceVariation` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblitempriceoptions`
--

INSERT INTO `tblitempriceoptions` (`itemPriceOptionsID`, `itemPriceID`, `PriceVariation`) VALUES
('1', '1', 500.00),
('2', '1', 700.00);

-- --------------------------------------------------------

--
-- Table structure for table `tblkot`
--

CREATE TABLE `tblkot` (
  `kotID` int(11) NOT NULL,
  `orderID` int(11) NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'not-issued'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblkot`
--

INSERT INTO `tblkot` (`kotID`, `orderID`, `status`) VALUES
(1, 34, 'not-issued'),
(2, 34, 'not-issued'),
(3, 34, 'not-issued'),
(4, 34, 'not-issued'),
(5, 34, 'not-issued'),
(6, 34, 'not-issued'),
(7, 34, 'not-issued'),
(8, 34, 'not-issued'),
(9, 34, 'not-issued'),
(10, 34, 'not-issued'),
(11, 34, 'not-issued'),
(12, 34, 'not-issued'),
(13, 34, 'not-issued'),
(14, 34, 'not-issued'),
(15, 34, 'not-issued'),
(16, 34, 'not-issued'),
(17, 34, 'not-issued'),
(18, 34, 'not-issued'),
(19, 34, 'not-issued'),
(20, 34, 'not-issued'),
(21, 34, 'not-issued'),
(22, 34, 'not-issued'),
(23, 34, 'not-issued'),
(24, 34, 'not-issued'),
(25, 34, 'not-issued'),
(26, 34, 'not-issued'),
(27, 34, 'not-issued'),
(28, 34, 'not-issued'),
(29, 34, 'not-issued'),
(30, 34, 'not-issued'),
(31, 34, 'not-issued'),
(32, 3331, 'not-issued'),
(33, 3332, 'not-issued'),
(34, 3333, 'not-issued'),
(35, 3334, 'not-issued'),
(36, 3335, 'not-issued'),
(37, 3336, 'not-issued'),
(38, 3337, 'not-issued'),
(39, 3338, 'not-issued'),
(40, 3339, 'not-issued'),
(41, 3340, 'not-issued'),
(42, 3341, 'not-issued'),
(43, 3342, 'not-issued');

-- --------------------------------------------------------

--
-- Table structure for table `tblkotitmes`
--

CREATE TABLE `tblkotitmes` (
  `id` int(11) NOT NULL,
  `kotID` int(11) NOT NULL,
  `tblorderitemsID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblkotitmes`
--

INSERT INTO `tblkotitmes` (`id`, `kotID`, `tblorderitemsID`) VALUES
(1, 30, 132),
(2, 30, 133),
(3, 31, 134),
(4, 31, 135),
(5, 32, 173),
(6, 33, 174),
(7, 34, 175),
(8, 35, 176),
(9, 36, 177),
(10, 37, 178),
(11, 38, 179),
(12, 39, 180),
(13, 40, 181),
(14, 41, 182),
(15, 42, 183),
(16, 43, 184),
(17, 43, 185);

-- --------------------------------------------------------

--
-- Table structure for table `tblmenuitemoptions`
--

CREATE TABLE `tblmenuitemoptions` (
  `menuItemOptionID` char(5) NOT NULL,
  `menuItemOptionName` varchar(50) NOT NULL,
  `menuItemOptionFeatured` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblmenuitemoptions`
--

INSERT INTO `tblmenuitemoptions` (`menuItemOptionID`, `menuItemOptionName`, `menuItemOptionFeatured`) VALUES
('', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tblmenuitems`
--

CREATE TABLE `tblmenuitems` (
  `categoryID` char(5) NOT NULL,
  `menuItemID` int(5) NOT NULL,
  `menuItemType` varchar(10) NOT NULL,
  `menuItemName` varchar(100) NOT NULL,
  `menuItemDescription` varchar(200) NOT NULL,
  `featured` tinyint(1) NOT NULL DEFAULT 0,
  `itemPriceID` char(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblmenuitems`
--

INSERT INTO `tblmenuitems` (`categoryID`, `menuItemID`, `menuItemType`, `menuItemName`, `menuItemDescription`, `featured`, `itemPriceID`) VALUES
('1', 1, 'menuItem', 'Crispy Chicken Rice', '', 0, '1'),
('1', 2, 'menuItem', 'Vegetable Rice', '', 0, '1'),
('2', 3, 'menuItem', 'Cheese Kottu', '', 0, '1'),
('3', 4, 'menuItem', 'Cheese Burger', '', 0, '1'),
('4', 5, 'menuItem', 'Mango Milkshake', '', 0, '1'),
('5', 6, 'menuItem', 'ADDON-Double Chicken', 'Double Chicken Addon', 1, '1'),
('5', 7, 'addon', 'ADDON-Extra Cheese', 'Extra Cheese Addon', 1, '1');

-- --------------------------------------------------------

--
-- Table structure for table `tblorder`
--

CREATE TABLE `tblorder` (
  `orderID` int(11) NOT NULL,
  `orderStatus` varchar(20) NOT NULL,
  `orderDatetime` datetime NOT NULL,
  `tableNo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblorder`
--

INSERT INTO `tblorder` (`orderID`, `orderStatus`, `orderDatetime`, `tableNo`) VALUES
(34, 'hold', '0000-00-00 00:00:00', NULL),
(3292, 'hold', '2024-05-20 11:38:23', NULL),
(3293, 'hold', '2024-05-20 11:38:35', NULL),
(3294, 'success', '2024-05-27 14:30:00', NULL),
(3295, 'success', '2024-05-27 14:30:00', NULL),
(3296, 'success', '2024-05-27 14:30:00', NULL),
(3297, 'success', '2024-05-27 14:30:00', NULL),
(3298, 'success', '2024-05-27 14:30:00', NULL),
(3299, 'success', '2024-05-27 14:30:00', NULL),
(3300, 'success', '2024-05-27 14:30:00', NULL),
(3301, 'success', '2024-05-27 14:30:00', NULL),
(3302, 'success', '2024-05-27 14:30:00', NULL),
(3303, 'success', '2024-05-27 14:30:00', NULL),
(3304, 'success', '2024-05-27 14:30:00', NULL),
(3305, 'success', '2024-05-27 14:30:00', NULL),
(3306, 'success', '2024-05-27 14:30:00', NULL),
(3307, 'success', '2024-05-27 14:30:00', NULL),
(3308, 'success', '2024-05-27 14:30:00', NULL),
(3309, 'success', '2024-05-27 14:30:00', NULL),
(3310, 'success', '2024-05-27 14:30:00', NULL),
(3311, 'success', '2024-05-27 14:30:00', NULL),
(3312, 'success', '2024-05-27 14:30:00', NULL),
(3313, 'success', '2024-05-27 14:30:00', NULL),
(3314, 'success', '2024-05-27 14:30:00', NULL),
(3315, 'success', '2024-05-27 14:30:00', NULL),
(3316, 'success', '2024-05-27 14:30:00', NULL),
(3317, 'success', '2024-05-27 14:30:00', NULL),
(3318, 'success', '2024-05-27 14:30:00', NULL),
(3319, 'success', '2024-05-27 14:30:00', NULL),
(3320, 'success', '2024-05-27 14:30:00', NULL),
(3321, 'success', '2024-05-27 14:30:00', NULL),
(3322, 'success', '2024-05-27 14:30:00', NULL),
(3323, 'success', '2024-05-27 14:30:00', NULL),
(3324, 'success', '2024-05-27 14:30:00', NULL),
(3325, 'success', '2024-05-27 14:30:00', NULL),
(3326, 'success', '2024-05-27 14:30:00', NULL),
(3327, 'success', '2024-05-27 14:30:00', NULL),
(3328, 'success', '2024-05-27 14:30:00', NULL),
(3329, 'success', '2024-05-27 14:30:00', 10),
(3330, 'success', '2024-05-27 14:30:00', 10),
(3331, 'success', '2024-05-27 14:30:00', 10),
(3332, 'success', '2024-05-27 14:30:00', 10),
(3333, 'success', '2024-05-27 14:30:00', 10),
(3334, 'success', '2024-05-27 14:30:00', 10),
(3335, 'success', '2024-05-27 14:30:00', 10),
(3336, 'success', '2024-05-27 14:30:00', 10),
(3337, 'success', '2024-05-27 14:30:00', 10),
(3338, 'success', '2024-05-27 14:30:00', 10),
(3339, 'success', '2024-05-27 14:30:00', 10),
(3340, 'success', '2024-05-27 14:30:00', 10),
(3341, 'success', '2024-05-27 14:30:00', 10),
(3342, 'success', '2024-05-27 14:30:00', 10);

-- --------------------------------------------------------

--
-- Table structure for table `tblorderitems`
--

CREATE TABLE `tblorderitems` (
  `id` int(11) NOT NULL,
  `orderID` int(11) NOT NULL,
  `menuItemID` char(5) NOT NULL,
  `orderTypeID` char(5) NOT NULL,
  `orderQty` int(11) NOT NULL,
  `itemPriceID` char(5) NOT NULL,
  `paymentTypeID` char(5) NOT NULL,
  `optionID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblorderitems`
--

INSERT INTO `tblorderitems` (`id`, `orderID`, `menuItemID`, `orderTypeID`, `orderQty`, `itemPriceID`, `paymentTypeID`, `optionID`) VALUES
(34, 40, '1', '3', 2, '1', '1', 1),
(47, 3292, '2', 'dinei', 1, '8.99', '', 0),
(48, 3292, '5', 'dinei', 1, '10.99', '', 0),
(49, 3293, '5', 'dinei', 1, '10.99', '', 0),
(50, 3293, '2', 'dinei', 1, '8.99', '', 0),
(51, 34, '2', 'Dine-', 1, '8.99', '', 0),
(52, 34, '2', 'Dine-', 1, '8.99', '', 0),
(53, 34, '2', 'Dine-', 1, '8.99', '', 0),
(54, 34, '4', 'Dine-', 1, '8.99', '', 0),
(55, 34, '2', 'Dine-', 1, '8.99', '', 0),
(56, 34, '4', 'Dine-', 1, '8.99', '', 0),
(57, 34, '2', 'Dine-', 1, '8.99', '', 0),
(58, 34, '4', 'Dine-', 1, '8.99', '', 0),
(59, 34, '2', 'Dine-', 1, '8.99', '', 0),
(60, 34, '4', 'Dine-', 1, '8.99', '', 0),
(61, 34, '2', 'Dine-', 1, '8.99', '', 0),
(62, 34, '4', 'Dine-', 1, '8.99', '', 0),
(63, 34, '2', 'Dine-', 1, '8.99', '', 0),
(64, 34, '4', 'Dine-', 1, '8.99', '', 0),
(65, 34, '2', 'Dine-', 1, '8.99', '', 0),
(66, 34, '4', 'Dine-', 1, '8.99', '', 0),
(67, 34, '2', 'Dine-', 1, '8.99', '', 0),
(68, 34, '4', 'Dine-', 1, '8.99', '', 0),
(69, 34, '2', 'Dine-', 1, '8.99', '', 0),
(70, 34, '4', 'Dine-', 1, '8.99', '', 0),
(71, 34, '2', 'Dine-', 1, '8.99', '', 0),
(72, 34, '4', 'Dine-', 1, '8.99', '', 0),
(73, 34, '2', 'Dine-', 1, '8.99', '', 0),
(74, 34, '4', 'Dine-', 1, '8.99', '', 0),
(75, 34, '2', 'Dine-', 1, '8.99', '', 0),
(76, 34, '4', 'Dine-', 1, '8.99', '', 0),
(77, 34, '2', 'Dine-', 1, '8.99', '', 0),
(78, 34, '4', 'Dine-', 1, '8.99', '', 0),
(79, 34, '2', 'Dine-', 1, '8.99', '', 0),
(80, 34, '4', 'Dine-', 1, '8.99', '', 0),
(81, 34, '2', 'Dine-', 1, '8.99', '', 0),
(82, 34, '4', 'Dine-', 1, '8.99', '', 0),
(83, 34, '2', 'Dine-', 1, '8.99', '', 0),
(84, 34, '4', 'Dine-', 1, '8.99', '', 0),
(85, 34, '2', 'Dine-', 1, '8.99', '', 0),
(86, 34, '4', 'Dine-', 1, '8.99', '', 0),
(87, 34, '2', 'Dine-', 1, '8.99', '', 0),
(88, 34, '4', 'Dine-', 1, '8.99', '', 0),
(89, 34, '2', 'Dine-', 1, '8.99', '', 0),
(90, 34, '4', 'Dine-', 1, '8.99', '', 0),
(91, 34, '2', 'Dine-', 1, '8.99', '', 0),
(92, 34, '4', 'Dine-', 1, '8.99', '', 0),
(93, 34, '2', 'Dine-', 1, '8.99', '', 0),
(94, 34, '4', 'Dine-', 1, '8.99', '', 0),
(95, 34, '2', 'Dine-', 1, '8.99', '', 0),
(96, 34, '4', 'Dine-', 1, '8.99', '', 0),
(97, 34, '2', 'Dine-', 1, '8.99', '', 0),
(98, 34, '4', 'Dine-', 1, '8.99', '', 0),
(99, 34, '2', 'Dine-', 1, '8.99', '', 0),
(100, 34, '4', 'Dine-', 1, '8.99', '', 0),
(101, 34, '2', 'Dine-', 1, '8.99', '', 0),
(102, 34, '4', 'Dine-', 1, '8.99', '', 0),
(103, 34, '2', 'Dine-', 1, '8.99', '', 0),
(104, 34, '4', 'Dine-', 1, '8.99', '', 0),
(105, 34, '2', 'Dine-', 1, '8.99', '', 0),
(106, 34, '4', 'Dine-', 1, '8.99', '', 0),
(107, 34, '2', 'Dine-', 1, '8.99', '', 0),
(108, 34, '4', 'Dine-', 1, '8.99', '', 0),
(109, 34, '2', 'Dine-', 1, '8.99', '', 0),
(110, 34, '4', 'Dine-', 1, '8.99', '', 0),
(111, 34, '2', 'Dine-', 1, '8.99', '', 0),
(112, 34, '4', 'Dine-', 1, '8.99', '', 0),
(113, 34, '2', 'Dine-', 1, '8.99', '', 0),
(114, 34, '4', 'Dine-', 1, '8.99', '', 0),
(115, 34, '2', 'Dine-', 1, '8.99', '', 0),
(116, 34, '4', 'Dine-', 1, '8.99', '', 0),
(117, 34, '2', 'Dine-', 1, '8.99', '', 0),
(118, 34, '4', 'Dine-', 1, '8.99', '', 0),
(119, 34, '2', 'Dine-', 1, '8.99', '', 0),
(120, 34, '4', 'Dine-', 1, '8.99', '', 0),
(121, 34, '2', 'Dine-', 1, '8.99', '', 0),
(122, 34, '4', 'Dine-', 1, '8.99', '', 0),
(123, 34, '2', 'Dine-', 1, '8.99', '', 0),
(124, 34, '4', 'Dine-', 1, '8.99', '', 0),
(125, 34, '2', 'Dine-', 1, '8.99', '', 0),
(126, 34, '4', 'Dine-', 1, '8.99', '', 0),
(127, 34, '2', 'Dine-', 1, '8.99', '', 0),
(128, 34, '4', 'Dine-', 1, '8.99', '', 0),
(129, 34, '2', 'Dine-', 1, '8.99', '', 0),
(130, 34, '2', 'Dine-', 1, '8.99', '', 0),
(131, 34, '4', 'Dine-', 1, '8.99', '', 0),
(132, 34, '2', 'Dine-', 1, '8.99', '', 0),
(133, 34, '4', 'Dine-', 1, '8.99', '', 0),
(134, 34, '2', 'Dine-', 1, '8.99', '', 0),
(135, 34, '4', 'Dine-', 1, '8.99', '', 0),
(136, 3294, '1', '3', 2, '500', '5', 1),
(137, 3295, '1', '3', 2, '500', '5', 1),
(138, 3296, '1', '3', 2, '500', '5', 1),
(139, 3297, '1', '3', 2, '500', '5', 1),
(140, 3298, '1', '3', 2, '500', '5', 1),
(141, 3299, '1', '3', 2, '500', '5', 1),
(142, 3300, '1', '3', 2, '500', '5', 1),
(143, 3301, '1', '3', 3, '500', '5', 1),
(144, 3302, '2', '3', 3, '500', '5', 1),
(145, 3303, '2', '3', 30, '500', '5', 1),
(146, 3304, '2', '3', 30, '500', '5', 1),
(147, 3305, '2', '3', 30, '500', '5', 1),
(148, 3306, '2', '3', 30, '500', '5', 1),
(149, 3307, '2', '3', 30, '500', '5', 1),
(150, 3308, '2', '3', 30, '500', '5', 1),
(151, 3309, '2', '3', 4, '500', '5', 1),
(152, 3310, '2', '3', 4, '500', '5', 1),
(153, 3311, '2', '3', 2, '500', '5', 1),
(154, 3312, '1', '3', 2, '500', '5', 1),
(155, 3313, '1', '3', 1, '500', '5', 1),
(156, 3314, '1', '3', 1, '500', '5', 1),
(157, 3315, '1', '3', 5, '500', '5', 1),
(158, 3316, '1', '3', 5, '500', '5', 1),
(159, 3317, '1', '3', 5, '500', '5', 1),
(160, 3318, '1', '3', 5, '500', '5', 1),
(161, 3319, '2', '3', 5, '500', '5', 1),
(162, 3320, '2', '3', 10, '500', '5', 1),
(163, 3321, '2', '3', 10, '500', '5', 1),
(164, 3322, '2', '3', 10, '500', '5', 1),
(165, 3323, '2', '3', 10, '500', '5', 1),
(166, 3324, '2', '3', 10, '500', '5', 1),
(167, 3325, '2', '3', 10, '500', '5', 1),
(168, 3326, '2', '3', 10, '500', '5', 1),
(169, 3327, '2', '3', 10, '500', '5', 1),
(170, 3328, '2', '3', 10, '500', '5', 1),
(171, 3329, '2', '3', 10, '500', '5', 1),
(172, 3330, '2', '3', 10, '500', '5', 1),
(173, 3331, '2', '3', 10, '500', '5', 1),
(174, 3332, '2', '3', 10, '500', '5', 1),
(175, 3333, '2', '3', 10, '500', '5', 1),
(176, 3334, '2', '3', 10, '500', '5', 1),
(177, 3335, '2', '3', 10, '500', '5', 1),
(178, 3336, '2', '3', 10, '500', '5', 1),
(179, 3337, '2', '3', 10, '500', '5', 1),
(180, 3338, '2', '3', 10, '500', '5', 1),
(181, 3339, '2', '3', 10, '500', '5', 1),
(182, 3340, '2', '3', 10, '500', '5', 1),
(183, 3341, '2', '3', 10, '500', '5', 1),
(184, 3342, '2', '3', 10, '500', '5', 1),
(185, 3342, '3', '3', 10, '500', '5', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tblordertimeline`
--

CREATE TABLE `tblordertimeline` (
  `id` int(5) NOT NULL,
  `orderID` int(10) NOT NULL,
  `menuItemID` int(100) NOT NULL,
  `action` varchar(10) NOT NULL,
  `kot_issued` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tblpaymenttypes`
--

CREATE TABLE `tblpaymenttypes` (
  `paymentTypeID` int(5) NOT NULL,
  `paymentTypeName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblpaymenttypes`
--

INSERT INTO `tblpaymenttypes` (`paymentTypeID`, `paymentTypeName`) VALUES
(1, 'Cash'),
(2, 'Card'),
(3, 'Bank Transfer');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'test@test.com', '$2y$10$/OUKoXUhHTYf7BI1MP7w3OaxnHQZjqM3maCVIDBKsXVMxdK8pzWxS', '2024-05-02 01:32:51', '2024-05-02 01:32:51'),
(2, 'a@a.com', '$2y$10$cuNSGHIOInFHKspNLwF8qeyPeuMPR9ggL6o7EXzr.sgPsKPbUFKDy', '2024-05-08 01:01:51', '2024-05-08 01:01:51');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tables`
--
ALTER TABLE `tables`
  ADD PRIMARY KEY (`tableNo`);

--
-- Indexes for table `tbladdons`
--
ALTER TABLE `tbladdons`
  ADD PRIMARY KEY (`addonID`),
  ADD KEY `tblAdn_tblMnu` (`menuItemID_menu`),
  ADD KEY `tblAdn_tblMnu2` (`menuItemID_addon`);

--
-- Indexes for table `tblcategory`
--
ALTER TABLE `tblcategory`
  ADD PRIMARY KEY (`categoryID`);

--
-- Indexes for table `tblcustomers`
--
ALTER TABLE `tblcustomers`
  ADD PRIMARY KEY (`customerID`);

--
-- Indexes for table `tblexpenses`
--
ALTER TABLE `tblexpenses`
  ADD PRIMARY KEY (`entryID`);

--
-- Indexes for table `tblingredientoptions`
--
ALTER TABLE `tblingredientoptions`
  ADD PRIMARY KEY (`ingredientsOptionID`);

--
-- Indexes for table `tblingredients`
--
ALTER TABLE `tblingredients`
  ADD PRIMARY KEY (`ingredientsID`);

--
-- Indexes for table `tblinventory`
--
ALTER TABLE `tblinventory`
  ADD PRIMARY KEY (`inventoryItemID`);

--
-- Indexes for table `tblinventoryitemcategories`
--
ALTER TABLE `tblinventoryitemcategories`
  ADD PRIMARY KEY (`inventoryItemCategoryId`);

--
-- Indexes for table `tblitemprice`
--
ALTER TABLE `tblitemprice`
  ADD PRIMARY KEY (`itemPriceID`);

--
-- Indexes for table `tblitempriceoptions`
--
ALTER TABLE `tblitempriceoptions`
  ADD PRIMARY KEY (`itemPriceOptionsID`);

--
-- Indexes for table `tblkot`
--
ALTER TABLE `tblkot`
  ADD PRIMARY KEY (`kotID`);

--
-- Indexes for table `tblkotitmes`
--
ALTER TABLE `tblkotitmes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblmenuitemoptions`
--
ALTER TABLE `tblmenuitemoptions`
  ADD PRIMARY KEY (`menuItemOptionID`);

--
-- Indexes for table `tblmenuitems`
--
ALTER TABLE `tblmenuitems`
  ADD PRIMARY KEY (`menuItemID`);

--
-- Indexes for table `tblorder`
--
ALTER TABLE `tblorder`
  ADD PRIMARY KEY (`orderID`);

--
-- Indexes for table `tblorderitems`
--
ALTER TABLE `tblorderitems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblordertimeline`
--
ALTER TABLE `tblordertimeline`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tblAdn_menuItemID` (`menuItemID`),
  ADD KEY `tblAdn_orderId` (`orderID`);

--
-- Indexes for table `tblpaymenttypes`
--
ALTER TABLE `tblpaymenttypes`
  ADD PRIMARY KEY (`paymentTypeID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `tables`
--
ALTER TABLE `tables`
  MODIFY `tableNo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbladdons`
--
ALTER TABLE `tbladdons`
  MODIFY `addonID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tblexpenses`
--
ALTER TABLE `tblexpenses`
  MODIFY `entryID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `tblingredients`
--
ALTER TABLE `tblingredients`
  MODIFY `ingredientsID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tblinventory`
--
ALTER TABLE `tblinventory`
  MODIFY `inventoryItemID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tblinventoryitemcategories`
--
ALTER TABLE `tblinventoryitemcategories`
  MODIFY `inventoryItemCategoryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tblkot`
--
ALTER TABLE `tblkot`
  MODIFY `kotID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `tblkotitmes`
--
ALTER TABLE `tblkotitmes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `tblmenuitems`
--
ALTER TABLE `tblmenuitems`
  MODIFY `menuItemID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tblorder`
--
ALTER TABLE `tblorder`
  MODIFY `orderID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3343;

--
-- AUTO_INCREMENT for table `tblorderitems`
--
ALTER TABLE `tblorderitems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=186;

--
-- AUTO_INCREMENT for table `tblordertimeline`
--
ALTER TABLE `tblordertimeline`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tblpaymenttypes`
--
ALTER TABLE `tblpaymenttypes`
  MODIFY `paymentTypeID` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbladdons`
--
ALTER TABLE `tbladdons`
  ADD CONSTRAINT `tblAdn_tblMnu` FOREIGN KEY (`menuItemID_menu`) REFERENCES `tblmenuitems` (`menuItemID`),
  ADD CONSTRAINT `tblAdn_tblMnu2` FOREIGN KEY (`menuItemID_addon`) REFERENCES `tblmenuitems` (`menuItemID`);

--
-- Constraints for table `tblordertimeline`
--
ALTER TABLE `tblordertimeline`
  ADD CONSTRAINT `tblAdn_menuItemID` FOREIGN KEY (`menuItemID`) REFERENCES `tblmenuitems` (`menuItemID`),
  ADD CONSTRAINT `tblAdn_orderId` FOREIGN KEY (`orderID`) REFERENCES `tblorder` (`orderID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
