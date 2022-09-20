import classes from './Navbar.module.css'

import { FaBuffer } from 'react-icons/fa'
import { HiUser,HiOutlineUserGroup } from 'react-icons/hi'

import Link from 'next/link'

const Navabr = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link href="/">
                <a className="navbar-brand" ><span className={classes.nav_option_color}>Upgreen 🍃</span></a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
              
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav align-items">
                        {/* <a className="nav-link active" aria-current="page" href="#"><i className="fa fa-home" style={{color:'#66ff66'}}></i> <span className={classes.nav_option_color}>Home</span></a> */}
                        <Link href="/products">
                        <a className="nav-link mx-2" ><FaBuffer style={{ color: '#66ff66' }} /> <span className={classes.nav_option_color}>Products</span></a>
                        </Link>

                        <Link href="/colaborate">
                        <a className="nav-link mx-3" ><HiOutlineUserGroup style={{ color: '#66ff66' }} /> <span className={classes.nav_option_color}>Colaborate</span></a>
                        
                        </Link>

                        <Link href="/signin">
                       <a className="nav-link mx-3" ><HiUser style={{ color: '#66ff66' }} /><span className={classes.nav_option_color}> Sign in</span></a>
                       </Link>
                    </div>

                    
                </div>
            </div>
        </nav>
    )


}


export default Navabr