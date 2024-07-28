import { Reserva } from "@prisma/client";

export class CreateReservaDto implements Pick<Reserva, "utilizadorId" | "" > {}
 