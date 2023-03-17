import React from 'react'
import NextNProgress from 'nextjs-progressbar';


const ProgressBar = () => {
  return (
    <NextNProgress
      height={1}
      nonce="my-nonce"
      color={'#0072F5'}
    />
  )
}

export default ProgressBar