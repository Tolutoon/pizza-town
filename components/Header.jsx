import css from '../styles/Header.module.css' 
import Image from 'next/image'
import Logo from '../assets/Logo2.svg'
import {UilShoppingBag} from '@iconscout/react-unicons'
import Link from 'next/link'
import { useStore } from '../store/store';

export default function Header() {
    // const state = useStore((state)=>state)
    // console.log(state)
    const items = useStore((state)=>state.cart.pizzas.length)
    return (
        <div className={css.header}>
            {/* logo side */}
            <Link href='/'>
                <div className={css.logo}>
                    <Image src = {Logo} alt="" width={195} height={50}/>
                </div>
            </Link>

            { /* Menu Side */ }
            <ul className={css.menu}>
                <Link href='/'>
                    <li>Home</li>
                </Link>
                <li>Menu</li>
                <li>Contact</li>
            </ul>

            { /* cart side */ }
            <div className={css.rightside}>
                <Link href='/cart'>
                    <div className={css.cart}>
                        <UilShoppingBag size={35} color="#2E2E2E"/>
                        <div className={css.badge}>{items}</div>
                    </div>
                </Link>
            </div>


        </div>
    )
};