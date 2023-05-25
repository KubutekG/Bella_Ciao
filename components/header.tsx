"use client";
import Image from "next/image"
import Logo from '../public/Logo.webp'
import '../styles/navbar.css'
export default function Header() {
  const handleBurgerClick = () => {
    let button: any = document.getElementById('nav-toggle')
    let links: any = document.querySelector('.nav-links')
    button.classList.toggle('open')
    links.classList.toggle('open')
  }
  return (
    <>
    <header>
      <nav>
        <a href='/' className="logo-image-link">
          <Image 
          src={Logo} 
          alt='Logo'
          className="logo-img"
        />
        </a>
        <div className="list-and-toggle-wrap">
          <div className="nav-links">
            <ul id="nav-list">
              <li>
                <a href='/menu'>
                  <p>Menu</p>
                </a>
              </li>
              <li>
                <a href='/reservation'>
                  <p>Reservations</p>
                </a>
              </li>
              <li>
                <a href='/catering'>
                  <p>Catering</p>
                </a>
              </li>
              <li>
                <a href='/#contact'>
                  <p>Contact</p>
                </a>
              </li>
              <li>
                <a href='/tech'>
                  <p>Tech</p>
                </a>
              </li>
              <li>
                <a href="/order">
                  <p className="order-list-item">Order</p>
                </a>
              </li>
            </ul>
          </div>
        <a href='/order' className="order-link">
          <button className="button-28" role="button">Order</button>
        </a>
        <button aria-label="toggle menu" id="nav-toggle" onClick={handleBurgerClick}>
          <svg 
          xmlns="http://www.w3.org/2000/svg"
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor" className="openIcon">
            <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor" 
          className="closeIcon">
            <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </nav>
  </header>
  </>
  )
}