import React from 'react'

import Syntaxx from 'syntaxx-reactjs'
import 'highlight.js/styles/default.css'
import 'syntaxx-reactjs/styles/default.css'

// Load any languages you want to use
// (see https://github.com/isagalaev/highlight.js/tree/master/src/languages)
import javascript from 'highlight.js/lib/languages/javascript'

// Then register them with lowlight
Syntaxx.registerLanguage('javascript', javascript)

export default function App() {
  return (
    <Syntaxx language='javascript'>
      {`
const text = 'Blabetiblou World!'
console.log(text)`}
    </Syntaxx>
  )
}
