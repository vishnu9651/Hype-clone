import React, { useState } from 'react'
import data from '../data'
import styles from "./home.module.css"
import data2 from '../data/data2'
import data3 from '../data/data3'
import { BsArrowRepeat } from "react-icons/bs"
import { BiLockAlt, BiCheck } from "react-icons/bi"
import Footer from '../components/Footer'
import Header from '../components/Header'
import {Slider} from '../components/Slider'
import Slidercomp from '../components/Slider'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    return (

        <>
        <Slider />
            <h1>SNEAKERS</h1>
            <div className={styles.grid}>
                {
                    data.map((el, i) => (
                        <div key={i} className={styles.box}>
                            <div className={styles.heart_div}>
                                <img className={styles.heart} src="https://cdn-icons-png.flaticon.com/128/2961/2961957.png" />
                                <button className={styles.btn}>SALE</button>
                            </div>
                            <img src={el.image} className={styles.image} />
                            <p className={styles.title}>{el.title}</p>
                            <div className={styles.price_list}>
                                <p className={styles.price}>from {el.price}</p>
                                <p className={styles.line}> {el.priceline}</p>
                            </div>

                        </div>
                    ))
                }
            </div>
            <div className={styles.view}><button>VIEW ALL</button></div>

            <h1>STREETWEAR</h1>
            <div className={styles.grid}>
                {
                    data2.map((el, i) => (
                        <div key={i} className={styles.box}>
                            <div className={styles.heart_div}>
                                <img className={styles.heart} src="https://cdn-icons-png.flaticon.com/128/2961/2961957.png" />
                                <button className={styles.btn}>SALE</button>
                            </div>
                            <img src={el.image} className={styles.image} />
                            <p className={styles.title}>{el.title}</p>
                            <div className={styles.price_list}>
                                <p className={styles.price}>from {el.price}</p>
                                <p className={styles.line}> {el.priceline}</p>
                            </div>

                        </div>
                    ))
                }
            </div>

            <div className={styles.view}><button>VIEW ALL</button></div>
            <h1>ACCESSORIES</h1>
            <div className={styles.grid}>
                {
                    data3.map((el, i) => (
                        <div key={i} className={styles.box}>
                            <div className={styles.heart_div}>
                                <img className={styles.heart} src="https://cdn-icons-png.flaticon.com/128/2961/2961957.png" />
                                <button className={styles.btn}>SALE</button>
                            </div>
                            <img src={el.image} className={styles.image} />
                            <p className={styles.title}>{el.title}</p>
                            <div className={styles.price_list}>
                                <p className={styles.price}>from {el.price}</p>
                                <p className={styles.line}> {el.priceline}</p>
                            </div>

                        </div>
                    ))
                }
            </div>
            <div className={styles.view}><button>VIEW ALL</button></div>
            <div className={styles.video}><img style={{ width: "100%", height: "250px;" }} src="https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/defaults/collection_01.webp" /></div>
            <div className={styles.video2}>
                <div><img src="https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/defaults/collection_02.webp" /></div>
                <div><img src="https://hypefly-assets.s3.ap-south-1.amazonaws.com/media/defaults/collection_03.webp" /></div>
            </div>

            <div className={styles.icon}>
                <div><BsArrowRepeat size={50} /><p>Trust</p></div>
                <div><BiLockAlt size={50} /><p>Secure Payments</p></div>
                <div><BiCheck size={50} /><p>Legitimacy</p></div>
            </div>

         


        </>
    )
}

export default Home