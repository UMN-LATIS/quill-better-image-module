import Quill from "quill";
import QuillBetterImageModule from "../src/index";
import "./style.css";
import "quill/dist/quill.snow.css";

Quill.register("modules/betterImage", QuillBetterImageModule);

const quill = new Quill("#editor", {
  theme: "snow",
  modules: {
    toolbar: true,
    betterImage: {},
  },
});
