import { Request, Response } from "express";
import { RESERVED_EVENTS } from "socket.io/dist/socket";
import prismaClient from "../prisma";

class GetHistoryByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const history = await prismaClient.history.update({
      where: { id },
      data: {
        history
      }
    })

    return res.json(history);
  }
}

export { GetHistoryByIdController };
