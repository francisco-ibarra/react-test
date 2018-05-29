import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class ProductStore extends EventEmitter {
    constructor(props) {
        super(props);
        this.products = [],
        this.fetched = false,
        this.fetching = false
    }

    getProducts() {
        return this.products;
    }

    getFetching() {
        return this.fetching;
    }

    getFetched() {
        return this.fetched;
    }

    loadProducts(data) {
        this.products = data;

        this.emit("change");
    }

    filterProducts(text) {

        const filterText = text.toLowerCase();
        const filtered = this.products.filter( product => {
            if(product.name) {
                if (product.name.toLowerCase().includes(text)) {
                    return true;
                }
            }
            if(product.title) {
                if (product.title.toLowerCase().includes(text)) {
                    return true;
                }
            }
            if(product.user.name) {
                if (product.user.name.toLowerCase().includes(text)) {
                    return true;
                }
            }
            return false;
        });

        this.products = filtered;

        this.emit("change");
    }

    toggleFetching() {
        this.fetching = !this.fetching;
    }

    toggleFetched() {
        this.fetched = !this.fetched;
    }

    handleActions(action) {
        switch(action.type){
            case "FETCH_PRODUCTS": {
                this.toggleFetching();
                break;
            }
            case "PRODUCTS_RECEIVED": {
                this.toggleFetching();
                this.loadProducts(action.payload);
                break;
            }
            case "FILTER_PRODUCTS": {
                this.filterProducts(action.payload);
                break;
            }
            default:
                console.log("Sorry, not interested in "+action.type+" action.");
        }
    }

};

const productStore = new ProductStore();
dispatcher.register(productStore.handleActions.bind(productStore));

export default productStore;
