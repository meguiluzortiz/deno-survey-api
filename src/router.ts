import { Router, RouterContext } from "./deps.ts";
import authController from "./controllers/AuthController.ts";

const router = new Router();

router //
  .get("/", (ctx: RouterContext) => {
    ctx.response.body = "Hello world";
  })
  .post("/login", authController.login)
  .post("/register", authController.register);

export default router;
