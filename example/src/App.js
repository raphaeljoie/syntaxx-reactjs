import React from 'react'

import Lowlight from 'lowlight-react'
import 'highlight.js/styles/default.css'
import 'lowlight-react/styles/default.css'

const App = () => {
  const code = `
const text = 'Blabetiblou World!'
console.log(text)`

  return (
    <div style={{background: 'white'}}>
      <h1>Code as property</h1>
      <Lowlight language="javascript" value={code} />
      <h1>Code as children</h1>
      <Lowlight language="javascript">
        {`
const text = 'Blabetiblou World!'
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
      </Lowlight>
    </div>
  )
}

export default App
