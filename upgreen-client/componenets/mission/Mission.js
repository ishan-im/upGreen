import Image from 'next/image'
import mypic1 from '../../asset/bg1.png'
import mypic2 from '../../asset/bg2.png'
import classes from './Mission.module.css'

const mission = () => {
    return (
        <div className='container my-5 p-4 '>

            <div className={`${classes.wrapper} row`}>

                <div className={`${classes.bodyWrapper} col-9`}>

                    <h1 className='my-4'>Mission & Vision</h1>

                    <p className={`${classes.test} pl-3 `}>
                        Vision - We are creating a platform for the people who take care of the planet, take responsibility for their actions, and make their decisions based on what is best for the environment and society. With help of our platform, we will build a community that will make a better world.

                        A world without plastic and e-waste!
                        Mission -

                        1. Create a platform for a like-minded community of individuals to provide a living example that environmental sustainability and low/zero plastic and e-waste can be achieved.
                        2. Earn while making the planet a better place!
                        3. Celebrate our accomplishments and have fun!
                        

                    </p>

                    <button type="button" class="btn btn-outline-success my-3">Know More</button>


                    <h1 className='my-5 about_our_product'>About Our Products</h1>
                    <p className={classes.test} >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id temporibus facere animi, voluptatibus ratione, quam aut, eum explicabo repellendus sint alias officiis repudianda Non cupiditate et quod fuga? Quasi ex qui ad commodi perspiciatis illum, hic reprehenderit unde consequatur tempore aut quibusdam, ab, fugiat pariatur? Laboriosam odio nulla cum quidem magni provident molestias!
                        Inventobus, sunt iure praesentium.
                            lorem igiugo llendus sint alias officiis repudianda Non cupiditate et quod fuga? Quasi ex qui ad commodi perspiciatis illum, hic reprehenderit unde consequatur tempore aut quibusdam, ab, fugiat pariatur? Laboriosam odio nulla cum quidem magni provident molestias! Inventobus, sunt iure praesentium. lorem igiugo quos tenetur mollitia cupiditate. Eos suscipit nostrum, earum molestias cumque ea. Autem beatae natus debitis modi assumenda quaerat ipsum, laudantium vero aperiam fro consectetur nesciunt nisi sunt tempore saepe ut sed facere possimus necessitat sit dicta totam eum libero porro fuga corporis ipsum dolorum exercitationem animi iste praesentium illum. Quos mollitia harum expedita ducimus praesentium soluta, tempore at, totam magnam nisi esse quas! e suscipit molestiae tempora vero dolor optio! Sit dolo
                        quos tenetur mollitia cupiditate. Eos suscipit nostrum, earum molestias cumque ea. Autem beatae natus debitis modi assumenda quaerat ipsum, laudantium vero aperiam fro consectetur nesciunt nisi sunt tempore saepe ut sed facere possimus necessitat sit dicta totam eum libero porro fuga corporis ipsum dolorum exercitationem animi iste praesentium illum. Quos mollitia harum expedita ducimus praesentium soluta, tempore at, totam magnam nisi esse quas! e suscipit molestiae tempora vero dolor optio! Sit dolorum ea, beatae quasi exercitationem velit assumenda at repellat accusamus aliquid reprehenderit minima odio provident, architecto labore, quos tempore similique.
                    </p>

                    <button className='btn btn-outline-success mt-4'>
                        Know More
                    </button>
                </div>
                <div className={`${classes.imageWrapper} col-3 mt-5`}>

                    <Image
                        src={mypic2}
                        alt="Picture of the author"
                        width="314px"
                        height="444 px"

                    />

                    <Image className='my-3'
                        src={mypic1}
                        alt="Picture of the author"
                        width="314px"
                        height="444 px"
                    />

                </div>


            </div>
        </div>

    )
}

export default mission