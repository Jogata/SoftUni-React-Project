import { createContext } from "react";
import { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = createContext();

class ProductProvider extends Component {
    state = {
        // products: storeProducts, 
        products: [], 
        detailProduct: detailProduct
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        const newProducts = [];
        storeProducts.forEach(product => {
            const newProduct = {...product};
            newProducts.push(newProduct);
        })
        this.setState(() => {
            return {products: newProducts};
        })
    }

    getProductByID = (id) => {
        // console.log(this.state.products);
        // console.log(id);
        const product = this.state.products.find(product => product.id == id);
        // console.log(product);
        return product;
    }

    handleDetails = (id) => {
        // console.log(this);
        const product = this.getProductByID(id);
        // console.log(product);
        this.setState(() => {
            return {detailProduct: product};
        })
    }

    addToCart = () => {
        console.log("added to cart");
    }

    render() {
        // console.log(ProductProvider.prototype);
        return (
            <ProductContext.Provider 
                value={{
                    ...this.state, 
                    handleDetails: this.handleDetails, 
                    addToCart: this.addToCart, 
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {
    ProductProvider, 
    ProductConsumer
}