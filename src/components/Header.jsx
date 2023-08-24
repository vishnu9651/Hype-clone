import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai"
import { CiSearch } from "react-icons/ci"
import { PiWalletLight } from "react-icons/pi"
import styles from "./header.module.css"
const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.logo_h}>
                    <img src="https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/defaults/store_logo.webp" />
                </div>
           
            <div  className={styles.middle}>
                <div>YEEZY MANIA</div>
                <div>Sneakers</div>
                <div>Streetwear</div>
                <div>Accessories</div>
                <div>Under 20K</div>
                <div>Sneaker Care</div>
            </div>
            <div  className={styles.last}>
                <div><CiSearch /></div>
                <div><AiOutlineUser /></div>
               <div><AiOutlineHeart /></div> 
                <div><PiWalletLight /></div>
            </div>
            </div>
        </>
    )
}

export default Header