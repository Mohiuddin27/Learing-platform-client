import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='container blog p-5 mb-5'>

            <h3 className='text-light'>Q1. What is 'Cors'</h3>
            <p className='text-light'>Ans: Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

            </p>
            <h3 className='text-light'>Q2. Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p className='text-light'>Ans: Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
                Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.

            </p>
            <h3 className='text-light'>Q3. How does the private route work?</h3>
            <p className='text-light'>Ans: Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.

            </p>
              <h3 className='text-light'>Q4. What is Node? How does Node work?</h3>
            <p className='text-light'>Ans: Scalability, latency, and throughput are key performance indicators for web servers. Keeping the latency low and the throughput high while scaling up and out is not easy. Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return.

In the traditional approach to creating web servers, for each incoming request or connection the server spawns a new thread of execution or even forks a new process to handle the request and send a response. Conceptually, this makes perfect sense, but in practice it incurs a great deal of overhead.

            </p>

        </div>
    );
};

export default Blog;