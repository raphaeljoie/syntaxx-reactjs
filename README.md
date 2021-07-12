# Syntaxx ReactJS
[![NPM](https://img.shields.io/npm/v/syntaxx-reactjs.svg)](https://www.npmjs.com/package/syntaxx-reactjs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Highlight code syntax like pro using a truly light wrapper
> around the amazing [Lowlight](https://github.com/wooorm/lowlight)

![./example/](./example/doc/screenshot.png)

- [x] **code highlight using [Highlight.js](https://highlightjs.org/)**, including 196 languages and 242 styles
- [x] **line numbering and wrapping** fully css-styleable
- [x] **Optimized experience** both for devs and end users

**Contents**
- [Install](#install)
- [Basic usage](#basic-usage)
- [Configuration](#configuration)
- [Roadmap](#roadmap)
- [License](#license)

---
## Install

```bash
npm install --save syntaxx-reactjs
```

## Basic usage

```jsx
import React from 'react'

import Syntaxx from 'syntaxx-reactjs'
import 'highlight.js/styles/default.css'
import 'syntaxx-reactjs/styles/default.css'

export default function Component() {
  code=`
const c = 'Blabetiblou';
console.log(c);`

  return <Syntaxx language='javascript' value={code} />
}
```

---

## Configuration

### Properties

| Prop name | default value | description
| --- | --- | --- |
| `language`  | (required) | expected programming language to be highlighted. See available values in [Highlight.js doc](https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md)
| `value` | | code to be highlighted
| `firstLineNumber` | 1 | Starting value for the line numbering

## Roadmap
- [ ] Publish on NPM
- [x] Start line number
- [ ] Mark line
- [ ] Line comment
- [ ] Inline code
- [ ] de-indent
- [ ] optional empty first line removal
- [ ] optionally load languages

## License

MIT © [https://github.com/raphaeljoie](https://github.com/https://github.com/raphaeljoie)
