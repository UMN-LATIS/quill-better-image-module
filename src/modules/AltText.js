import { BaseModule } from "./BaseModule";
import UniversalAccessIcon from "../icons/universal-access.svg?raw";
import AltTextCSS from "./AltText.css?raw";
export class AltText extends BaseModule {
  onCreate = () => {
    this.altText = document.createElement("div");
    this.altText.classList.add("ql-alt-text");

    Object.assign(this.altText.style, this.options.altTextStyles);

    // inline styles to avoid separate stylesheet import
    this.altText.innerHTML = `
      <style>
          ${AltTextCSS}
      </style>
      <button aria-label="Toggle alt text editor" class="ql-alt-text__button">
        <i class="icon" aria-hidden="true" focusable="false">
          ${UniversalAccessIcon}
        </i>
        <span class="ql-alt-text__label sr-only">Alt Text</span>
      </button>
      <div class="ql-alt-text__editor">
        <textarea
          id="alt-text-input"
          class="ql-alt-text__text-area"
          aria-label="Alt Text"
        >${this.img.alt}</textarea>
      </div>
		`;

    // toggle the alt text editor when the button is clicked
    const toggleEditorButton = this.altText.querySelector(
      ".ql-alt-text__button"
    );
    toggleEditorButton.addEventListener("click", () => {
      this.altText.classList.toggle("ql-alt-text--is-open");
      // visually show label when alt text is open
      this.altText
        .querySelector(".ql-alt-text__label")
        .classList.toggle("sr-only");
    });

    // update alt attribute on input
    const altTextInput = this.altText.querySelector("#alt-text-input");
    altTextInput.addEventListener("input", (event) => {
      event.stopPropagation();
      this.img.alt = event.target.value;
    });

    this.overlay.appendChild(this.altText);
  };
}
