import classes from './Navbar.module.css'

import {FaBuffer} from 'react-icons/fa'
import {HiUser} from 'react-icons/hi'

const Navabr = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><span className={classes.nav_option_color}>Upgreen</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav align-items">
                        <a className="nav-link active" aria-current="page" href="#"><i class="fa fa-home" style={{color:'#66ff66'}}></i> <span className={classes.nav_option_color}>Home</span></a>
                        <a className="nav-link" href="#"><FaBuffer style={{color:'#66ff66'}}/> <span className={classes.nav_option_color}>Features</span></a>
                          <a className="nav-link" href="#"><HiUser style={{color:'#66ff66'}}/><span className={classes.nav_option_color}> Sign in</span></a>
                       
                    </div>
                </div>
            </div>
        </nav>
    )


}


export default Navabr