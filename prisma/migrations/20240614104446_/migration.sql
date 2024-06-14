/*
  Warnings:

  - Added the required column `salt` to the `Editor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salt` to the `Manages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Editor` ADD COLUMN `salt` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `Manages` ADD COLUMN `salt` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `salt` VARCHAR(255) NOT NULL;
