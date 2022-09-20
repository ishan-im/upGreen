import {BsFacebook,BsInstagram,BsLinkedin} from 'react-icons/bs';

import {SiDiscord} from 'react-icons/si';

import classes from './Footer.module.css';

const footer = () => {
    return (
        <div className={`container p-5 ${classes.pageWrapper}`}>
            <div className="row">
                <div className="col-md-6">
                    <h3>Enter your email</h3>
                    <p>Subscribe to our newsletter to get the latest news and updates.</p>
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                     <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    <button type="submit" className="btn btn-success my-3">Submit</button>
                    </div>

                <div className="col-md-6">
                    <h3>Follow Our Story in Social Media</h3>
                    <div className={classes.socialWrapper}>
                    <div className={classes.social}>
                        <BsFacebook/>
                    </div>
                    <div className={`${classes.social} mx-3`}>
                        <BsInstagram/>
                    </div>
                    <div className={classes.social}>
                        <BsLinkedin/>
                    </div>
                    <div className={`${classes.social} mx-3`}>
                        <SiDiscord/>
                    </div>
                    </div>
                    </div>
                    </div>

                    <div className='mt-5'>
                        <p className='text-center'>Made with ❤️ by Ishan, Manas, Subrata</p>
                    </div>

       
        </div>
    )
}


export default footer