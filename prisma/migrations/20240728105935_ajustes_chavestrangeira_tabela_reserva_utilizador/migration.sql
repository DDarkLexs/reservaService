/*
  Warnings:

  - You are about to drop the column `provedorId` on the `reserva` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `reserva` DROP FOREIGN KEY `Reserva_provedorId_fkey`;

-- AlterTable
ALTER TABLE `reserva` DROP COLUMN `provedorId`;
