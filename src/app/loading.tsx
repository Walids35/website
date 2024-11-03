import { calistoga } from '@/fonts/calistoga'
import React from 'react'

const loading = () => {
  return (
    <div className='h-[80vh] flex justify-center items-center'>
            <div className={calistoga.className}>Loading...</div>
    </div>
  )
}

export default loading