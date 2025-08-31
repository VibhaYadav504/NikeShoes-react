import React from 'react'

const HeroSection = () => {
    return (
        <main className='hero-container'>
            <div className='hero-content'>
                <h1> YOU DESERVE THE BEST </h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WHERE HERE TO HELP TO HELP YOU EITH OUR
                    SHOES. YOUR FEET DESERVE THE BEST AND WE ARE TO HELP YOU WITH OUR
                    SHOES
                </p>
                <div className='hero-btn'>
                    <button>Shop Now</button>
                    <button className='secondary-btn'>Category</button>
                </div>



                <div className='shopping'>
                    <p>Also Available On</p>

                    <div className='brand-icons'>
                        <img src="./image/flipkart.png" alt="Flipkart"  />
                        <img src="./image/amazon.png" alt="Amazon"  />


                    </div>
                </div>
            </div>
            <div className='hero-image'>
                <img src="/image/shoes2.jpeg" alt="nike shoes" />

            </div>
        </main>
    );
};

export default HeroSection