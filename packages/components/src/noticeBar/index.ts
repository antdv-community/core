import type { App } from "vue";
import NoticeBar from "./NoticeBar";

NoticeBar.install = (app: App) => {
  app.component(NoticeBar.name!, NoticeBar);
  return app;
};

export default NoticeBar as typeof NoticeBar;