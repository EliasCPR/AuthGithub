import { serverHttp } from "./app";

const port = 4000;
serverHttp.listen(port, () => console.log(`server is running on PORT ${port}`));