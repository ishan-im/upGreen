import classes from './Products.module.css'

const products = () => {
    return (
        <div className="container">

            <h1 className={classes.heading}>
                Our Products 🪐
            </h1>
            <div className={classes.cardWrapper}>
            <div className={classes.cardStyle}>
                <h2>Product 1</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, et error. Molestias vel dolor perspiciatis adipisci similique facilis quaerat eos tempora, totam ea officiis illo impedit at eaque blanditiis delectus!</p>
            </div>
            <div className={classes.cardStyle}>
                <h2>Product 2</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, et error. Molestias vel dolor perspiciatis adipisci similique facilis quaerat eos tempora, totam ea officiis illo impedit at eaque blanditiis delectus!</p>
            </div>
            <div className={classes.cardStyle}>
                <h2>Product 3</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, et error. Molestias vel dolor perspiciatis adipisci similique facilis quaerat eos tempora, totam ea officiis illo impedit at eaque blanditiis delectus!</p>
            </div>
            </div>
        </div>

    )
}

export default products