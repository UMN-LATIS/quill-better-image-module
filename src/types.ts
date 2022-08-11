export type ModuleName = "DisplaySize" | "Toolbar" | "Resize" | "AltText";

export interface ModuleOptions {
  modules?: ModuleName[];
  overlayStyles?: Record<string, string>;
  handleStyles?: Record<string, string>;
  displayStyles?: Record<string, string>;
  toolbarStyles?: Record<string, string>;
  toolbarButtonStyles?: Record<string, string>;
  toolbarButtonSvgStyles?: Record<string, string>;
  altTextStyles?: Record<string, string>;
}

export interface BetterImageModule {
  overlay: HTMLDivElement | null;
  img: HTMLImageElement | null;
  options: ModuleOptions;
  onCreate(): void;
  onUpdate(): void;
  onDestroy(): void;
}
