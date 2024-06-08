import { App } from "./app.js";
import { Dummy } from "./ui/Dummy.js";

const bootstrap = () => {
  const app = document.getElementById("root");
  if (app) {
    const AppComponent = App({ renderFrame: app });
    const DummyComponent = Dummy({ parentComponent: AppComponent });
    // First init for dummy, dummy make sub
    DummyComponent.mount();
    // app mount, and trigger subs
    AppComponent.mount();
  }
};
window.onload = () => {
  bootstrap();
};
