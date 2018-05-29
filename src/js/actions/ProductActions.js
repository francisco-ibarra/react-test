import dispatcher from '../dispatcher';

const endpoint = "/v1/collections";

export function getProducts(){

    const url = process.env.REACT_APP_API_URL+endpoint;
    const authorizationToken = "Bearer "+process.env.REACT_APP_PH_TOKEN;

    dispatcher.dispatch({type:"FETCH_PRODUCTS"})
    fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": authorizationToken
        }
    }).then(function(response) {
        if(response.ok){
            return response.json();
        }
        throw new Error('Network response error');

    }).then(function(promisedResponse){
        dispatcher.dispatch({type:"PRODUCTS_RECEIVED", payload:promisedResponse.collections})
    }).catch(function(err){
        dispatcher.dispatch({type:"FETCH_PRODUCTS_ERROR", payload:err})
        console.log('Error in fetch: ',err.message);
    });

}

export function filterProducts(text){
    dispatcher.dispatch({type:"FILTER_PRODUCTS", payload:text})
}