/*
  Warnings:

  - Added the required column `estado` to the `Reserva` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reserva` ADD COLUMN `estado` ENUM('PENDENTE', 'ACEITO', 'CONCLUIDO', 'RECUSADO') NOT NULL;
