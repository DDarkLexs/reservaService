/*
  Warnings:

  - Added the required column `updated` to the `Utilizador` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `utilizador` ADD COLUMN `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `Servico` (
    `servicoId` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `utilizadorId` INTEGER NULL,

    PRIMARY KEY (`servicoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Servico` ADD CONSTRAINT `Servico_utilizadorId_fkey` FOREIGN KEY (`utilizadorId`) REFERENCES `Utilizador`(`utilizadorId`) ON DELETE SET NULL ON UPDATE CASCADE;
