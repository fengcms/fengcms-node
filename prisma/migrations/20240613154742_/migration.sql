/*
  Warnings:

  - The `time` column on the `Article` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `time` column on the `Author` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `time` column on the `Channel` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `time` column on the `Editor` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `time` column on the `Links` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `time` column on the `Log` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `time` column on the `Manages` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `time` column on the `Origin` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `time` column on the `Show` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `time` column on the `Single` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `time` column on the `Site` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `time` column on the `Tags` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `time` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE `Article` DROP COLUMN `time`,
    ADD COLUMN `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Author` DROP COLUMN `time`,
    ADD COLUMN `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Channel` DROP COLUMN `time`,
    ADD COLUMN `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Editor` DROP COLUMN `time`,
    ADD COLUMN `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Links` DROP COLUMN `time`,
    ADD COLUMN `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Log` DROP COLUMN `time`,
    ADD COLUMN `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Manages` DROP COLUMN `time`,
    ADD COLUMN `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Origin` DROP COLUMN `time`,
    ADD COLUMN `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Show` DROP COLUMN `time`,
    ADD COLUMN `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Single` DROP COLUMN `time`,
    ADD COLUMN `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Site` DROP COLUMN `time`,
    ADD COLUMN `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Tags` DROP COLUMN `time`,
    ADD COLUMN `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `User` DROP COLUMN `time`,
    ADD COLUMN `time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
