import React from 'react'
import { useGlobalContext } from './context'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

const CartItem = ({ id, img, title, price, amount }) => {
  const { removeItem, increase, decrease } = useGlobalContext()
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>{price}</h4>
        <button className='remove-btn' onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div>
        <button className='amount-btn' onClick={() => increase(id)}>
          <IoIosArrowUp />
        </button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn' onClick={() => decrease(id)}>
          <IoIosArrowDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem
