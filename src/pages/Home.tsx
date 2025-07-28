import React from 'react'
import { productsData } from '../data/productsData'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <main className='py-4'>
      <section>
        <h1 className='font-semibold'>Products</h1>
        <ul className='flex flex-wrap gap-4 justify-around'>
          {productsData.map((product) => (
            <div key={product.id} className='w-1/5 bg-yellow-200 p-2 cursor-pointer'
              onClick={() => navigate(`/shop/${product.id}`)}
            >
              <div className='flex justify-between gap-2'>
                {product.title}
              </div>
              <div>
                ${product.price}
              </div>
            </div>
          ))}
        </ul>
      </section>
    </main>
  )
}
