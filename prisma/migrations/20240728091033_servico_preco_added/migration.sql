/*
  Warnings:

  - Added the required column `preco` to the `Servico` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `servico` ADD COLUMN `preco` DOUBLE NOT NULL;
