import { Application, Router, RouterContext } from "./deps.ts";
import authController from "./controllers/AuthController.ts";

const app = new Application();
const router = new Router();

router
  .post("/api/login", authController.login) //
  .post("/api/register", authController.register);

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(`Listening on ${hostname || "localhost"}:${port}`);
});

await app.listen({ port: 8000 });
