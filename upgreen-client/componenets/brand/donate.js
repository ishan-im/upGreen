import classes from './donate.module.css'
import Link from 'next/link'

const Donate = () => {
    return (
        <div className={`container ${classes.style} p-5`}>
            <div class="d-grid gap-2 col-6 mx-auto">
                <Link href='/form'>
                <button class="btn btn-outline-success mt-4" type="button">DONATE US</button>
                </Link>
                <button class="btn btn-outline-success my-4" type="button">FOR BRANDS - COLABORATE WITH US</button>
            </div>
        </div>
    )

}


export default Donate