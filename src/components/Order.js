import React from 'react'

export default function Order(props) {
  const { name, size, pepperoni, olives, onions, peppers} = props
  return(
    <div>
        <p>Name: {name}</p>
        <p>Pizza Size: {size}</p>
        <p>Toppings:
        {pepperoni === true ? "Pepperoni": "No Pepperoni"}
        {olives === true ? "Olives": "No Olives"}
        {onions === true ? "Onions": "No Onions"}
        {peppers === true ? "Peppers": "No Peppers"}
        </p>
    </div>
  )
}