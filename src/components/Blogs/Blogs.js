import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-area'>
            <div className="container">
                <div className="blogs-content">
                    <h1>Difference between javascript and nodejs?</h1>
                    <p>Javascript is a simple programming language that runs in any runing browser javascript engine.Nodejs is an interpreter or running environment for JavaScript, with lots of libraries that can be easily accessed from programming in JavaScript. JavaScript can run any browser with a default browser running environment. Nodejs uses Google's v ৮ engine. Help JavaScript to use Ajax at any time.</p>
                    <h1>When should you use nodejs and when should you use mongodb?</h1>
                    <p>There are web sites made with node js that save data on mongodb.Monogodb is an api library for applications from node js. Node js used for non-blocking, event powered servers. Mongodb saves data as a document sagho around the table with foreign keys. Node js is a traditional website and is used for backend api services</p>
                    <h1>Differences between sql and nosql databases</h1>
                    <p>Sql is a popular programming language for relational database management systems. Sql Data extraction, storage, deletion, insertion, update and design languages. Processes for storing and retrieving data other than the nosql database tabular form. This data is stored in unorganized and polymorphic formats, not for storage. Nosql is better for organized data like json.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;