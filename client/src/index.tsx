/* @refresh reload */
import { init } from "@infrastructure/wasm/initializeWasm";
import { render } from "solid-js/web";
import App from "./App";
import "./reset.css";

await init();

render(() => <App />, document.getElementById("root") as HTMLElement);
