import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {

    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);


    const handleVideoSrcSet = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo)
        } else {
            setVideoSrc(heroVideo)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet);

        return () => {
            window.removeEventListener('resize', handleVideoSrcSet);
        }
    }, []);



    // GSAP Animations
    useGSAP(() => {
        gsap.to('#hero', { opacity: 1, delay: 1.8, ease: 'power5.inOut' })
        gsap.to('#cta', { opacity: 1, y: -50, delay: 2.2, ease: 'power5.inOut', duration: 0.5 })
    }, [])


    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p id='hero' className="hero-title">iPhone 15 Pro</p>
                <div className="md:w-10/12 w-9/12">
                    <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>

            <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
                <a href="#highlights" className='btn'>Buy</a>
                <p className='font-normal text-xl'>From ₹5621.00/mo.<span className='visually-hidden'><sup>§</sup></span> or &nbsp;
                    <span className='flex-nowrap'>
                        ₹134900.00
                        <span className='visuallyhidden'>
                            <sup>‡</sup>
                        </span>
                    </span>
                </p>
            </div>
        </section>
    )
}

export default Hero