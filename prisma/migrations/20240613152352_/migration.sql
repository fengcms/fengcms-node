/*
  Warnings:

  - Changed the type of `time` on the `Article` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `time` on the `Author` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `time` on the `Channel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `time` on the `Editor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `time` on the `Links` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `time` on the `Log` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `time` on the `Manages` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `time` on the `Origin` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `time` on the `Show` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `time` on the `Single` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `time` on the `Site` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `time` on the `Tags` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `time` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE `Article` DROP COLUMN `time`,
    ADD COLUMN `time` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `Author` DROP COLUMN `time`,
    ADD COLUMN `time` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `Channel` DROP COLUMN `time`,
    ADD COLUMN `time` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `Editor` DROP COLUMN `time`,
    ADD COLUMN `time` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `Links` DROP COLUMN `time`,
    ADD COLUMN `time` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `Log` DROP COLUMN `time`,
    ADD COLUMN `time` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `Manages` DROP COLUMN `time`,
    ADD COLUMN `time` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `Origin` DROP COLUMN `time`,
    ADD COLUMN `time` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `Show` DROP COLUMN `time`,
    ADD COLUMN `time` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `Single` DROP COLUMN `time`,
    ADD COLUMN `time` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `Site` DROP COLUMN `time`,
    ADD COLUMN `time` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `Tags` DROP COLUMN `time`,
    ADD COLUMN `time` TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `time`,
    ADD COLUMN `time` TIMESTAMP NOT NULL;
