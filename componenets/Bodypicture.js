import Image from 'next/image'
import mypic from '../asset/myimage.png'
import classes from './Bodypicture.module.css'
const MyImage = () => {
    return (
        <Image className={classes.pictureStyle}
            src={mypic}
            alt="Picture of the author"
            width="3500px"
            height="1500 px"

        />


    )
}

export default MyImage