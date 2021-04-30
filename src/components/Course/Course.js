import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Course = (props) => {
    const course = props.course;
    const handleCart = props.handleCart;
    return (
        <div className="course-container">
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={course.image} />
                <Card.Body>
                    <Card.Title>Name: {course.name}</Card.Title>
                    <Card.Text>Author: {course.author}</Card.Text>
                    <Card.Text><small>Price: {course.price}</small></Card.Text>
                    <Button onClick={() => handleCart(course)} variant="primary">Buy Course</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;