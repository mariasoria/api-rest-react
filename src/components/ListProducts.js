import React, {Component} from 'react';
import DisplayProduct from './DisplayProduct';

const myHeaders = new Headers();
myHeaders.append('authorization', `Bearer ${localStorage.token}`);


class ListProducts extends Component {

    constructor(){
        super();
        this.state = {
            products: null,
        };
    }
    
    componentDidMount(){
        console.log("componentDidMount running")
        this.getProducts();
        
    }

    getProducts = () => {
        fetch ('/api/product', {
            method: 'GET',
            headers: {myHeaders}
        })
        .then(res => res.json())
        .then(data => {
            const products = data.products;
            this.setState({products});
        });
    }
    
    renderProductsDisplayer = (products) => {
        return products.map(product => 
            <DisplayProduct item = {product}></DisplayProduct>
        )
    }

    renderNoProducts = () => {
        return <div> No hay productos que mostrar </div>
    }
    

    render (){
        console.log(this.state.products);
        const {products} = this.state;
        return (<div className="Lista"> 
            <h1> List of products </h1>
            {products ?  (
                this.renderProductsDisplayer(products)
                
            ) : (
                this.renderNoProducts()
            )}
            </div>);
    }
}


export default ListProducts;