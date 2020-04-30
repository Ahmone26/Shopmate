import React, {useState} from 'react'
import { Link } from '@reach/router'



function Navbar ({ navLinks, background, hoverBackground, linkColor, logo }){
    //const [navOpen, setNavOpen] = useState[false]

    return (
        <nav className="responsive-toolbar"
             style={{background}}> 
             <img src="/images/red.png" alt="" className="logoSlika" />
             <ul style={{background}}>
                 {navLinks.map(link =>
                    <li>
                        <Link 
                                to={link.path} 
                                style={{color: linkColor || '#33333' }}>
                                { link.text }
                        </Link>
                    </li>
                    )}
             </ul>
        </nav>
    )

}
export default Navbar