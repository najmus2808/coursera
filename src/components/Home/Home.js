import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import Course from '../Course/Course';
import data from '../../data/data.json'

const Home = () => {
    const [courses, setCourses] = useState([]);
    const newData = data.slice(0, 15);
    console.log(courses);
    useEffect(() => {
        setCourses(newData);
    },[newData]);
    return (
        <div>
            <Container>
                <Header></Header>
                {
                    courses.map(course => <Course course={course}></Course>)
                }
            </Container>
        </div>
    );
};

export default Home;