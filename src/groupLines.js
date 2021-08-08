const cloneHastNode = ({ children, type, value, properties, tagName }) => {
  return {
    type,
    value,
    tagName,
    children: children ? children.map(cloneHastNode) : null,
    properties: { ...properties }
  }
}

const splitNewLine = (hastNode) => {
  if (hastNode.type === 'text') {
    // HAST node is a text node, it can't have a child

    if (hastNode.value.indexOf('\n') === -1) {
      return [hastNode]
    } else {
      const texts = hastNode.value.split('\n')

      return texts.map((text, index) => {
        return {
          type: 'text',
          value: text
        }
      })
    }
  } else if (hastNode.children && hastNode.children.length) {
    // HAST node is an element with at least on child

    const { children, ...newParent } = hastNode
    newParent.children = []

    const out = [cloneHastNode(newParent)]
    children.forEach((childHastNode) => {
      const hastLineNodes = splitNewLine(childHastNode)
      hastLineNodes.forEach((hastLineNode, index) => {
        if (index > 0) {
          out.push(cloneHastNode(newParent))
        }

        out[out.length - 1].children.push(hastLineNode)
      })
    })

    return out
  } else {
    // element without children
    return [cloneHastNode(hastNode)]
  }
}

const newLine = (num) => {
  return [
    {
      type: 'element',
      tagName: 'span',
      properties: { style: { gridColumn: 1 } },
      children: [
        {
          type: 'text',
          value: num
        }
      ]
    },
    {
      type: 'element',
      tagName: 'span',
      properties: { style: { gridColumn: 2, whiteSpace: 'pre-wrap' } },
      children: []
    }
  ]
}

/**
 * Takes a HAST representation of the highlighted code and generate a HAST
 * representation of the same code, but the lines grouped
 */
const groupLines = (hastNodes, firstLineNumber) => {
  // output contains at least one empty line
  let hastNodesOutput = newLine(firstLineNumber)

  if (!hastNodes) return hastNodesOutput

  // Loop through the HAST nodes of the highlighted code
  hastNodes.forEach((hastNode) => {
    // split each node at new line
    const hastLineNodes = splitNewLine(hastNode)

    // Add the split nodes to the output.
    hastLineNodes.forEach((hastLineNode, index) => {
      // Start a new line before the addition of a new element, if there are
      // more than one.
      if (index > 0) {
        hastNodesOutput = [
          ...hastNodesOutput,
          ...newLine(hastNodesOutput.length / 2 + firstLineNumber)
        ]
      }

      hastNodesOutput[hastNodesOutput.length - 1].children.push(hastLineNode)
    })
  })

  return hastNodesOutput
}

export default groupLines
