import "./index.css";
import { render } from "preact";
import { Form } from "./Form";

const el = document.getElementById("copy-widget");

render(<Form token={el.dataset.token} />, el);
