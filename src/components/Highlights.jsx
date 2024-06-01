import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { rightImg, watchImg } from "../utils";
import './Highlights.css';
import VideoCarousel from "./VideoCarousel";

gsap.registerPlugin(ScrollTrigger);


const Highlights = () => {

    useGSAP(() => {
        gsap.to('#title', {
            opacity: 1, y: 0, scrollTrigger: {
                trigger: '#title',
                start: 'top 100%',
                toggleActions: 'restart none none reset'

            }
        })
        gsap.to('.link', {
            opacity: 1, y: 0, duration: 0.9, stagger: 0.25, scrollTrigger: {
                trigger: '#highlights',
                start: 'top 100%',
                toggleActions: 'restart none none reset'
            }
        })  // stagger is used to animate the elements one after the other
    }, [])



    return (
        <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
            <div className="screen-max-width">
                <div className="mb-12 w-full md:flex items-end justify-between">
                    <h5 id="title" className="section-heading shiny-text">
                        Apple&apos;s Allure
                    </h5>

                    <div className="flex flex-wrap items-end gap-5">
                        <p className="link">
                            Discover cinematic
                            <img src={watchImg} alt="watch" className="ml-2" />
                        </p>
                        <p className="link">
                            Enchantment
                            <img src={rightImg} alt="right" className="ml-2" />
                        </p>
                    </div>
                </div>


                <VideoCarousel />
            </div>
        </section>
    )
}

export default Highlights