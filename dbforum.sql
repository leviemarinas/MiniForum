-- MySQL dump 10.13  Distrib 5.7.14, for Win64 (x86_64)
--
-- Host: localhost    Database: dbforum
-- ------------------------------------------------------
-- Server version	5.7.14

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tblcategories`
--

DROP TABLE IF EXISTS `tblcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblcategories` (
  `intCategoryId` int(11) NOT NULL AUTO_INCREMENT,
  `strCategoryName` varchar(50) NOT NULL,
  PRIMARY KEY (`intCategoryId`),
  UNIQUE KEY `idxCategoryName` (`strCategoryName`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblcategories`
--

LOCK TABLES `tblcategories` WRITE;
/*!40000 ALTER TABLE `tblcategories` DISABLE KEYS */;
INSERT INTO `tblcategories` VALUES (5,'Car Enthusiasts'),(1,'dog lovers'),(3,'Food'),(2,'otaku corner');
/*!40000 ALTER TABLE `tblcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblpost`
--

DROP TABLE IF EXISTS `tblpost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblpost` (
  `intPostId` int(11) NOT NULL AUTO_INCREMENT,
  `intAuthorId` int(11) NOT NULL,
  `intPCategoryId` int(11) NOT NULL,
  `strPostTitle` varchar(50) NOT NULL,
  `strPostContent` text,
  `dtmPostDate` date DEFAULT NULL,
  PRIMARY KEY (`intPostId`),
  KEY `intAuthorId` (`intAuthorId`),
  KEY `intPCategoryId` (`intPCategoryId`),
  CONSTRAINT `tblpost_ibfk_1` FOREIGN KEY (`intAuthorId`) REFERENCES `tbluser` (`intId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tblpost_ibfk_2` FOREIGN KEY (`intPCategoryId`) REFERENCES `tblcategories` (`intCategoryId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblpost`
--

LOCK TABLES `tblpost` WRITE;
/*!40000 ALTER TABLE `tblpost` DISABLE KEYS */;
INSERT INTO `tblpost` VALUES (1,2,1,'I love my dog','He is so fluffy and adorable','2017-08-17'),(2,1,2,'AOT rocks','TITANS!!!!','2017-08-17'),(5,1,3,'I want cake!!','I want one so bad!!!! :( ','2017-08-17'),(6,1,5,'Fast Cars','Formula 1 cars are so fast <3 ','2017-08-17');
/*!40000 ALTER TABLE `tblpost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbluser`
--

DROP TABLE IF EXISTS `tbluser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbluser` (
  `intId` int(11) NOT NULL AUTO_INCREMENT,
  `strUsername` varchar(30) NOT NULL,
  `strPassword` varchar(30) NOT NULL,
  `strEmail` varchar(50) NOT NULL,
  `dtmBdate` date NOT NULL,
  `strUserType` char(7) NOT NULL,
  PRIMARY KEY (`intId`),
  UNIQUE KEY `idxUsername` (`strUsername`),
  UNIQUE KEY `idxEmail` (`strEmail`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbluser`
--

LOCK TABLES `tbluser` WRITE;
/*!40000 ALTER TABLE `tbluser` DISABLE KEYS */;
INSERT INTO `tbluser` VALUES (1,'asdec','123','benbenten19@gmail.com','2017-12-19','ADMIN'),(2,'ben','123','tolentinobenhur@yahoo.com','2001-12-20','NORMAL');
/*!40000 ALTER TABLE `tbluser` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-17 20:35:59
