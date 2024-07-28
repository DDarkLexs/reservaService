/*
  Warnings:

  - You are about to drop the column `servicoServicoId` on the `reserva` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `reserva` DROP FOREIGN KEY `Reserva_servicoServicoId_fkey`;

-- AlterTable
ALTER TABLE `reserva` DROP COLUMN `servicoServicoId`,
    ADD COLUMN `servicoId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Reserva` ADD CONSTRAINT `Reserva_servicoId_fkey` FOREIGN KEY (`servicoId`) REFERENCES `Servico`(`servicoId`) ON DELETE SET NULL ON UPDATE CASCADE;
