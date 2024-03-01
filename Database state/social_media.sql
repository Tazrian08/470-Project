-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2024 at 11:22 AM
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
-- Database: `social_media`
--

-- --------------------------------------------------------

--
-- Table structure for table `chatbois`
--

CREATE TABLE `chatbois` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `path` varchar(255) NOT NULL,
  `chatbox_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `chatboxes`
--

CREATE TABLE `chatboxes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `admin_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `post_id` bigint(20) UNSIGNED DEFAULT NULL,
  `comment_id` bigint(20) UNSIGNED DEFAULT NULL,
  `comment` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `follows`
--

CREATE TABLE `follows` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `follower_id` bigint(20) UNSIGNED NOT NULL,
  `followed_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `follows`
--

INSERT INTO `follows` (`id`, `follower_id`, `followed_id`, `created_at`, `updated_at`) VALUES
(1, 2, 3, '2024-02-25 08:08:33', '2024-02-25 08:08:33'),
(2, 3, 2, '2024-02-25 08:41:16', '2024-02-25 08:41:16');

-- --------------------------------------------------------

--
-- Table structure for table `hobbies`
--

CREATE TABLE `hobbies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `type` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `hobbies`
--

INSERT INTO `hobbies` (`id`, `user_id`, `type`, `created_at`, `updated_at`) VALUES
(1, 2, 'Dying', '2024-02-16 11:06:30', '2024-02-16 11:06:30'),
(2, 2, 'Crying', '2024-02-16 11:41:15', '2024-02-16 11:41:15'),
(3, 2, 'Jhaal laga', '2024-02-16 11:46:49', '2024-02-16 11:47:04');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `post_id` bigint(20) UNSIGNED NOT NULL,
  `path` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `post_id`, `path`, `created_at`, `updated_at`) VALUES
(3, 129, 'http://localhost:8000/images/1709220665-3.0png', '2024-02-29 09:31:05', '2024-02-29 09:31:05'),
(4, 129, 'http://localhost:8000/images/1709220665-3.1png', '2024-02-29 09:31:05', '2024-02-29 09:31:05'),
(5, 130, 'http://localhost:8000/images/1709221430-3.0mp4', '2024-02-29 09:43:50', '2024-02-29 09:43:50'),
(6, 131, 'http://localhost:8000/images/1709286740-2.0jpg', '2024-03-01 03:52:20', '2024-03-01 03:52:20'),
(7, 131, 'http://localhost:8000/images/1709286740-2.1jpg', '2024-03-01 03:52:20', '2024-03-01 03:52:20'),
(8, 131, 'http://localhost:8000/images/1709286740-2.2mp4', '2024-03-01 03:52:20', '2024-03-01 03:52:20');

-- --------------------------------------------------------

--
-- Table structure for table `likes`
--

CREATE TABLE `likes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `post_id` bigint(20) UNSIGNED DEFAULT NULL,
  `comment_id` bigint(20) UNSIGNED DEFAULT NULL,
  `count` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sender_id` bigint(20) UNSIGNED NOT NULL,
  `path` varchar(255) DEFAULT NULL,
  `chatbox_id` bigint(20) UNSIGNED NOT NULL,
  `message` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2024_02_04_185612_create_profilepics_table', 1),
(6, '2024_02_04_185650_create_professions_table', 1),
(7, '2024_02_04_185706_create_hobbies_table', 1),
(8, '2024_02_04_185727_create_skills_table', 1),
(9, '2024_02_04_185738_create_follows_table', 1),
(10, '2024_02_04_185753_create_posts_table', 1),
(11, '2024_02_04_185813_create_comments_table', 1),
(12, '2024_02_04_185822_create_likes_table', 1),
(13, '2024_02_04_185832_create_notifications_table', 1),
(14, '2024_02_04_185905_create_chatboxes_table', 1),
(15, '2024_02_04_185915_create_chatbois_table', 1),
(16, '2024_02_04_185929_create_messages_table', 1),
(17, '2024_02_29_122442_create_images_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `sender_id` bigint(20) UNSIGNED NOT NULL,
  `description` longtext NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 2, 'token', 'ff7b47132323928cdd2b0f5763fdc1fd53dc9f9e97fe965f94037a5c24de88ec', '[\"*\"]', NULL, NULL, '2024-02-07 10:27:10', '2024-02-07 10:27:10'),
(2, 'App\\Models\\User', 2, 'token', '06b8ee3a01b874e7108c0130b14ef88e587e3ceebeebe52eb1cefde7df393592', '[\"*\"]', NULL, NULL, '2024-02-07 10:44:19', '2024-02-07 10:44:19'),
(3, 'App\\Models\\User', 2, 'token', '90210954cbe57e66564f98bc2d5800c31f87a468fe8a42bde4415c4c8ba5eb78', '[\"*\"]', NULL, NULL, '2024-02-07 10:44:49', '2024-02-07 10:44:49'),
(4, 'App\\Models\\User', 2, 'token', 'e01c6acbe631f5a7ce2974d5b5375d8c09059864b8e73cfe5aec63108e18c080', '[\"*\"]', '2024-02-07 10:52:07', NULL, '2024-02-07 10:46:21', '2024-02-07 10:52:07'),
(5, 'App\\Models\\User', 2, 'token', '48273dc5ea0e497d15fa68b6f7d6ea0442f293b6bd2125f72a518386239971b1', '[\"*\"]', '2024-02-07 10:57:51', NULL, '2024-02-07 10:57:51', '2024-02-07 10:57:51'),
(6, 'App\\Models\\User', 2, 'token', '2acd9356cdfb0307206122e0b3545b0ed2c26fce1af2397d2450c4359b499a11', '[\"*\"]', '2024-02-07 10:58:47', NULL, '2024-02-07 10:58:47', '2024-02-07 10:58:47'),
(7, 'App\\Models\\User', 2, 'token', '455e160a4f1a8cf1a7c508c410b9c77169c8601c9eef5eae4df0736aad52c198', '[\"*\"]', '2024-02-07 10:59:36', NULL, '2024-02-07 10:59:36', '2024-02-07 10:59:36'),
(8, 'App\\Models\\User', 2, 'token', '301d299da55262bcba03d7e6cb4ce2d8fb95e5794c51e83a970bcd0d9017c38d', '[\"*\"]', '2024-02-07 11:03:46', NULL, '2024-02-07 11:03:46', '2024-02-07 11:03:46'),
(9, 'App\\Models\\User', 2, 'token', '5d817b1ab0c8e785efbe59e16d7f33721eb9e6793509c2eb2e14ef2ef9472644', '[\"*\"]', '2024-02-07 11:10:23', NULL, '2024-02-07 11:04:39', '2024-02-07 11:10:23'),
(10, 'App\\Models\\User', 2, 'token', '49a36202f4b4d4fbf1d1d7ee36885cf6e241977d8491806db5a0ea159d0e77f7', '[\"*\"]', '2024-02-07 11:10:35', NULL, '2024-02-07 11:10:35', '2024-02-07 11:10:35'),
(11, 'App\\Models\\User', 2, 'token', '1a1485cab847c338a845a89c6e5054997617c3f4af3f9060a05f4c029b19170e', '[\"*\"]', '2024-02-07 11:52:56', NULL, '2024-02-07 11:14:57', '2024-02-07 11:52:56'),
(12, 'App\\Models\\User', 2, 'token', '19f867c866667e8bef0faca54c640801729e96ba716f74cea9d3b530c6cede5d', '[\"*\"]', '2024-02-09 02:22:34', NULL, '2024-02-09 02:09:40', '2024-02-09 02:22:34'),
(13, 'App\\Models\\User', 2, 'token', 'f45bfe274cf0e8659075652c93e9fccad352b3efcb45abea1b1330b88bbbf69f', '[\"*\"]', '2024-02-09 05:34:40', NULL, '2024-02-09 05:34:39', '2024-02-09 05:34:40'),
(14, 'App\\Models\\User', 2, 'token', 'f1b1515bf202a2a394d77b61bb108d6fe1f92302e3b5557e67a21f122b130522', '[\"*\"]', '2024-02-09 05:35:00', NULL, '2024-02-09 05:35:00', '2024-02-09 05:35:00'),
(15, 'App\\Models\\User', 2, 'token', 'd8889c67bb6c2cfbb478284b64b92e05b9e266ed742402ff692dcb48f1768d85', '[\"*\"]', '2024-02-09 05:37:58', NULL, '2024-02-09 05:37:58', '2024-02-09 05:37:58'),
(16, 'App\\Models\\User', 2, 'token', 'c432353d01ab8cd5d4b438f31c09129de7edb442138ee230490d552f08cbee82', '[\"*\"]', '2024-02-09 10:25:05', NULL, '2024-02-09 05:40:13', '2024-02-09 10:25:05'),
(17, 'App\\Models\\User', 2, 'token', '356fa10fdaba3c52d4bbdbbd13983f56fe141dc91b2ed753e14bac2ffb1323a6', '[\"*\"]', '2024-02-09 10:32:34', NULL, '2024-02-09 10:32:34', '2024-02-09 10:32:34'),
(18, 'App\\Models\\User', 2, 'token', 'd3b0a420fdfd3f302dbaa66ee588e48b0860ca50d7c044e78ba41b496d8f657f', '[\"*\"]', '2024-02-09 10:33:04', NULL, '2024-02-09 10:33:04', '2024-02-09 10:33:04'),
(19, 'App\\Models\\User', 2, 'token', '9c718e60325d627e0545cf479deaeae4b7692e868f8aba96197eb22fd2f5ee21', '[\"*\"]', '2024-02-09 11:12:49', NULL, '2024-02-09 10:37:06', '2024-02-09 11:12:49'),
(20, 'App\\Models\\User', 2, 'token', 'c03287666ee3e6a3f71889be244aacc29fec2ae7757794656b0e12b961498f70', '[\"*\"]', '2024-02-09 11:25:37', NULL, '2024-02-09 11:20:20', '2024-02-09 11:25:37'),
(21, 'App\\Models\\User', 2, 'token', '52773f2abb712fdfa52001826541c358a135d40d591e773ec3c3e16e50ca2eb7', '[\"*\"]', '2024-02-09 11:29:16', NULL, '2024-02-09 11:26:22', '2024-02-09 11:29:16'),
(22, 'App\\Models\\User', 2, 'token', '5ec8dea5c3c10d27497cd53efa7d13af913bd86f21e6ee1d312e872be0ef6f3b', '[\"*\"]', '2024-02-09 12:03:38', NULL, '2024-02-09 11:57:24', '2024-02-09 12:03:38'),
(23, 'App\\Models\\User', 2, 'token', '5489d7feb7c14231267c3164a304057b71ddf194045a2901c88435354169004c', '[\"*\"]', '2024-02-09 12:20:54', NULL, '2024-02-09 12:03:58', '2024-02-09 12:20:54'),
(24, 'App\\Models\\User', 2, 'token', '99a7d8345f4648ad65e8dd936e753cd7f22ba2c62655b75852d14017938fa87f', '[\"*\"]', '2024-02-09 12:44:52', NULL, '2024-02-09 12:36:53', '2024-02-09 12:44:52'),
(25, 'App\\Models\\User', 2, 'token', 'c2d8b59bb6e9a4a92fe35f08e4504d3cab109bd8126411814ee34ca2ff2b281a', '[\"*\"]', '2024-02-10 10:06:35', NULL, '2024-02-10 07:35:55', '2024-02-10 10:06:35'),
(26, 'App\\Models\\User', 3, 'token', '60a718b7991375400a30dcfb43f0403cf7562dbbef267bc6d67cb8f458205d9e', '[\"*\"]', '2024-02-10 10:08:53', NULL, '2024-02-10 10:07:25', '2024-02-10 10:08:53'),
(27, 'App\\Models\\User', 2, 'token', 'b15127c86dcc67fe3e17845941163630d3be89102ad72ebe733b0bccc7bd6dff', '[\"*\"]', '2024-02-10 10:47:36', NULL, '2024-02-10 10:12:41', '2024-02-10 10:47:36'),
(28, 'App\\Models\\User', 2, 'token', 'b879818732a9a67dd3b507f7a73f31aea69dac4f54904cb9601e3843a408e0f7', '[\"*\"]', '2024-02-10 10:58:30', NULL, '2024-02-10 10:55:27', '2024-02-10 10:58:30'),
(29, 'App\\Models\\User', 2, 'token', '57a6c7259224f81a250b08c17ef803638738f14cf096670cd91d33ac5dbae6d8', '[\"*\"]', '2024-02-10 11:00:37', NULL, '2024-02-10 11:00:23', '2024-02-10 11:00:37'),
(30, 'App\\Models\\User', 2, 'token', '370f28864f6fa08e56e6572b6d874dc9946188b8280b0034e937beeffa669d97', '[\"*\"]', '2024-02-11 01:18:39', NULL, '2024-02-11 00:57:32', '2024-02-11 01:18:39'),
(31, 'App\\Models\\User', 2, 'token', 'c87e4012fb419a0cf55edd5543709151cc3a74403ffb736ae060b4430cac3fec', '[\"*\"]', '2024-02-16 10:21:28', NULL, '2024-02-15 10:22:08', '2024-02-16 10:21:28'),
(32, 'App\\Models\\User', 2, 'token', '96a7d108fcef081bfeca7b854c86195c7dfc0fe3b7f3c2e45444be4374fa8a92', '[\"*\"]', '2024-02-16 11:05:30', NULL, '2024-02-16 10:27:54', '2024-02-16 11:05:30'),
(33, 'App\\Models\\User', 2, 'token', '20b254ab91696268ea9a723c0bbc286532838d259d44e8424bea9fc323b13bd8', '[\"*\"]', '2024-02-16 13:28:05', NULL, '2024-02-16 11:25:23', '2024-02-16 13:28:05'),
(34, 'App\\Models\\User', 2, 'token', '09c189142213604c5320903a81eeb8ac81f1efde85edd6ee0e3cea19014ffcd2', '[\"*\"]', '2024-02-25 08:40:58', NULL, '2024-02-25 08:05:13', '2024-02-25 08:40:58'),
(35, 'App\\Models\\User', 3, 'token', '0e1f6d60d40b8afb2823959fb560112969e7ea76f2afd455aa6abc9efb917384', '[\"*\"]', '2024-02-25 08:41:35', NULL, '2024-02-25 08:41:09', '2024-02-25 08:41:35'),
(36, 'App\\Models\\User', 2, 'token', '7094b6f820ba34ad0aedc7891847d53544e9abd6349eabbab74e26bbdaab738a', '[\"*\"]', '2024-02-25 08:42:17', NULL, '2024-02-25 08:41:59', '2024-02-25 08:42:17'),
(37, 'App\\Models\\User', 3, 'token', 'dabab6f47c3bdeca687e62101576266cf2c74142b733b9d26662d881e853094c', '[\"*\"]', '2024-02-25 08:42:51', NULL, '2024-02-25 08:42:24', '2024-02-25 08:42:51'),
(38, 'App\\Models\\User', 2, 'token', '1a2701b0e77f6fd504b7f5ffbaed41ceeedb3e23ea21d9318eb10db82fc14877', '[\"*\"]', '2024-02-25 08:58:33', NULL, '2024-02-25 08:42:58', '2024-02-25 08:58:33'),
(39, 'App\\Models\\User', 2, 'token', 'eced7448ea851acbbf6670173f08656bdcf243752259f6a0cc3b98e1ba2242de', '[\"*\"]', '2024-02-29 08:11:15', NULL, '2024-02-28 23:22:51', '2024-02-29 08:11:15'),
(40, 'App\\Models\\User', 3, 'token', 'ebb464e1a6ac787ad07dd415c70bd11f036076c21ead1f4b5a9666bad048bc8b', '[\"*\"]', '2024-02-29 09:43:36', NULL, '2024-02-29 08:11:26', '2024-02-29 09:43:36'),
(41, 'App\\Models\\User', 2, 'token', '3ece6de411ee49648b3d508679da74145c7d1fd348f8b3f56b67021a7d3d5d9a', '[\"*\"]', '2024-03-01 03:50:47', NULL, '2024-03-01 03:50:46', '2024-03-01 03:50:47'),
(42, 'App\\Models\\User', 2, 'token', '69d1fed6398702799b09cc3b85dffe98a6064fbe77226a3107637979ca3f9bff', '[\"*\"]', '2024-03-01 04:15:13', NULL, '2024-03-01 03:50:47', '2024-03-01 04:15:13');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `path` varchar(255) DEFAULT NULL,
  `type` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `public` tinyint(1) NOT NULL DEFAULT 0,
  `shared_post_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `user_id`, `path`, `type`, `description`, `public`, `shared_post_id`, `created_at`, `updated_at`) VALUES
(100, 2, NULL, 'Text', 'Meow', 0, NULL, '2024-02-09 08:15:11', '2024-02-09 08:15:11'),
(101, 2, NULL, 'Text', 'awdawdawdawd', 1, NULL, '2024-02-29 05:24:52', '2024-02-29 05:24:52'),
(102, 2, NULL, 'Text', 'Meow', 0, NULL, '2024-02-09 08:15:11', '2024-02-09 08:15:11'),
(103, 2, NULL, 'Text', 'Meow', 0, NULL, '2024-02-09 08:15:11', '2024-02-09 08:15:11'),
(104, 2, NULL, 'Text', 'Meow', 0, NULL, '2024-02-09 08:15:11', '2024-02-09 08:15:11'),
(105, 2, NULL, 'Text', 'Meow', 0, NULL, '2024-02-09 08:15:11', '2024-02-09 08:15:11'),
(106, 2, NULL, 'Text', 'Meow', 0, NULL, '2024-02-09 08:15:11', '2024-02-09 08:15:11'),
(107, 2, NULL, 'Text', 'Meow', 0, NULL, '2024-02-09 08:15:11', '2024-02-09 08:15:11'),
(108, 2, NULL, 'Text', 'Meow', 0, NULL, '2024-02-09 08:15:11', '2024-02-09 08:15:11'),
(109, 2, NULL, 'Text', 'Meow', 0, NULL, '2024-02-09 08:15:11', '2024-02-09 08:15:11'),
(110, 2, NULL, 'Text', 'Meow', 0, NULL, '2024-02-09 08:15:11', '2024-02-09 08:15:11'),
(111, 2, NULL, 'Text', 'Meow', 0, NULL, '2024-02-09 08:15:11', '2024-02-09 08:15:11'),
(112, 2, NULL, 'Text', 'Meow', 0, NULL, '2024-02-09 08:15:11', '2024-02-09 08:15:11'),
(128, 3, NULL, 'Image/Video', 'Alibaba', 0, NULL, '2024-02-29 09:28:39', '2024-02-29 09:28:39'),
(129, 3, NULL, 'Image/Video', 'Alibaba 2', 0, NULL, '2024-02-29 09:31:05', '2024-02-29 09:31:05'),
(130, 3, NULL, 'Image/Video', 'Alibaba 2', 0, NULL, '2024-02-29 09:43:50', '2024-02-29 09:43:50'),
(131, 2, NULL, 'Image/Video', 'Description', 0, NULL, '2024-03-01 03:52:20', '2024-03-01 03:52:20');

-- --------------------------------------------------------

--
-- Table structure for table `professions`
--

CREATE TABLE `professions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `company` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `start` date NOT NULL,
  `end` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `professions`
--

INSERT INTO `professions` (`id`, `user_id`, `company`, `position`, `start`, `end`, `created_at`, `updated_at`) VALUES
(100, 2, 'Witchy', 'CEO', '2024-02-09', '2024-02-09', '2024-02-09 17:59:29', '2024-02-09 17:59:29'),
(101, 2, 'Maisar COmpany', 'Atru', '2024-02-02', NULL, '2024-02-16 13:23:45', '2024-02-16 13:23:45'),
(102, 2, 'AliExpress', 'Alibaba', '2024-02-01', NULL, '2024-02-25 08:05:52', '2024-02-25 08:05:52');

-- --------------------------------------------------------

--
-- Table structure for table `profilepics`
--

CREATE TABLE `profilepics` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `path` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `profilepics`
--

INSERT INTO `profilepics` (`id`, `user_id`, `path`, `active`, `created_at`, `updated_at`) VALUES
(13, 3, 'http://localhost:8000/images/1709216080-Alibaba.png', 0, '2024-02-29 08:14:40', '2024-02-29 08:14:40'),
(14, 2, 'http://localhost:8000/images/1709288015-Dianbo.jpg', 0, '2024-03-01 04:13:35', '2024-03-01 04:13:35');

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `type` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`id`, `user_id`, `type`, `created_at`, `updated_at`) VALUES
(100, 2, 'Being cute', '2024-02-16 15:56:53', '2024-02-16 15:56:53'),
(101, 2, 'Kandon', '2024-02-16 10:08:35', '2024-02-16 10:08:35'),
(102, 2, 'Catto 2', '2024-02-16 10:42:49', '2024-02-16 10:44:41'),
(456, 3, '40 Thieves', '2024-02-16 16:58:36', '2024-02-16 16:58:36');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `gender` varchar(255) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `about` longtext NOT NULL,
  `blood_type` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `dob`, `gender`, `contact`, `about`, `blood_type`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(2, 'Dianbo', 'diancatto', 'dianbo@cat', '2000-02-08', 'male', '123456789', 'Meow', 'B+', '$2y$12$DWDKHUCdcYs/vfzb1/y0E.tWZbYdKZ10KkawdoevWKyDZZLCV3kqi', NULL, '2024-02-07 10:16:47', '2024-02-07 10:16:47'),
(3, 'Alibaba', 'ali', 'ali@baba', '2000-02-19', 'male', '321654987', '40 thieves', 'O+', '$2y$12$sDffGgP2BZ6Gfc7gUZD5x.3kLvODry0whHW.S8pAF.8bSoxiqgAQi', NULL, '2024-02-07 10:25:37', '2024-02-07 10:25:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chatbois`
--
ALTER TABLE `chatbois`
  ADD PRIMARY KEY (`id`),
  ADD KEY `chatbois_user_id_foreign` (`user_id`),
  ADD KEY `chatbois_chatbox_id_foreign` (`chatbox_id`);

--
-- Indexes for table `chatboxes`
--
ALTER TABLE `chatboxes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `chatboxes_admin_id_foreign` (`admin_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_user_id_foreign` (`user_id`),
  ADD KEY `comments_post_id_foreign` (`post_id`),
  ADD KEY `comments_comment_id_foreign` (`comment_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `follows`
--
ALTER TABLE `follows`
  ADD PRIMARY KEY (`id`),
  ADD KEY `follows_follower_id_foreign` (`follower_id`),
  ADD KEY `follows_followed_id_foreign` (`followed_id`);

--
-- Indexes for table `hobbies`
--
ALTER TABLE `hobbies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hobbies_user_id_foreign` (`user_id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `images_post_id_foreign` (`post_id`);

--
-- Indexes for table `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `likes_user_id_foreign` (`user_id`),
  ADD KEY `likes_post_id_foreign` (`post_id`),
  ADD KEY `likes_comment_id_foreign` (`comment_id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `messages_sender_id_foreign` (`sender_id`),
  ADD KEY `messages_chatbox_id_foreign` (`chatbox_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_user_id_foreign` (`user_id`),
  ADD KEY `notifications_sender_id_foreign` (`sender_id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `posts_shared_post_id_foreign` (`shared_post_id`),
  ADD KEY `posts_user_id_foreign` (`user_id`);

--
-- Indexes for table `professions`
--
ALTER TABLE `professions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `professions_user_id_foreign` (`user_id`);

--
-- Indexes for table `profilepics`
--
ALTER TABLE `profilepics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `profilepics_user_id_foreign` (`user_id`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `skills_user_id_foreign` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chatbois`
--
ALTER TABLE `chatbois`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `chatboxes`
--
ALTER TABLE `chatboxes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `follows`
--
ALTER TABLE `follows`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `hobbies`
--
ALTER TABLE `hobbies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `likes`
--
ALTER TABLE `likes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- AUTO_INCREMENT for table `professions`
--
ALTER TABLE `professions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT for table `profilepics`
--
ALTER TABLE `profilepics`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=457;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chatbois`
--
ALTER TABLE `chatbois`
  ADD CONSTRAINT `chatbois_chatbox_id_foreign` FOREIGN KEY (`chatbox_id`) REFERENCES `chatboxes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `chatbois_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `chatboxes`
--
ALTER TABLE `chatboxes`
  ADD CONSTRAINT `chatboxes_admin_id_foreign` FOREIGN KEY (`admin_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_comment_id_foreign` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `follows`
--
ALTER TABLE `follows`
  ADD CONSTRAINT `follows_followed_id_foreign` FOREIGN KEY (`followed_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `follows_follower_id_foreign` FOREIGN KEY (`follower_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hobbies`
--
ALTER TABLE `hobbies`
  ADD CONSTRAINT `hobbies_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_comment_id_foreign` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `likes_post_id_foreign` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `likes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_chatbox_id_foreign` FOREIGN KEY (`chatbox_id`) REFERENCES `chatboxes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `messages_sender_id_foreign` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_sender_id_foreign` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `notifications_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_shared_post_id_foreign` FOREIGN KEY (`shared_post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `posts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `professions`
--
ALTER TABLE `professions`
  ADD CONSTRAINT `professions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `profilepics`
--
ALTER TABLE `profilepics`
  ADD CONSTRAINT `profilepics_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `skills`
--
ALTER TABLE `skills`
  ADD CONSTRAINT `skills_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
