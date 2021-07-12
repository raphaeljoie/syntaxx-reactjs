import React from 'react'

function mapChild(child, i, depth) {
  if (child.tagName) {
    return React.createElement(
      child.tagName,
      { key: `lo-${depth}-${i}`, ...child.properties },
      child.children && child.children.map(toReactComponents(depth + 1))
    )
  }

  return child.value
}

function toReactComponents(depth) {
  return function mapChildrenWithDepth(child, i) {
    return mapChild(child, i, depth)
  }
}

export default toReactComponents
