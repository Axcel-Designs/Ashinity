import React from 'react'
import { productsData } from '../data/productsData'
import { useNavigate } from 'react-router-dom'

export default function Cloth() {
  const cloths = productsData.filter(item => item.category === "Footwear")
  const navigate = useNavigate()
  return (
    <section>
      <h1>Footwear</h1>
      <div className='flex flex-wrap gap-4 justify-around'>

        {cloths.map((cloth) => (
          <div key={cloth.id} className='w-1/5 bg-blue-200 p-2 cursor-pointer'
            onClick={() => navigate(`/cloth/${cloth.id}`)}
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
