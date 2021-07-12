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
    const { children, ...newParent } = hastNode
    newParent.children = []

    const out = [cloneHastNode(newParent)]
    children.forEach((childHastNode) => {
      const hastLineNodes = splitNewLine(childHastNode)
      hastLineNodes.forEach((hastLineNode, index) => {
        out[out.length - 1].children.push(hastLineNode)
        if (index + 1 < hastLineNode.length) {
          out.push(cloneHastNode(newParent))
        }
      })
    })

    return out
  } else {
    return [hastNode]
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

const groupLines = (hastNodes, firstLineNumber) => {
  // list of HAST nodes
  let hastNodesOutput = newLine(firstLineNumber)
  hastNodes.forEach((hastNode) => {
    // list HAST nodes
    const hastLineNodes = splitNewLine(hastNode)

    hastLineNodes.forEach((hastLineNode, index) => {
      hastNodesOutput[hastNodesOutput.length - 1].children.push(hastLineNode)
      if (index + 1 < hastLineNodes.length) {
        hastNodesOutput = [
          ...hastNodesOutput,
          ...newLine(hastNodesOutput.length / 2 + firstLineNumber)
        ]
      }
    })
  })

  return hastNodesOutput
}

export default groupLines
