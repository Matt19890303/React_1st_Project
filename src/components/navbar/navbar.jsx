import React from 'react'
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="antialiased bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl px-2 py-4 mx-auto 2xl:px-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="shrink-0">
              <a href="/" title="" className="">
                <img className="block w-auto h-8 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg" alt="" />
                <img className="hidden w-auto h-8 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg" alt="" />
              </a>
            </div>
            <ul className="items-center justify-start hidden gap-6 py-3 lg:flex md:gap-8 sm:justify-center">
              <li>
                <a href="#" title="" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">Home</a>
              </li>
              <li className="shrink-0">
                <a href="#" title="" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">Best Sellers</a>
              </li>
              <li className="shrink-0">
                <a href="#" title="" className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">Gift Ideas</a>
              </li>
              <li className="shrink-0">
                <a href="#" title="" className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">Today's Deals</a>
              </li>
              <li className="shrink-0">
                <a href="#" title="" className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">Sell</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center border-2 border-red-500 lg:space-x-2">
            <button id="myCartDropdownButton1" data-dropdown-toggle="myCartDropdown1" type="button" className="inline-flex items-center justify-center p-2 text-sm font-medium leading-none text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
              <span className="sr-only">Cart</span>
              <svg className="w-5 h-5 lg:me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
              </svg>
              <span className="hidden sm:flex">My Cart</span>
              <svg className="hidden w-4 h-4 text-gray-900 sm:flex dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
              </svg>
            </button>
            {/* Cart dropdown content */}
            <div id="myCartDropdown1" className="z-10 hidden max-w-sm p-4 mx-auto space-y-4 overflow-hidden antialiased bg-white rounded-lg shadow-lg dark:bg-gray-800">
              {/* Cart items */}
            </div>
            {/* User dropdown button and content */}
            <Link to="/sign-in" id="userDropdownButton1" data-dropdown-toggle="userDropdown1" type="button" className="inline-flex items-center justify-center p-2 text-sm font-medium leading-none text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
              <svg className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              </svg>
              Sign-in
              <svg className="w-4 h-4 text-gray-900 dark:text-white ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
              </svg>
            </Link>
            {/* Mobile menu button */}
            <button type="button" data-collapse-toggle="ecommerce-navbar-menu-1" aria-controls="ecommerce-navbar-menu-1" aria-expanded="false" className="inline-flex items-center justify-center p-2 text-gray-900 border-2 border-red-500 rounded-md lg:hidden hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white">
              <span className="sr-only">Open Menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div id="ecommerce-navbar-menu-1" className="hidden px-4 py-3 mt-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <ul className="space-y-3 text-sm font-medium text-gray-900 dark:text-white">
            <li><a href="#" className="hover:text-primary-700 dark:hover:text-primary-500">Home</a></li>
            <li><a href="#" className="hover:text-primary-700 dark:hover:text-primary-500">Best Sellers</a></li>
            <li><a href="#" className="hover:text-primary-700 dark:hover:text-primary-500">Gift Ideas</a></li>
            <li><a href="#" className="hover:text-primary-700 dark:hover:text-primary-500">Games</a></li>
            <li><a href="#" className="hover:text-primary-700 dark:hover:text-primary-500">Electronics</a></li>
            <li><a href="#" className="hover:text-primary-700 dark:hover:text-primary-500">Home & Garden</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
