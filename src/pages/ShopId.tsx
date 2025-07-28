import React from 'react'
import { useParams } from 'react-router-dom'
import { productsData } from '../data/productsData'

export default function ShopId() {
  const { id } = useParams()
  const Products = productsData.find(item => item.id == Number(id))

  return (
    <section>
      <h1>{Products?.title}</h1>
      <h1>{Products?.price}</h1>
      <h1>{Products?.description}</h1>
      <h1>{Products?.category}</h1>
      <h1>{Products?.image}</h1>
    </section>
  )
}
