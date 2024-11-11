import React from 'react'
import Contact from './Contact'
import Pied from './Pied'

const Footer = () => {
  return (
    <>
        <footer class="footer-section" style={{"paddingBottom": "1%"}}>
            <div style={{"width": "90%"}} class="m-auto">
                <Contact />
                <Pied />
            </div>
		</footer>
    </>
  )
}

export default Footer 