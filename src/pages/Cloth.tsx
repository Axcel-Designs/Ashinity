import React from 'react'
import { productsData } from '../data/productsData'
import { useNavigate } from 'react-router-dom'

export default function Cloth() {
  const cloths = productsData.filter(item => item.category.name === "Clothes")
  const navigate = useNavigate()
  return (
    <section>
      <h1>Clothes</h1>
      <div className='flex flex-wrap gap-4 justify-around'>
        {cloths.map((cloth) => (
          <div key={cloth.slug} className='w-1/5 bg-blue-200 p-2 rounded-lg cursor-pointer'
            onClick={() => navigate(`/cloth/${cloth.slug}`)}
          >
            <div className='flex justify-between gap-2'>
              {cloth.title}
            </div>
            <div>
              ${cloth.price}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
