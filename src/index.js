import React from 'react'
import { lowlight } from 'lowlight'

import groupLines from './groupLines'
import toReactComponents from './toReactComponents'

const Syntaxx = ({ language, value, children, firstLineNumber }) => {
  const [reactComponents, setReactComponents] = React.useState([])

  const code = children || value

  React.useEffect(() => {
    // Remove blank first line
    const cleanedCode = code.replace(/^\n/, '')

    const lowlightHighlight = lowlight.highlight(language, cleanedCode)
    // hast representation of the code HTML
    // see: https://github.com/syntax-tree/hast
    const hast = lowlightHighlight.children

    const groupedHast = groupLines(hast || [], firstLineNumber)

    setReactComponents(groupedHast.map(toReactComponents(0)))
  }, [language, code, firstLineNumber])

  return (
    <pre>
      <code>
        <span
          className='syntaxx-grid'
          style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}
        >
          {reactComponents}
        </span>
      </code>
    </pre>
  )
}

Syntaxx.defaultProps = {
  firstLineNumber: 1
}

Syntaxx.registerLanguage = (language, syntax) => {
  lowlight.registerLanguage(language, syntax)
}

export default Syntaxx
