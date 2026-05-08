import Image from "next/image"
import styles from "./FeatureItem.module.css"
function FeatureItem({icon,title,desc}) {
  return (
    <div className={styles.item}>
        <Image src={icon} width={121} height={109} className={styles.iconbox}
        />
        <div className={styles.textbox}>
        <h2>{title}</h2>
         <p>{desc}</p>
         </div>
    </div>
  )
}

export default FeatureItem