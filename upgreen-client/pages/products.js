import Products from "../componenets/products/Products"

import Footer from "../componenets/footer/Footer"

const products = () => {

    return (
        <div className="container">
            
            <div class=" text-center">
                <div class="card-header my-5">
                    Featured
                </div>
            </div>

            <Products />

            <Footer />

        </div>
    )
}

export default products