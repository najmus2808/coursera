import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
import data from '../../data/data.json'
import './Home.css';

const Home = () => {
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState([])
    const newData = data.slice(0, 15);
    console.log(courses);
    useEffect(() => {
        setCourses(newData);
    }, [newData]);
    const handleCart = (addCourse) => {
        setCourse([...course, addCourse]);
    }
    return (
        <div>
            <Container>
                <Header></Header>
                <div className="home-section">
                    <div>
                        {
                            courses.map(course => <Course course={course} handleCart={handleCart}></Course>)
                        }
                    </div>
                    <div>
                        {
                            course.map(course => <Cart course={course}></Cart>)
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Home;