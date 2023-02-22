import React from 'react'

// This is only needed here because syntaxx-reactjs is imported using relative path
// Otherwise, the import can be anywhere
import 'syntaxx-reactjs/styles/default.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
