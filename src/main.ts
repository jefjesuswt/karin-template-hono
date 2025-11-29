import { KarinFactory, Logger } from "@karin-js/core";
import { HonoAdapter } from "@karin-js/platform-hono";

async function bootstrap() {
  const logger = new Logger("Bootstrap");
  const port = 3000;

  const app = await KarinFactory.create(new HonoAdapter(), {
    scan: "./src/**/*.controller.ts",
  });

  app.listen(port, () => {
    logger.info(`Karin now listening on port ${port}! 🚀`);
  });
}

bootstrap();
