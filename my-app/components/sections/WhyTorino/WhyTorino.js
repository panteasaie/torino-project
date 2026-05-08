import React from 'react'
import FeatureItem from '../../ui/FeatureItem/FeatureItem'
import styles from "./WhyTorino.module.css"
const features=[{
id:1,icon:"/icons/Group 16.png",title:"بصرفه ترین قیمت",desc:"بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید."
},
{id:2,icon:"/icons/Group 17.png",title:"پشتیبانی",desc:"پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما."},
{id:3,icon:"/icons/Group 18.png",title:"رضایت کاربران", desc:"رضایت بیش از 10هزار کاربر از تور های ما. "}]
function WhyTorino() {
  return (
    <div className={styles.containers}>
        {
            features.map((feature)=>(
                <FeatureItem key={feature.id}
                icon={feature.icon}
                title={feature.title}
                desc={feature.desc}/>
            ))
        }
    </div>
  )
}

export default WhyTorino