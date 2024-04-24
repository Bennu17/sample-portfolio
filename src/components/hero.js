import React from 'react'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2>This is a sample website</h2>
            <p>Passionate Frontend Developer</p>
        </div>
        <div className='hero-img'>
            <div>
                <div className='tech-icon'>
                    <img src='' alt='hro1'></img>

                </div>
                <img src='' alt='h2' ></img>
            </div>
            <div>
            <div>
                <div className='tech-icon'>
                    <img src='' alt='h3'></img>

                </div>
                <img src='' alt='h4' ></img>
            </div>
            <div>
                <div className='tech-icon'>
                    <img src='' alt='h5'></img>

                </div>
                <img src='' alt='h6' ></img>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Hero