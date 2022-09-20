import classes from './User.module.css'

import {BsStar,BsStarHalf,BsFacebook,BsTwitter,BsWhatsapp} from 'react-icons/bs'

import {RiCopperCoinLine} from 'react-icons/ri'

import Image from 'next/image'

const User = ()=>{
    return (
        <div className="container m-5">

            <div className={classes.userWrapper}>
                <div className={classes.userImage}>
                    <Image src='https://via.placeholder.com/90x90.png?000000/FFFFFF/?text=IPaddress.net' width={90} height={90} style={{borderRadius:'50px'}} />
                    
                </div>
                <div className={classes.userDetails}>
                    <h5>Username</h5>

                    <BsStar/>
                    <BsStar/>
                    <BsStar/>
                    <BsStar/>
                    <BsStarHalf/>

                </div>
            <div className='container'>
            <div className={classes.coinWrapper}>

                <RiCopperCoinLine size={'2em'} style={{color: 'black'}}/> 150 

            </div>
            </div>

            </div>

            <div className={classes.iconWrapper}>
                <BsFacebook size={'2em'} style={{margin: '5px'}}/>
                <BsTwitter size={'2em'} style={{margin: '10px'}}/>
                <BsWhatsapp size={'2em'} style={{margin: '5px'}}/>
            </div>

        </div>
    )
}


export default User