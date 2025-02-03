import React from 'react';

const Home = () => {
return (
        <div className='mt-5'>
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center mb-4">Welcome to NewsMonkey</h1>
                    <p className="lead text-center">This is a Daily News website built using NewsApi, React.js, and Bootstrap.</p>
                    <p className="lead text-center">Stay informed with the latest news and updates.</p>
                    <p className="lead text-center">Get the facts, not just the headlines.</p>
                    <p className="lead text-center">Explore the world through news.</p>
                    
                    {/* Additional Static Data */}
                    <p className="text-center mt-4">We cover a variety of topics including:</p>
                    <ul className="list-unstyled text-center">
                        <li><strong>World News:</strong> Stay up-to-date with global events.</li>
                        <li><strong>Technology:</strong> The latest trends in the tech industry.</li>
                        <li><strong>Sports:</strong> Updates on your favorite teams and athletes.</li>
                        <li><strong>Entertainment:</strong> News about movies, music, and more.</li>
                        <li><strong>Business:</strong> Insights into the world of finance and economy.</li>
                    </ul>
                    
                    <h3 className="text-center mt-5">About Us</h3>
                    <p className="lead text-center">NewsMonkey is committed to delivering the most accurate and timely news from around the world. Our mission is to keep you informed, whether it's breaking news or in-depth analysis on current events.</p>
                    
                    <h3 className="text-center mt-5">Features</h3>
                    <ul className="list-unstyled text-center">
                        <li><strong>Real-time News:</strong> Stay up-to-date with the latest articles from trusted sources.</li>
                        <li><strong>Custom News Feeds:</strong> Filter news by category and region to stay relevant.</li>
                        <li><strong>Daily Updates:</strong> Get fresh news updates every day directly to your feed.</li>
                        <li><strong>Interactive UI:</strong> Easy-to-navigate interface designed for your convenience.</li>
                    </ul>
    
                    <h3 className="text-center mt-5">Contact Us</h3>
                    <p className="lead text-center">Have questions? Feel free to reach out to us at:</p>
                    <p className="text-center"><strong>Email:</strong> support@newsmonkey.com</p>
                    <p className="text-center"><strong>Phone:</strong> 123-456-7890</p>
                    
                    <p className="lead text-center mt-4">Join NewsMonkey today and never miss out on important news again.</p>
                </div>
            </div>
        </div>
    </div>
    
);
}

export default Home;