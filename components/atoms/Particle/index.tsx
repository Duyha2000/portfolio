import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

function Particle() {
  const particlesInit = async (main: any) => {
    await loadFull(main)
  }

  return (
    <div className='Particle'>
      <Particles
        id='tsparticles'
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 109,
              density: {
                enable: true,
                value_area: 1200,
              },
            },
            color: {
              value: '#636e72',
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
              },
              polygon: {
                nb_sides: 6,
              },
            },
            line_linked: {
              enable: false,
              distance: 250,
              opacity: 0.9,
              width: 1,
              shadow: {
                enable: true,
                color: '#e74c3c',
                blur: 5,
              },
            },
            move: {
              enable: true,
              random: true,
              speed: 0.8,
              attract: {
                rotateX: 600,
                rotateY: 1200,
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                speed: 40,
                size_min: 0.1,
              },
            },
            opacity: {
              value: 0.8,
              anim: {
                speed: 1.2,
                opacity_min: 0.1,
              },
            },
          },
        }}
      />
    </div>
  )
}

export default Particle
