import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateHistoryController } from "./controllers/CreateHistoryController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetHistoryByIdController } from "./controllers/GetHistoryByIdController";
import { GetHistorysController } from "./controllers/GetHistoryController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ProfileUserController } from "./controllers/ProfileUserController";
import { ensureAuthenticated } from "./middlewares/esnsureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle)

router.post('/history', ensureAuthenticated, new CreateHistoryController().handle);

router.get('/history', new GetHistorysController().handle);

router.get("/messages/last3", new GetLast3MessagesController().handle)

router.get("/profile", ensureAuthenticated, new ProfileUserController().handle)

export {router};
