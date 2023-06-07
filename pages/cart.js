import Image from "next/image";
import Layout from "../components/Layout";
import OrderModal from "../components/OrderModal"
import { urlFor } from "../lib/client";
import css from "../styles/Cart.module.css";
import { useStore } from "../store/store";
import toast, {Toaster} from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Cart() {
    const CartData = useStore((state)=>state.cart)
    const removePizza = useStore((state)=>state.removePizza)
    const [PaymentMethod, setPaymentMethod] = useState(null)

    const handleRemove = (i)=> {
        removePizza(i);
        toast.error('Item Removed');
    };
    const router = useRouter();

    const total = ()=> CartData.pizzas.reduce((a,b)=>a+b.quantity * b.price, 0);

    const payOnDelivery = ()=> {
        setPaymentMethod(0);
        typeof window !== 'undefined' && localStorage.setItem('total', total())
    }

    const handleCheckout = async ()=> {
        typeof window !== 'undefined' && localStorage.setItem('total', total())
        setPaymentMethod(1);
        const response = await fetch('/api/stripe', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(CartData.pizzas)
        });

        if(response.status === 500) return;

        const data = await response.json();
        toast.loading("Redirecting...");
        router.push(data.url)
    }


    return(
        <Layout>
            <div className={css.container}>
                <div className={css.details}>
                    <table className={css.table}>
                        <thead>
                            <th>Pizza</th>
                            <th>Name</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </thead>
                        <tbody className={css.tbody}>
                            {CartData.pizzas.length > 0 &&
                            CartData.pizzas.map((pizza, i)=> {
                                const src = urlFor(pizza.image).url()
                                return (
                                    <tr key={i}>
                                        <td>
                                            <Image
                                            loader = {()=> src}
                                            src={src}
                                            className={css.imageTd}
                                            alt=""
                                            width={85}
                                            height={85}
                                            objectFit="cover"
                                            /> 
                                        </td>

                                        <td>
                                            {pizza.name}
                                        </td>

                                        <td>
                                            {
                                                pizza.size === 0 ?
                                                "Small" : 
                                                pizza.size === 1 ?
                                                "Medium" :
                                                "Large"
                                            }
                                        </td>

                                        <td>
                                            {pizza.price}
                                        </td>

                                        <td>
                                            {pizza.quantity}
                                        </td>

                                        <td>
                                            {pizza.price * pizza.quantity}
                                        </td>
                                        <td style={{color: "var(--themeRed)", cursor: "pointer"}} onClick={()=>handleRemove(i)}>x</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className={css.cart}>
                    <span>Cart</span>
                    <div className={css.CartDetails}>
                        <div>
                            <span>Items</span>
                            <span>{CartData.pizzas.length}</span>
                        </div>
                        <div>
                            <span>Total</span>
                            <span><span style={{color: "var(--themeRed)"}}>N</span> {total()}</span>
                        </div>
                    </div>
                    <div className={css.buttons}>
                        <button className="btn" onClick={payOnDelivery}>Pay on Delivery</button>
                        <button className="btn" onClick={handleCheckout}>Pay Now</button>
                    </div>
                </div>
            </div>
            <Toaster/>

            {/* Modal */}
            <OrderModal
            opened = {PaymentMethod === 0}
            setOpened = {setPaymentMethod}
            PaymentMethod = {PaymentMethod}
            />
        </Layout>
    )
}