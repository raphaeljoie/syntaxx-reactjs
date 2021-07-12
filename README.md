# Lowlight React component
[![NPM](https://img.shields.io/npm/v/lowlight-react.svg)](https://www.npmjs.com/package/lowlight-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Include code snippets like a pro using a light ReactJS wrapper
> around [Lowlight](https://github.com/wooorm/lowlight)

![./example/](./example/doc/screenshot.png)

- [x] **code highlight using [Highlight.js](https://highlightjs.org/)**, including 196 languages and 242 styles
- [x] **line numbering and wrapping** fully css-styleable
- [x] **Optimized experience** both for devs and end users

## Install

```bash
npm install --save lowlight-react
```

## Usage

```jsx
import React from 'react'

import Lowlight from 'lowlight-react'
import 'highlight.js/styles/default.css'
import 'lowlight-react/styles/default.css'

export default function Component() {
  code=`
const c = 'Blabetiblou';
console.log(c);`

  return <Lowlight language='javascript' value={code} />
}
```

## Roadmap
- [ ] Publish on NPM
- [ ] Start line number
- [ ] Mark line
- [ ] Line comment
- [ ] Inline code
- [ ] de-indent
- [ ] optional empty first line removal
- [ ] optionally load languages

## License

MIT © [https://github.com/raphaeljoie](https://github.com/https://github.com/raphaeljoie)
