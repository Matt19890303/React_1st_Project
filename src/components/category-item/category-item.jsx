import React from 'react'
import categoriesData from '../../data/categories.json';

export const CategoryItem = () => {
  return (
    <>
    <div className="categories-container grid grid-cols-12 gap-4 p-4">
        {categoriesData.map((category, index) => (
            <div
                key={category.id}
                className={`category-container relative flex items-center justify-center border border-black shadow-md min-h-[240px] lg:min-h-[380px] overflow-hidden group hover:cursor-pointer 
                ${index < 3 ? 'col-span-12 md:col-span-6 lg:col-span-4' : ''}
                ${index === 3 ? 'col-span-12 md:col-span-7 lg:col-span-6' : ''}
                ${index === 4 ? 'col-span-12 md:col-span-5 lg:col-span-6' : ''}
                ${index === 5 ? 'col-span-12 md:col-span-12 lg:col-span-12' : ''}`}>
                <div
                    className="background-image absolute w-full h-full bg-cover bg-center transition-transform duration-[6000ms] ease-[cubic-bezier(0.25,0.45,0.45,0.95)] group-hover:scale-110"
                    style={{ backgroundImage: `url(${category.image})` }}>
                </div>
                <div className="category-body-container relative z-10 flex flex-col items-center justify-center bg-white opacity-70 group-hover:opacity-90 p-6 border border-black">
                    <h2 className="text-xl font-bold text-gray-700">{category.title}</h2>
                    <p className="text-sm font-light">Shop Now</p>
                </div>
            </div>
        ))}
    </div>
    </>
  )
}
