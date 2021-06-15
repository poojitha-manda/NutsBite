import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant='top' />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as='div'>
              <b>
                <strong>{product.name}</strong>
              </b>
            </Card.Title>
          </Link>

          <Card.Text as='div'>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <div>
            <span>
              <Card.Text as='h3'>&#8377;{product.price}</Card.Text>
            </span>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Product;
