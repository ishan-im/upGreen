import classes from './Work.module.css'
import Image from 'next/image'
import mypic2 from '../../asset/poster.png'

const work = () => {
    return (
        <div className="container">
            <h1 className={classes.bold}>How Does it Work ?</h1>

            <p className={classes.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi labore neque, excepturi tempora at corporis id eveniet, placeat vero eos temporibus corrupti sed facere nobis? Eum odio sed vitae ratione? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, ipsam, eius veniam quaerat et eveniet ipsa perferendis mollitia repudiandae inventore nisi corrupti unde. Consectetur blanditiis molestias explicabo culpa in, deleniti dolores soluta ullam doloremque consequatur animi? Rerum dolorum pariatur in!</p>

            <Image
                src={mypic2}
                alt="Picture of the author"
                width="3140px"
                height="2040 px"

            />

            <br></br>
            <br></br>
            <br></br>

        </div>

    )
}

export default work