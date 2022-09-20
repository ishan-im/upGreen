import classes from './Button.module.css'

import {GrNext} from 'react-icons/gr'

const Button = () => {
    return (
        <div>
            <button className={classes.button}>
                
                <div>
                Get Started
                    <GrNext size={'1.2em'} style={{position: 'relative', left: '10px'}}/>
                    <GrNext size={'1.2em'} style={{margin: '0'}}/>
                </div>
            </button>
        </div>

    )
}

export default Button