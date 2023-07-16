-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deletedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Users_userId_key`(`userId`),
    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ads` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `adId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `material` VARCHAR(191) NOT NULL,
    `size` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Ads_adId_key`(`adId`),
    UNIQUE INDEX `Ads_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bids` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bidId` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `adId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Bids_bidId_key`(`bidId`),
    UNIQUE INDEX `Bids_adId_key`(`adId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Ads` ADD CONSTRAINT `Ads_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bids` ADD CONSTRAINT `Bids_adId_fkey` FOREIGN KEY (`adId`) REFERENCES `Ads`(`adId`) ON DELETE RESTRICT ON UPDATE CASCADE;
