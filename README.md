# emotion-modern-normalize

Normalize browsers' default style for [Emotion](https://github.com/emotion-js/emotion) CSS-in-JS library.

The original `modern-normalize` is pulled from [sindresorhus/modern-normalize](https://github.com/sindresorhus/modern-normalize), and parsed into emotion ready format.

## Usage

```sh
yarn add emotion-modern-normalize
```

```js
import { ModernNormalize } from "emotion-modern-normalize";
import { css } from "@emotion/react";

// ...

<ModernNormalize />;
```

## License

The [MIT License](LICENSE)

## Credits

- [modern-normalize](https://github.com/sindresorhus/modern-normalize)
- [emotion-normalize](https://github.com/infinum/emotion-normalize)
- [emotion](https://github.com/emotion-js/emotion)
