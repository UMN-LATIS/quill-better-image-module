import Quill from "quill";
import { QuillBetterImageModule } from "../src/index";
import "./style.css";

const quill = new Quill("#editor", {
  theme: "snow",
  modules: {
    // betterImage: {},
  },
});
