import React from 'react'
import { Facebook, LinkedIn, GitHub } from '@material-ui/icons'
import '../styles/footer.css'


function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <a href='https://www.facebook.com/inshal.ayaz/' target='_blank' rel='noreferrer'>
                    <Facebook />
                </a>
                <a href='https://www.linkedin.com/in/inshal-ayaz-a2908b1a0/' target='_blank' rel='noreferrer'>
                    <LinkedIn />
                </a>
                <a href='https://github.com/inshalayaz' target='_blank' rel='noreferrer'>
                    <GitHub />
                </a>
            </div>
                <p> &copy; 2021 awesomepizza.com </p>
        </div>
    )
}

export default Footer
