import React from 'react'
import styles from './Coming.module.css'
const Coming = () => {
  return (
    <div className='coming text-white items-center h-[25vh] flex flex-col justify-around  ' style={{ backgroundImage:'url(https://dge74qcdvkym8.cloudfront.net/assets/coming_soon.jpg)' }}  >
        <h2 className='fluid-type uppercase' >coming soon to mobile</h2>
        <p className=' fluid-typ text-[clamp(14px,1.8cqi,2rem)] text-center max-w-[70vw] ' >We are launching soon on both the App Store and Google Play. Get ready for a seamless experience across all your devices!</p>
    </div>
  )
}

export default Coming