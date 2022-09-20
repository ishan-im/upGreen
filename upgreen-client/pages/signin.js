
import classes from '../styles/SignIn.module.css'

import {FcGoogle} from 'react-icons/fc'

import Link from 'next/link';

const signin = () => {
  return (
    <div className="container my-4 p-5">
      <h1 style={{ textAlign: "center" }}>Sign In</h1>
        <div className="row">
            <div className="col-md-7">
      <div className={`container ${classes.formWrapper}`}>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
        
      </form>
      </div>
      </div>

        <div className="col-md-5">

            <h4 className='p-3 text-center'>Sign In using Google</h4>

            <div className={classes.buttonWrapper}>
             <FcGoogle size={`2em`}/>
            </div>
            <div className='p-5 text-center'>
        <Link href='/signUp'>
            <a>Don't have an account? sign up</a>
        </Link>
        </div>
        </div>

    </div>
    </div>
  );
};

export default signin;
