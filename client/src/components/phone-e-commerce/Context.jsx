import { createContext } from "react";
import { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = createContext();

class ProductProvider extends Component {
    state = {
        products: [], 
        detailProduct: detailProduct, 
        // cart: [], 
        cart: storeProducts, 
        isModalOpen: false, 
        modalProduct: detailProduct, 
        total: 0, 
        tax: 0, 
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
        const product = this.state.products.find(product => product.id == id);
        return product;
    }

    handleDetails = (id) => {
        const product = this.getProductByID(id);
        this.setState(() => {
            return {detailProduct: product};
        })
    }

    addToCart = (id) => {
        // console.log("added to cart");
        const newProducts = [...this.state.products];
        const index = newProducts.indexOf(this.getProductByID(id));
        const product = newProducts[index];
        // console.log(newProducts);
        product.inCart = true;
        // console.log(newProducts);
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return {
                products: newProducts, 
                detailProduct: product, 
                cart: [...this.state.cart, product]
            };
        })
    }

    openModal = (id) => {
        const product = this.getProductByID(id);
        this.setState(() => {
            return {
                modalProduct: product, 
                isModalOpen: true
            };
        })
    }

    closeModal = () => {
        this.setState(() => {
            return {isModalOpen: false};
        })
    }

    increment = (id) => {
        console.log("increment");
    }

    decrement = (id) => {
        console.log("decrement");
    }

    removeItem = (id) => {
        console.log("removeItem");
    }

    clearCart = (id) => {
        console.log("clearCart");
    }

    render() {
        return (
            <ProductContext.Provider 
                value={{
                    ...this.state, 
                    handleDetails: this.handleDetails, 
                    addToCart: this.addToCart, 
                    openModal: this.openModal, 
                    closeModal: this.closeModal, 
                    increment: this.increment, 
                    decrement: this.decrement, 
                    removeItem: this.removeItem, 
                    clearCart: this.clearCart
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