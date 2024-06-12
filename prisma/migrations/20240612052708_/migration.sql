-- CreateTable
CREATE TABLE `Article` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `channel_id` INTEGER NOT NULL,
    `description` TEXT NOT NULL,
    `tags` TEXT NOT NULL,
    `content` LONGTEXT NOT NULL,
    `markdown` LONGTEXT NOT NULL,
    `img` VARCHAR(255) NOT NULL,
    `video` VARCHAR(255) NOT NULL,
    `author` VARCHAR(255) NOT NULL,
    `origin` VARCHAR(255) NOT NULL,
    `editor` VARCHAR(255) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `istop` INTEGER NOT NULL DEFAULT 0,
    `hits` INTEGER NOT NULL DEFAULT 0,
    `type` VARCHAR(255) NOT NULL,
    `status` ENUM('NORMAL', 'PENDING', 'DELETE', 'FORBIDDEN') NOT NULL DEFAULT 'NORMAL',
    `time` TIMESTAMP NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(255) NOT NULL,
    `role` VARCHAR(255) NOT NULL,
    `mark` TEXT NOT NULL,
    `user_id` INTEGER NOT NULL,
    `user_name` VARCHAR(255) NOT NULL,
    `time` TIMESTAMP NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Single` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `tags` TEXT NOT NULL,
    `content` LONGTEXT NOT NULL,
    `markdown` LONGTEXT NOT NULL,
    `hits` INTEGER NOT NULL DEFAULT 0,
    `status` ENUM('NORMAL', 'PENDING', 'DELETE', 'FORBIDDEN') NOT NULL DEFAULT 'NORMAL',
    `time` TIMESTAMP NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Channel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pid` INTEGER NOT NULL DEFAULT 0,
    `name` VARCHAR(255) NOT NULL,
    `sort` INTEGER NOT NULL DEFAULT 0,
    `keywords` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `status` ENUM('NORMAL', 'PENDING', 'DELETE', 'FORBIDDEN') NOT NULL DEFAULT 'NORMAL',
    `img` VARCHAR(255) NOT NULL,
    `website` VARCHAR(255) NOT NULL,
    `time` TIMESTAMP NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Manages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `account` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `avatar` VARCHAR(255) NOT NULL,
    `mark` TEXT NOT NULL,
    `editor` ENUM('RICHTEXT', 'MARKDOWN') NOT NULL DEFAULT 'RICHTEXT',
    `mobile` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `time` TIMESTAMP NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Site` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `logo` VARCHAR(255) NOT NULL,
    `keywords` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `copyright` TEXT NOT NULL,
    `time` TIMESTAMP NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Author` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `avatar` VARCHAR(255) NOT NULL,
    `mark` TEXT NOT NULL,
    `editor` ENUM('RICHTEXT', 'MARKDOWN') NOT NULL DEFAULT 'RICHTEXT',
    `mobile` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `website` VARCHAR(255) NOT NULL,
    `time` TIMESTAMP NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Origin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `logo` VARCHAR(255) NOT NULL,
    `contact` VARCHAR(255) NOT NULL,
    `mark` TEXT NOT NULL,
    `mobile` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `website` VARCHAR(255) NOT NULL,
    `time` TIMESTAMP NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Editor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `account` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `avatar` VARCHAR(255) NOT NULL,
    `mark` TEXT NOT NULL,
    `editor` ENUM('RICHTEXT', 'MARKDOWN') NOT NULL DEFAULT 'RICHTEXT',
    `mobile` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `website` VARCHAR(255) NOT NULL,
    `time` TIMESTAMP NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `account` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `avatar` VARCHAR(255) NOT NULL,
    `mark` TEXT NOT NULL,
    `signature` TEXT NOT NULL,
    `gender` ENUM('MAN', 'WOMAN') NOT NULL DEFAULT 'MAN',
    `editor` ENUM('RICHTEXT', 'MARKDOWN') NOT NULL DEFAULT 'RICHTEXT',
    `mobile` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `website` VARCHAR(255) NOT NULL,
    `status` ENUM('NORMAL', 'PENDING', 'DELETE', 'FORBIDDEN') NOT NULL DEFAULT 'PENDING',
    `time` TIMESTAMP NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tags` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tags` VARCHAR(255) NOT NULL,
    `channel_id` INTEGER NOT NULL,
    `hits` INTEGER NOT NULL DEFAULT 0,
    `time` TIMESTAMP NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Show` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `mark` TEXT NOT NULL,
    `link` VARCHAR(255) NOT NULL,
    `img` VARCHAR(255) NOT NULL,
    `status` ENUM('NORMAL', 'PENDING', 'DELETE', 'FORBIDDEN') NOT NULL DEFAULT 'PENDING',
    `time` TIMESTAMP NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Links` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `logo` VARCHAR(255) NOT NULL,
    `link` VARCHAR(255) NOT NULL,
    `mark` TEXT NOT NULL,
    `sort` INTEGER NOT NULL DEFAULT 0,
    `time` TIMESTAMP NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_channel_id_fkey` FOREIGN KEY (`channel_id`) REFERENCES `Channel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
