import React from 'react'

import Syntaxx from 'syntaxx-reactjs'
import 'highlight.js/styles/default.css'
import 'syntaxx-reactjs/styles/default.css'

export default function App() {
  return (
    <Syntaxx language='javascript'>
      {`
const text = 'Blabetiblou World!'
console.log(text)`}
    </Syntaxx>
  )
}
