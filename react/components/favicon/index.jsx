import React from 'react'
import { Helmet } from 'vtex.render-runtime'
import favicon from './favicon.ico'

function Favicon() {
  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
    </>
  )
}

export default Favicon