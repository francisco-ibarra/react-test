import React, { Component } from 'react';

import Filter from './Filter'
import Product from './Product'

import ProductStore from '../stores/ProductStore';
import * as ProductActions from '../actions/ProductActions';

export default class Products extends Component {

    constructor(props) {
        super(props);
        this.updateProducts = this.updateProducts.bind(this);
        this.state = {
            //products: ProductStore.getProducts()
            products: [],
            fetched: false,
            fetching: false,
            filtered: false,
        };
    }

    componentDidMount() {
        if(!this.state.products.length){
            ProductActions.getProducts();
        }
    }

    componentWillMount() {
        ProductStore.on("change", this.updateProducts);
    }

    componentWillUnmount() {
        ProductStore.removeListener("change", this.updateProducts);
    }

    updateProducts() {
        this.setState({
            products: ProductStore.getProducts(),
            fetching: ProductStore.getFetching(),
            fetched: ProductStore.getFetched()
        });
    }

    filterProducts(string) {
        ProductActions.filterProducts(string);
    }

    render() {
        const { products } = this.state;

        const ProductComponents = products.map((product) => {
            return <Product key={product.id} {...product} />;
        });

        return (
            <div>
                <Filter goClick={this.filterProducts}/>
                <div>{ProductComponents}</div>
            </div>
        );
    }
}