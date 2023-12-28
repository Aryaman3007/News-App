import React, { useEffect, useState } from 'react'

function BackToTop() {
    const [backToTop, setBackToTop] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 600) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            {backToTop && <button 
            onClick={scrollUp}
            className='fixed md:bottom-16 md:right-16 md:h-16 md:w-16 bottom-16 right-2 h-8 w-8 bg-slate-900 flex items-center justify-center rounded-3xl hover:opacity-85'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="22" viewBox="0 0 320 512"><path fill='#ffffff' d="M318 177.5c3.8-8.8 2-19-4.6-26l-136-144C172.9 2.7 166.6 0 160 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26S14.4 192 24 192H96l0 288c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32l0-288h72c9.6 0 18.2-5.7 22-14.5z"/></svg>
            </button>
            }

        </div>
    )
}

export default BackToTop