# Quill Better Image Module

<!-- This adds some enhancements to the [Quill](https://quilljs.com/) editor images: -->

- Image Resizing
- Editing Alt Text

## Getting Started

```console
npm install @umn-latis/quill-better-image-module
```

or

```console
yarn add @umn-latis/quill-better-image-module
```

## Usage

```js
import Quill from "quill";
import QuillBetterImage from "@umn-latis/quill-better-image-module";

Quill.register("modules/betterImage", QuillBetterImage);

const quill = new Quill(editor, {
  // ...
  modules: {
    // ...
    betterImage: {
      // see DefaultOptions for available options
    },
  },
});
```

See [DefaultOptions](./src/DefaultOptions.ts) for available options.

## Acknoledgements

MIT License

- Image Resizing based on [Quill Image Resize Module](https://github.com/kensnyder/quill-image-resize-module)
