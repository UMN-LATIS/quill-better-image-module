import { BaseModule } from "./BaseModule";

export class DisplaySize extends BaseModule {
  onCreate = () => {
    // Create the container to hold the size display
    this.display = document.createElement("div");

    // Apply styles
    Object.assign(this.display.style, this.options.displayStyles);

    // Attach it
    this.overlay.appendChild(this.display);
  };

  onDestroy = () => {};

  onUpdate = () => {
    if (!this.display || !this.img) {
      return;
    }

    const size = this.getCurrentSize();
    this.display.innerHTML = size.join(" &times; ");
  };

  getCurrentSize = () => [
    this.img.width,
    Math.round(
      (this.img.width / this.img.naturalWidth) * this.img.naturalHeight
    ),
  ];
}
