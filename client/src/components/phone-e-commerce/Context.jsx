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

    handleDetail = () => {
        console.log("details component");
    }

    addToCart = () => {
        console.log("added to cart");
    }

    render() {
        return (
            <ProductContext.Provider 
                value={{
                    ...this.state, 
                    handleDetail: this.handleDetail, 
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