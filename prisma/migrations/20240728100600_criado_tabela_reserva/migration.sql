-- CreateTable
CREATE TABLE `Reserva` (
    `reservaId` INTEGER NOT NULL AUTO_INCREMENT,
    `servicoServicoId` INTEGER NULL,
    `provedorId` INTEGER NULL,
    `clienteId` INTEGER NULL,

    PRIMARY KEY (`reservaId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Reserva` ADD CONSTRAINT `Reserva_servicoServicoId_fkey` FOREIGN KEY (`servicoServicoId`) REFERENCES `Servico`(`servicoId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reserva` ADD CONSTRAINT `Reserva_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Utilizador`(`utilizadorId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Reserva` ADD CONSTRAINT `Reserva_provedorId_fkey` FOREIGN KEY (`provedorId`) REFERENCES `Utilizador`(`utilizadorId`) ON DELETE SET NULL ON UPDATE CASCADE;
