import express, { Application, urlencoded } from "express";
import http, { Server } from "http";
import UserRouter from "./Router/UserRouter";
import OrcamentoRouter from "./Router/OrcamentoRouter";
import ManageTokens from "./Helper/Manage-Token";
import cors from "cors";

class App {
  public app: Application;
  public http: Server;

  constructor() {
    this.app = express();
    this.http = http.createServer(this.app);
    this.middlewares();
    this.RouteMiddleWare();
  }
  public middlewares() {
    this.app.use(express.json());
    this.app.use(
      urlencoded({
        extended: true,
      })
    );
    this.app.use(
      cors({
        origin: "http://localhost:3000",
      })
    );
  }
  public RouteMiddleWare() {
    this.app.use("/user", UserRouter);
    this.app.use("/orcamento", ManageTokens.Checktoken, OrcamentoRouter);
  }
  public ListenPort() {
    this.app.listen(5020, () => {
      console.log("Server Running");
    });
  }
}

const app = new App();

app.ListenPort();
