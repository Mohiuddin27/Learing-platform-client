import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Faq.css';

const Faq = () => {
    return (
        <div>
            <div className='container mb-5 w-50 mx-auto faq'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header> What is React?</Accordion.Header>
                        <Accordion.Body>
                            React is a front-end JavaScript library developed by Facebook in 2011.
                            It follows the component based approach which helps in building reusable UI components.
                            It is used for developing complex and interactive web and mobile UI.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>What do you understand by Virtual DOM? Explain its works.</Accordion.Header>
                        <Accordion.Body>
                            A virtual DOM is a lightweight JavaScript object which originally is just a copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties. React’s render function creates a node tree out of the React components. It then updates this tree in response to the mutations in the data model which is caused by various actions done by the user or by the system. Check out this Web developer course online to learn more about react.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header> Why can’t browsers read JSX?</Accordion.Header>
                        <Accordion.Body>
                        Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

        </div>
    );
};

export default Faq;