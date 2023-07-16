/*
  Warnings:

  - Added the required column `userId` to the `Bids` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Bids` ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Bids` ADD CONSTRAINT `Bids_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;
