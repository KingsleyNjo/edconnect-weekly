import React from 'react';
import { useEffect } from 'react';
import {axiosInstance} from "./config";
import Layout from './shared/Layout';

let asyncHandler = async function (url) {

    let response = await axiosInstance(url);
    if (response.status !== 200) {
        throw new Error("something went wrong!!!");
    }
    let data = await response.json();
    return data;


}

const Home = () => {

    useEffect(() => {

        let showcase = document.querySelector('.showcase');
        // console.log(showcase);

        asyncHandler('/api/projects')
            .then(data => {

                data.forEach((item, index) => {

                    if (index <= 3) {

                        showcase.innerHTML += `<section class="card mr-4 "col-md-3 col-sm-12 col-lg-3 pb-4"">
                    <a href="/project/${item.id}"><h4 class="card-title text-primary">${item.name}</h4></a>
                    <div class="card-subtitle text-secondary">${item.authors.join(' ')}
                    <div class="card-text">${item.abstract}</div>
                    <div class="text-primary"><p>${item.tags.join('')}</p></div>
                    </section>`;

                    }

                });


            });

    }, [])

    return (

        <Layout>

            <main>

                <div className="mt-5 jumbotron">

                    <h1>Welcome to Project Explorer</h1>

                    <p>Project explorer is a repository for final year projects across all departments at your institution. 
                        You can submit your project and search projects submitted by others to learn from.</p>

                    <a className="btn btn-primary" href="/signup">Get Started</a>{' '}

                    <a className="btn btn-secondary" href="/login">Login</a>
                </div>
                <div className='container'>
                    <div id='project_list' className="mt-5 d-flex justify-content-space showcase">
                        
                    </div>

                </div>
            </main>

        </Layout>

    );

}


export default Home;