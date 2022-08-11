import Quill from "quill";
import QuillBetterImageModule from "../src/index";
import "./style.css";

Quill.register("modules/betterImage", QuillBetterImageModule);

const quill = new Quill("#editor", {
  theme: "snow",
  modules: {
    betterImage: {},
  },
});
