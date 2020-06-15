import React from 'react';

const Product = ({item}) => {
    return (
        <ul key={item._id}><strong>Name: </strong> {item.name}
            <li key={item.category}><strong>Category: </strong> {item.category}</li>
            <li key={item.description}><strong>Description</strong> {item.description}</li>
            <li key={item.price}><strong>Price:</strong> {item.price} €</li>
        </ul>
    );
}

export default Product;