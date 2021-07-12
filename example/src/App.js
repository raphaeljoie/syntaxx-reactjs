import React from 'react'

import Syntaxx from 'syntaxx-reactjs'
import 'highlight.js/styles/default.css'
import 'syntaxx-reactjs/styles/default.css'

const App = () => {
  const code = `
const text = 'Blabetiblou World!'
console.log(text)`

  return (
    <div style={{padding: 30}}>
      <h1>Code as property</h1>
      <Syntaxx language="javascript" value={code} firstLineNumber={12} />
      <h1>Code as children</h1>
      <Syntaxx language="javascript">
        {`
const text = 'Blabetiblou World! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh sapien, imperdiet a est eu, consequat dictum mauris. Etiam porttitor justo ac lorem ultrices tincidunt. In eu est dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam bibendum est in lorem varius euismod.'
console.log(text)

// don't execute !
while (true) {
  const otherText = 'foo'
  console.log('infinite loop')
}

function neverDeclared() {
  return true
}
`}
      </Syntaxx>
    </div>
  )
}

export default App
