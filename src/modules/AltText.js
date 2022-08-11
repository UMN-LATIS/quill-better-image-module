import { BaseModule } from "./BaseModule";

export class AltText extends BaseModule {
  onCreate = () => {
    this.altText = document.createElement("div");
    this.altText.classList.add("ql-alt-text");

    Object.assign(this.altText.style, this.options.altTextStyles);

    this.altText.innerHTML = `
			<div class="alt-text-editor-container" style="display: flex; flex-direction: column; gap: 0.25rem;">
					<label for="alt-text-input">Alt Text</label>
          <small style="color: #666;">Alt text is used by screen readers for people who might have trouble seeing your content.</small>
          <textarea id="alt-text-input" style="resize: vertical;" rows="4">${this.img.alt}</textarea>
			</div>
		`;

    const altTextInput = this.altText.querySelector("#alt-text-input");

    altTextInput.addEventListener("input", (event) => {
      event.stopPropagation();
      this.img.alt = event.target.value;
    });

    this.overlay.appendChild(this.altText);
  };

  // This will be destroyed when the overlay is removed
  onDestroy = () => {};

  // Nothing to update on drag because we are are positioned relative to the overlay
  onUpdate = () => {};
}
