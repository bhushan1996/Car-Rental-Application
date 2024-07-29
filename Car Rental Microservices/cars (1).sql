-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2019 at 05:18 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `car_rental`
--

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `model_no` int(11) NOT NULL,
  `location` varchar(30) NOT NULL,
  `booking_price` varchar(255) DEFAULT NULL,
  `car_type` varchar(255) DEFAULT NULL,
  `fuel_type` varchar(255) DEFAULT NULL,
  `num_of_seats` int(11) NOT NULL,
  `price_per_km` varchar(255) DEFAULT NULL,
  `transmission_type` varchar(255) DEFAULT NULL,
  `city` varchar(30) NOT NULL,
  `is_booked` tinyint(1) NOT NULL,
  `car_name` varchar(255) DEFAULT NULL,
  `image_url` varchar(1000) DEFAULT NULL,
  `car_img_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`model_no`, `location`, `booking_price`, `car_type`, `fuel_type`, `num_of_seats`, `price_per_km`, `transmission_type`, `city`, `is_booked`, `car_name`, `image_url`, `car_img_url`) VALUES
(9, 'Nagawara', '300', 'Hatchback', 'Petrol', 5, '20', 'Manual', 'Bangalore', 1, 'Hyundai Eon', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558698293_eon.png', NULL),
(10, 'Whitefield', '325', 'Hatchback', 'Diesel', 5, '25', 'Automatic', 'Bangalore', 0, 'Maruti Suzuki Celerio', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558698108_celerio.png', NULL),
(11, 'Koramangala', '350', 'Hatchback', 'Diesel', 5, '30', 'Automatic', 'Bangalore', 0, 'Hyundai Grand i10', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558700262_i10.png', NULL),
(12, 'Indira Nagar', '420', 'SUV', 'Diesel', 7, '50', 'Automatic', 'Bangalore', 0, 'Honda BR-V', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1571666323_Honda-BR-V.png', NULL),
(13, 'Kalyan Nagar', '400', 'Mini Suv', 'Petrol', 5, '25', 'Automatic', 'Bangalore', 0, 'Hyundai Creta', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558698201_creta.png', NULL),
(14, 'Whitefield', '600', 'Sedan', 'Diesel', 5, '40', 'Manual', 'Bangalore', 0, 'Honda Amaze', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558697978_amaze.png', NULL),
(15, 'Vasant Kunj', '325', 'Hatchback', 'Petrol', 5, '25', 'Manual', 'Delhi', 0, 'Maruti Suzuki Wagon R', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558701323_wagon-r.png', NULL),
(16, 'Mayur Viha', '400', 'Sedan', 'Diesel', 5, '35', 'Automatic', 'Delhi', 1, 'Toyota Etios', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558700058_etios.png', NULL),
(17, 'Karol Bagh', '450', 'SUV', 'Diesel', 7, '40', 'Manual', 'Delhi', 0, 'Mahindra Scorpio', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558700745_scorpio.png', NULL),
(18, 'Dwaraka', '330', 'Mini-SUV', 'Petrol', 6, '27', 'Manual', 'Delhi', 0, 'Mahindra KUV100', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558700501_KUV.png', NULL),
(19, 'Hauz Khas', '420', 'Sedan', 'Diesel', 5, '36', 'Automatic', 'Delhi', 0, 'Ford Aspire', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558700163_ford-aspire.png', NULL),
(20, 'Mayur Vihar', '400', 'Sedan', 'Diesel', 4, '40', 'Manual', 'Delhi', 0, 'Maruti Suzuki Ciaz', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558698169_ciaz.png', NULL),
(21, 'Chimbali', '418', 'Hatchback', 'Petrol', 5, '28', 'Manual', 'Pune', 0, 'Maruti Swift VDI', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1562926309_suzuki_old.png', NULL),
(22, 'Khadakwasla', '410', 'Hatchback', 'Diesel', 5, '30', 'Automatic', 'Pune', 0, 'Maruti Suzuki Brezza', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558701126_vitara-breeza.png', NULL),
(23, 'Wagholi', '450', 'Sedan', 'Petrol', 5, '37', 'Manual', 'Pune', 0, 'Maruti Suzuki Dzire', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1570699771_MarutiSuzukiDzireVDI%281%29%281%29.png', NULL),
(24, 'Ganj Peth', '380', 'Mini-SUV', 'Diesel', 5, '30', 'Manual', 'Pune', 0, 'Maruti Suzuki Beleno', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558698059_baleno.png', NULL),
(25, 'Hinjewadi', '350', 'Sedan', 'Petrol', 5, '30', 'Automatic', 'Pune', 0, 'Honda Amaze', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558697978_amaze.png', NULL),
(26, 'null', '340', 'SUV', 'Diesel', 7, '20', 'Manual', 'Mumbai', 1, 'Tata Hexa', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558701015_tuv300.png', NULL),
(27, 'null', '280', 'Hatchback', 'Petrol', 5, '20', 'Manual', 'Mumbai', 0, 'Hyundai i20', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558700307_i20-magna.png', NULL),
(28, 'null', '340', 'Sedan', 'Diesel', 5, '23', 'Automatic', 'Mumbai', 0, 'Tata Zest', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558701642_zest.png', NULL),
(29, 'null', '420', 'SUV', 'Diesel', 7, '25', 'Automatic', 'Mumbai', 0, 'Maruti Ertiga', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558700017_eritiga.png', NULL),
(30, 'null', '450', 'Mini-SUV', 'Petrol', 7, '23', 'Manual', 'Mumbai', 0, 'Hyundai Creta', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558698201_creta.png', NULL),
(31, 'null', '400', 'Sedan', 'Petrol', 5, '289', 'Manual', 'Mumbai', 0, 'Toyota Etios', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558700058_etios.png', NULL),
(32, 'null', '400', 'Sedan', 'Petrol', 5, '289', 'Manual', 'Hyderabad', 0, 'Toyota Etios', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558700058_etios.png', NULL),
(33, 'null', '380', 'Sedan', 'Diesel', 5, '30', 'Automatic', 'Hyderabad', 0, 'Honda Amaze', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558697978_amaze.png', NULL),
(34, 'null', '280', 'Hatchback', 'Petrol', 5, '15', 'Manual', 'Hyderabad', 1, 'Maruti Ritz', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558700628_ritz2.png', NULL),
(35, 'null', '320', 'Hatchback', 'Diesel', 5, '18', 'Manual', 'Hyderabad', 0, 'Hyundai Santro', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558700712_santro.png', NULL),
(36, 'null', '500', 'Mini-SUV', 'Petrol', 7, '26', 'Automatic', 'Hyderabad', 1, 'Hyundai Creta', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558698201_creta.png', NULL),
(37, 'null', '520', 'SUV', 'Diesel', 7, '30', 'Manual', 'Hyderabad', 0, 'Tata Safari', 'https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558700686_safari.png', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`model_no`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `model_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
