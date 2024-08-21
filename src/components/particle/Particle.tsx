import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";

import { loadSlim } from "@tsparticles/slim";


export const Particle = () => {
    const [ init, setInit ] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            
            await loadSlim(engine);
            
        }).then(() => {
            setInit(true);
        });
    }, []);

    // const particlesLoaded = (container) => {
    //     console.log(container);
    // };

    return (
        <Particles
            id="tsparticles"
            // particlesLoaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        // onClick: {
                        //     enable: true,
                        //     mode: "push",
                        // },
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        // resize: true,
                    },
                    modes: {
                        // push: {
                        //     quantity: 4,
                        // },
                        repulse: {
                            distance: 400,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 200,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            // area: 800,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 0.2, max: 1 },
                    },
                },
                detectRetina: true,
            }}
        />

)
    ;
};