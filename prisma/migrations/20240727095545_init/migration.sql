-- CreateTable
CREATE TABLE `Utilizador` (
    `utilizadorId` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `nif` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `tipo` ENUM('CLIENTE', 'PRESTADOR_DE_SERVICOS') NOT NULL,
    `senha` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Utilizador_nif_key`(`nif`),
    UNIQUE INDEX `Utilizador_email_key`(`email`),
    PRIMARY KEY (`utilizadorId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
