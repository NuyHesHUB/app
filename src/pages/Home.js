import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='bg'>
                React Single Page Application
            </div>
            <main id="main">
                <section id="section1">
                    <div className='container'>
                        <p>section1</p>
                    </div>
                </section>
                <section id="section2">
                    <div className='container'>
                        <p>section2</p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;