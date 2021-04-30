import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Course = (props) => {
    const course = props.course;
    return (
        <div className="course-container">
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={course.image} />
                <Card.Body>
                    <Card.Title>{course.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Buy Course</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;