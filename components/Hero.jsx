import css from '../styles/Hero.module.css'
import Image from 'next/image'
import Cherry from '../assets/Cherry.png'
import HeroImage from '../assets/HeroImage.png'


export default function Hero() {
    return (
        <div className={css.container}>
            {/* left-side */}
            <div className={css.leftSide}>
                <div className={css.cherryText}>
                    <span>More Than Faster</span>
                    <Image src={Cherry} alt="" width={40} height={25}/>
                </div>

                <div className={css.heroText}>
                    <span>Be The Fastest</span>
                    <span>In Delivering</span>
                    <span>Your
                        <span style={{color: "var(--themeRed)"}}> Pizza</span>
                    </span>
                </div>

                <span className={css.miniText}>
                    Our Mission is to keep filling your tummy with delicious food and with 
                    fast delivery time 
                </span>

                <button className={`btn ${css.btn}`}>
                    Get Started
                </button>
            </div>
            {/* right-side */}
            <div className={css.rightSide}>
                <div className={css.imageCont}>
                    <Image src={HeroImage} alt="" layout="intrinsic"/>
                </div>
            </div>
        </div>
    )
}