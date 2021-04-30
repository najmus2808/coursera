import React from 'react';
import { Card } from 'react-bootstrap';

const Cart = (props) => {
    const course = props.course;
    return (
        <div>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={course.image} />
                <Card.Body>
                    <Card.Title>Name: {course.name}</Card.Title>
                    <Card.Text>Author: {course.author}</Card.Text>
                    <Card.Text><small>Price: {course.price}</small></Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cart;