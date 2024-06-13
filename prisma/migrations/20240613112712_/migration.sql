/*
  Warnings:

  - You are about to drop the `article` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `author` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `channel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `editor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `links` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `log` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `manages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `origin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `show` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `single` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `site` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `article` DROP FOREIGN KEY `article_channel_id_fkey`;

-- DropForeignKey
ALTER TABLE `article` DROP FOREIGN KEY `article_user_id_fkey`;

-- DropTable
DROP TABLE `article`;

-- DropTable
DROP TABLE `author`;

-- DropTable
DROP TABLE `channel`;

-- DropTable
DROP TABLE `editor`;

-- DropTable
DROP TABLE `links`;

-- DropTable
DROP TABLE `log`;

-- DropTable
DROP TABLE `manages`;

-- DropTable
DROP TABLE `origin`;

-- DropTable
DROP TABLE `show`;

-- DropTable
DROP TABLE `single`;

-- DropTable
DROP TABLE `site`;

-- DropTable
DROP TABLE `tags`;

-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `Article` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `channel_id` INTEGER NOT NULL,
    `description` TEXT NULL,
    `tags` TEXT NULL,
    `content` LONGTEXT NULL,
    `markdown` LONGTEXT NULL,
    `img` VARCHAR(255) NULL,
    `video` VARCHAR(255) NULL,
    `author` VARCHAR(255) NULL,
    `origin` VARCHAR(255) NULL,
    `editor` VARCHAR(255) NULL,
    `user_id` INTEGER NULL,
    `istop` INTEGER NOT NULL DEFAULT 0,
    `hits` INTEGER NOT NULL DEFAULT 0,
    `type` VARCHAR(255) NULL,
    `status` ENUM('NORMAL', 'PENDING', 'DELETE', 'FORBIDDEN') NOT NULL DEFAULT 'NORMAL',
    `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(255) NOT NULL,
    `role` VARCHAR(255) NOT NULL,
    `mark` TEXT NULL,
    `user_id` INTEGER NOT NULL,
    `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Single` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `tags` TEXT NULL,
    `content` LONGTEXT NULL,
    `markdown` LONGTEXT NULL,
    `hits` INTEGER NOT NULL DEFAULT 0,
    `status` ENUM('NORMAL', 'PENDING', 'DELETE', 'FORBIDDEN') NOT NULL DEFAULT 'NORMAL',
    `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Channel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pid` INTEGER NOT NULL DEFAULT 0,
    `name` VARCHAR(255) NOT NULL,
    `sort` INTEGER NOT NULL DEFAULT 0,
    `keywords` TEXT NULL,
    `description` TEXT NULL,
    `status` ENUM('NORMAL', 'PENDING', 'DELETE', 'FORBIDDEN') NOT NULL DEFAULT 'NORMAL',
    `img` VARCHAR(255) NULL,
    `website` VARCHAR(255) NULL,
    `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Manages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `account` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NULL,
    `avatar` VARCHAR(255) NULL,
    `mark` TEXT NULL,
    `editor` ENUM('RICHTEXT', 'MARKDOWN') NOT NULL DEFAULT 'RICHTEXT',
    `mobile` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Site` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NULL,
    `logo` VARCHAR(255) NULL,
    `keywords` TEXT NULL,
    `description` TEXT NULL,
    `copyright` TEXT NULL,
    `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Author` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `avatar` VARCHAR(255) NULL,
    `mark` TEXT NULL,
    `editor` ENUM('RICHTEXT', 'MARKDOWN') NOT NULL DEFAULT 'RICHTEXT',
    `mobile` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `website` VARCHAR(255) NULL,
    `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Origin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `logo` VARCHAR(255) NULL,
    `contact` VARCHAR(255) NULL,
    `mark` TEXT NULL,
    `mobile` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `website` VARCHAR(255) NULL,
    `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Editor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `account` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NULL,
    `avatar` VARCHAR(255) NULL,
    `mark` TEXT NULL,
    `editor` ENUM('RICHTEXT', 'MARKDOWN') NOT NULL DEFAULT 'RICHTEXT',
    `mobile` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `website` VARCHAR(255) NULL,
    `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `account` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NULL,
    `avatar` VARCHAR(255) NULL,
    `mark` TEXT NULL,
    `signature` TEXT NULL,
    `gender` ENUM('MAN', 'WOMAN') NULL DEFAULT 'MAN',
    `editor` ENUM('RICHTEXT', 'MARKDOWN') NULL DEFAULT 'RICHTEXT',
    `mobile` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `website` VARCHAR(255) NULL,
    `status` ENUM('NORMAL', 'PENDING', 'DELETE', 'FORBIDDEN') NULL DEFAULT 'PENDING',
    `time` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tags` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tags` VARCHAR(255) NOT NULL,
    `channel_id` INTEGER NOT NULL,
    `hits` INTEGER NOT NULL DEFAULT 0,
    `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Show` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `mark` TEXT NULL,
    `link` VARCHAR(255) NOT NULL,
    `img` VARCHAR(255) NULL,
    `status` ENUM('NORMAL', 'PENDING', 'DELETE', 'FORBIDDEN') NOT NULL DEFAULT 'PENDING',
    `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Links` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `logo` VARCHAR(255) NULL,
    `link` VARCHAR(255) NOT NULL,
    `mark` TEXT NULL,
    `sort` INTEGER NOT NULL DEFAULT 0,
    `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
