import React from 'react'
import styles from './Plan.module.css'
const Plan = () => {
  return (
        <div className={` ${styles.cont} overflow-hidden flex flex-wrap  md:max-w-[80vw] justify-evenly mx-auto pt-[3em] `}>

                    <div className=" max-md:text-center text-[#025552">
                        <h3 className="fluid-type self-center  ">Plan your weekend getaway easily</h3>
                         <p className="">You can download the app from Playstore and Appstore according
                            to your device requirement.</p>
˙
                        <div className=" max-md:hidden   ">
                            <img className="playstore-icon" src="https://dge74qcdvkym8.cloudfront.net/assets/playstore-icon.png" alt="playstore icon"></img>
                            <img className="appstore-icon" src="https://dge74qcdvkym8.cloudfront.net/assets/appstore-icon.png" alt="appstore icon"></img>
                        </div> 
                    </div>

                    <div className="imgduo flex relative ">
                        <div className=' ' >
                            <img className="  " src="https://dge74qcdvkym8.cloudfront.net/assets/footer_phone_infront.png" alt="preview of phone application infornt"></img>
                            </div>
                        <div className=' absolute right-[-30%] max-h-[70%] bottom-0 ' >
                            <img className="  " src="https://dge74qcdvkym8.cloudfront.net/assets/footer_phone_behind.png" alt="preview of phone application infornt"></img>
                            </div>
                </div>
    </div>
  )
}

export default Plan