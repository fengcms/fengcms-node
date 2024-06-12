-- DropForeignKey
ALTER TABLE `Article` DROP FOREIGN KEY `Article_user_id_fkey`;

-- AlterTable
ALTER TABLE `Article` MODIFY `description` TEXT NULL,
    MODIFY `tags` TEXT NULL,
    MODIFY `content` LONGTEXT NULL,
    MODIFY `markdown` LONGTEXT NULL,
    MODIFY `img` VARCHAR(255) NULL,
    MODIFY `video` VARCHAR(255) NULL,
    MODIFY `author` VARCHAR(255) NULL,
    MODIFY `origin` VARCHAR(255) NULL,
    MODIFY `editor` VARCHAR(255) NULL,
    MODIFY `user_id` INTEGER NULL,
    MODIFY `type` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `Author` MODIFY `avatar` VARCHAR(255) NULL,
    MODIFY `mark` TEXT NULL,
    MODIFY `mobile` VARCHAR(255) NULL,
    MODIFY `email` VARCHAR(255) NULL,
    MODIFY `website` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `Editor` MODIFY `avatar` VARCHAR(255) NULL,
    MODIFY `mark` TEXT NULL,
    MODIFY `mobile` VARCHAR(255) NULL,
    MODIFY `email` VARCHAR(255) NULL,
    MODIFY `website` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `Links` MODIFY `logo` VARCHAR(255) NULL,
    MODIFY `mark` TEXT NULL;

-- AlterTable
ALTER TABLE `Manages` MODIFY `name` VARCHAR(255) NULL,
    MODIFY `avatar` VARCHAR(255) NULL,
    MODIFY `mark` TEXT NULL,
    MODIFY `mobile` VARCHAR(255) NULL,
    MODIFY `email` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `Origin` MODIFY `logo` VARCHAR(255) NULL,
    MODIFY `contact` VARCHAR(255) NULL,
    MODIFY `mark` TEXT NULL,
    MODIFY `mobile` VARCHAR(255) NULL,
    MODIFY `email` VARCHAR(255) NULL,
    MODIFY `website` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `Show` MODIFY `mark` TEXT NULL,
    MODIFY `img` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `Single` MODIFY `tags` TEXT NULL,
    MODIFY `content` LONGTEXT NULL,
    MODIFY `markdown` LONGTEXT NULL;

-- AlterTable
ALTER TABLE `Site` MODIFY `title` VARCHAR(255) NULL,
    MODIFY `logo` VARCHAR(255) NULL,
    MODIFY `keywords` TEXT NULL,
    MODIFY `description` TEXT NULL,
    MODIFY `copyright` TEXT NULL;

-- AlterTable
ALTER TABLE `User` MODIFY `avatar` VARCHAR(255) NULL,
    MODIFY `mark` TEXT NULL,
    MODIFY `signature` TEXT NULL,
    MODIFY `mobile` VARCHAR(255) NULL,
    MODIFY `email` VARCHAR(255) NULL,
    MODIFY `website` VARCHAR(255) NULL;

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
