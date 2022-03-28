import { Request, Response } from "express";

import { GetHistorysService } from "../services/GetHistorysService";

class GetHistorysController {
  async handle(req: Request, res: Response) {
    const service = new GetHistorysService();

    const historys = await service.execute();

    return res.json(historys);
  }
}

export { GetHistorysController };
