"use client"
import Image from "next/image";
import Buttons from "./itemPageButtons";
import styles from '@/styles/shop-header.module.css'
import trash from '@/public/trash.svg'
import { cartItemType } from '@/types/cartItemType'
interface propType {
  item: cartItemType,
  id: number
}
export default function CartItem({ props }: propType) {
  console.log(props, typeof(props))
  return (
    <div className={styles.cart_item_wrap} id={props.name + props.price + props.full_price}>
      <div className={styles.cart_details}>
        <Image src={props.link} alt="" width={50} height={50} className={styles.cart_img}/>
        <span>{props.name}</span>
        <span>${props.full_price}</span>
      </div>
      <div className={styles.cart_interactive}>
        <Buttons quantity={props.quantity}/>
        <Image src={trash} alt="" height={20} width={20} className={styles.trash}/>
      </div>
    </div>
  );
}