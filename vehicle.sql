-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 30, 2023 at 06:08 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vehicle`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_vehicles`
--

CREATE TABLE `tbl_vehicles` (
  `id` varchar(5) NOT NULL,
  `vehicle_type_id` varchar(5) DEFAULT NULL,
  `model_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_vehicles`
--

INSERT INTO `tbl_vehicles` (`id`, `vehicle_type_id`, `model_name`) VALUES
('v1', 't1', 'Tata Tiago'),
('v10', 't3', 'Maruti Suzuki'),
('v11', 't3', 'Hyundai Aura'),
('v12', 't4', 'BMW R 18'),
('v13', 't4', 'Royal Enfield'),
('v14', 't5', 'Audi R8'),
('v15', 't5', 'TVS Apache'),
('v16', 't5', 'Bajaj Pulsar'),
('v2', 't1', 'Hyundai i20'),
('v3', 't1', 'Maruti Alto'),
('v4', 't1', 'Suzuki Celerio'),
('v5', 't1', 'Toyota Glanza'),
('v6', 't2', 'Toyota Fortuner'),
('v7', 't2', 'Mahindra Thar'),
('v8', 't2', 'Tata Nexon'),
('v9', 't3', 'Suzuki Ciaz');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_vehicle_booking`
--

CREATE TABLE `tbl_vehicle_booking` (
  `First_Name` varchar(30) DEFAULT NULL,
  `Last_Name` varchar(30) DEFAULT NULL,
  `id` varchar(5) DEFAULT NULL,
  `Start_Date` date DEFAULT NULL,
  `End_Date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_vehicle_booking`
--

INSERT INTO `tbl_vehicle_booking` (`First_Name`, `Last_Name`, `id`, `Start_Date`, `End_Date`) VALUES
('Pratibha', 'Sharma', 'v1', '2023-11-29', '2023-11-30'),
('Nidhi', 'Sahu', 'v2', '2023-11-29', '2023-11-30'),
('Pratibha', 'Sharma', 'v3', '2023-11-28', '2023-11-29'),
('Pratibha', 'Sharma', 'v5', '2023-11-28', '2023-11-29'),
('Anjali', 'Sharma', 'v6', '2023-11-28', '2023-11-29');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_vehicle_category`
--

CREATE TABLE `tbl_vehicle_category` (
  `category_id` varchar(5) NOT NULL,
  `vehicle_category` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_vehicle_category`
--

INSERT INTO `tbl_vehicle_category` (`category_id`, `vehicle_category`) VALUES
('b1', 'bike'),
('c1', 'car');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_vehicle_type`
--

CREATE TABLE `tbl_vehicle_type` (
  `id` varchar(5) DEFAULT NULL,
  `vehicle_type_id` varchar(5) NOT NULL,
  `vehicle_type` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_vehicle_type`
--

INSERT INTO `tbl_vehicle_type` (`id`, `vehicle_type_id`, `vehicle_type`) VALUES
('c1', 't1', 'hatchback'),
('c1', 't2', 'SUV'),
('c1', 't3', 'Sedan'),
('b1', 't4', 'Cruiser'),
('b1', 't5', 'sports');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_vehicles`
--
ALTER TABLE `tbl_vehicles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vehicle_type_id` (`vehicle_type_id`);

--
-- Indexes for table `tbl_vehicle_booking`
--
ALTER TABLE `tbl_vehicle_booking`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `tbl_vehicle_category`
--
ALTER TABLE `tbl_vehicle_category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `tbl_vehicle_type`
--
ALTER TABLE `tbl_vehicle_type`
  ADD PRIMARY KEY (`vehicle_type_id`),
  ADD UNIQUE KEY `vehicle_type` (`vehicle_type`),
  ADD KEY `id` (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_vehicles`
--
ALTER TABLE `tbl_vehicles`
  ADD CONSTRAINT `tbl_vehicles_ibfk_1` FOREIGN KEY (`vehicle_type_id`) REFERENCES `tbl_vehicle_type` (`vehicle_type_id`);

--
-- Constraints for table `tbl_vehicle_booking`
--
ALTER TABLE `tbl_vehicle_booking`
  ADD CONSTRAINT `tbl_vehicle_booking_ibfk_1` FOREIGN KEY (`id`) REFERENCES `tbl_vehicles` (`id`);

--
-- Constraints for table `tbl_vehicle_type`
--
ALTER TABLE `tbl_vehicle_type`
  ADD CONSTRAINT `tbl_vehicle_type_ibfk_1` FOREIGN KEY (`id`) REFERENCES `tbl_vehicle_category` (`category_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
