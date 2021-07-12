import React from 'react'
import { lowlight } from 'lowlight'

import groupLines from './groupLines'
import toReactComponents from './toReactComponents'

export default function Syntaxx({ language, value, children }) {
  const [reactComponents, setReactComponents] = React.useState([])

  const code = value || children

  React.useEffect(() => {
    const cleanedCode = code.replace(/^\n+/, '')

    const lowlightHighlight = lowlight.highlight(language, cleanedCode)
    // hast representation of the code HTML
    // see: https://github.com/syntax-tree/hast
    const hast = lowlightHighlight.children

    const groupedHast = groupLines(hast || [])

    setReactComponents(groupedHast.map(toReactComponents(0)))
  }, [language, code])

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
