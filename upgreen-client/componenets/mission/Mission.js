import Image from 'next/image'
import mypic1 from '../../asset/bg1.png'
import mypic2 from '../../asset/bg2.png'
import classes from './Mission.module.css'

const mission = () => {
    return (
        <div className="container">


            <div className={classes.mission}>
                <h1>Mission & Vision</h1>

                <p className={classes.test}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et dignissimos iure, quam cum sequi ratione. Repudiandae libero adipisci dolorem exercitationem aliquam, sunt provident quod placeat fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae veritatis quae similique eaque, vel delectus blanditiis. Soluta quibusdam ipsum, beatae delectus doloremque dolorem ea nam quas reiciendis expedita nisi quae ad? Voluptas, cumque sequi maiores voluptate possimus similique perferendis dolores expedita repellendus ipsum praesentium suscipit minus nam, vel, ex cum repellat ipsam unde illum vero soluta? Vitae odit voluptate provident excepturi, maiores obcaecati expedita repellat delectus, nam impedit iusto voluptatem cupiditate beatae ea magni aliquid asperiores, aut totam modi? Assumenda debitis optio hic accusantium molestias reiciendis maiores architecto nam, vero similique, tenetur eligendi nostrum autem veniam libero odit quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum asperiores impedit totam? Tempore maiores incidunt nesciunt sed architecto accusantium nam?
                </p>

                <Image
                    src={mypic2}
                    alt="Picture of the author"
                    width="314px"
                    height="444 px"

                />

                <button> Call to action</button>





                <ul>
                    <li>
                        1st Point
                        1st Point
                        1st Point

                    </li>
                    <li>
                        2nd Point
                    </li>
                    <li>
                        3rd Point
                    </li>
                </ul>

                <h1>About Our Products</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id temporibus facere animi, voluptatibus ratione, quam aut, eum explicabo repellendus sint alias officiis repudiandae suscipit molestiae tempora vero dolor optio! Sit dolorum ea, beatae quasi exercitationem velit assumenda at repellat accusamus aliquid reprehenderit minima odio provident, architecto labore, quos tempore similique.
                </p>

                <button>
                    Know More
                </button>

                <Image
                    src={mypic1}
                    alt="Picture of the author"
                    width="314px"
                    height="444 px"

                />

            </div>
        </div>

    )
}

export default mission