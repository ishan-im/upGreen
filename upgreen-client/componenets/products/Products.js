import classes from './Products.module.css'
import Image from 'next/image'
import mypic1 from '../../asset/paperbag2.png'
import mypic2 from '../../asset/jutebag2.png'
import mypic3 from '../../asset/flrvass.png'

const products = () => {
    return (
        <div className={`container ${classes.wrapper}`}>

            <h1 className={classes.heading}>
                Our Products 🍃
            </h1>
            <div className={classes.cardWrapper}>
                <div className={classes.cardStyle}>
                    <h2>Paper Bag</h2>
                    <div className="imagewrapper">
                        <Image className={classes.pictureStyle}
                            src={mypic2}
                            alt="Picture of the author"
                            width="200%"
                            height="190%"
                        // layout='responsive'

                        />
                    </div>
                    <button className='btn btn-outline-success'>Buy Now</button>
                    <button className='mx-2 btn btn-outline-success' >Add to cart</button>
                </div>
                <div className={classes.cardStyle}>
                    <h2>Jute Bag</h2>
                    <div className="imagewrapper">
                        <Image className={classes.pictureStyle}
                            src={mypic1}
                            alt="Picture of the author"
                            width="200%"
                            height="190%"
                        // layout='responsive'

                        />
                    </div>

                    <button className='btn btn-outline-success'>Buy Now</button>
                    <button className='mx-2 btn btn-outline-success' >Add to cart</button>
                </div>
                <div className={classes.cardStyle}>
                    <h2>Flower Vase</h2>
                    <div className="imagewrapper">
                        <Image className={classes.pictureStyle}
                            src={mypic3}
                            alt="Picture of the author"
                            width="200%"
                            height="190%"
                        // layout='responsive'

                        />
                    </div>
                    <button className='btn btn-outline-success'>Buy Now</button>
                    <button className='mx-2 btn btn-outline-success' >Add to cart</button>
                </div>
            </div>
        </div>

    )
}

export default products