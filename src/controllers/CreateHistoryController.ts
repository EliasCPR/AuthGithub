import { Request, Response } from "express";

import { CreateHistoryService } from "../services/CreateHistoryService";

class CreateHistoryController {
  async handle(req: Request, res: Response) {
    const { history, title } = req.body;

    const {user_id} = req;
    
    const service = new CreateHistoryService();

    const result = await service.execute(history, user_id, title);

    return res.json(result);
  }
}

export { CreateHistoryController };
