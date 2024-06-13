-- CreateTable
CREATE TABLE `article` (
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
CREATE TABLE `log` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(255) NOT NULL,
    `role` VARCHAR(255) NOT NULL,
    `mark` TEXT NOT NULL,
    `user_id` INTEGER NOT NULL,
    `user_name` VARCHAR(255) NOT NULL,
    `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `single` (
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
CREATE TABLE `channel` (
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
CREATE TABLE `manages` (
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
CREATE TABLE `site` (
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
CREATE TABLE `author` (
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
CREATE TABLE `origin` (
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
CREATE TABLE `editor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `account` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
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
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `account` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `avatar` VARCHAR(255) NULL,
    `mark` TEXT NULL,
    `signature` TEXT NULL,
    `gender` ENUM('MAN', 'WOMAN') NOT NULL DEFAULT 'MAN',
    `editor` ENUM('RICHTEXT', 'MARKDOWN') NOT NULL DEFAULT 'RICHTEXT',
    `mobile` VARCHAR(255) NULL,
    `email` VARCHAR(255) NULL,
    `website` VARCHAR(255) NULL,
    `status` ENUM('NORMAL', 'PENDING', 'DELETE', 'FORBIDDEN') NOT NULL DEFAULT 'PENDING',
    `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tags` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tags` VARCHAR(255) NOT NULL,
    `channel_id` INTEGER NOT NULL,
    `hits` INTEGER NOT NULL DEFAULT 0,
    `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `show` (
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
CREATE TABLE `links` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `logo` VARCHAR(255) NULL,
    `link` VARCHAR(255) NOT NULL,
    `mark` TEXT NULL,
    `sort` INTEGER NOT NULL DEFAULT 0,
    `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `article` ADD CONSTRAINT `article_channel_id_fkey` FOREIGN KEY (`channel_id`) REFERENCES `channel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `article` ADD CONSTRAINT `article_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
