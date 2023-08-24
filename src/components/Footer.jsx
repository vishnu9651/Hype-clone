import { FaInstagram } from "react-icons/fa"
import { MdOutlineFacebook } from "react-icons/md"
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai"
import { PiWalletLight } from "react-icons/pi"
import styles from "./footer.module.css"
const Footer = () => {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.main}>
                    <div>
                        <img className={styles.logo} src="https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/defaults/store_logo.webp" />
                        <div className={styles.icons}>
                            <FaInstagram size={16}  />
                            <MdOutlineFacebook size={16} />
                            <AiOutlineMail size={16} /></div>
                        <p className={styles.buss}>BUSINESS INQUIRIES</p>
                        <p className={styles.email}> contact@hypefly.co.in</p>
                    </div>
                    <div>
                        <h3>PAGES</h3>
                        <p>Home</p>
                        <p>Sneakers</p>
                        <p>Streetwear</p>
                        <p>About</p>
                        <p>Blog</p>
                    </div>
                    <div>
                        <h3>POLICIES</h3>
                        <p>Return Policy</p>
                        <p>Terms of Service</p>
                        <p>Seller Policy</p>
                        <p>Privacy Policy</p>
                        <p>Shipping Policy</p>
                    </div>
                    <div>
                        <h3>BLOG</h3>
                        <input type="text" placeholder="Your Email Address" />
                        <h3>ACCOUNT</h3>
                        <AiOutlineUser />
                        <PiWalletLight />
                    </div>
                </div>
            </div>

        </>
    )

}
export default Footer