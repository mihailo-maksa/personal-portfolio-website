import React from 'react'
import './introanimation.css'
import './particles.css'
import './animation.css'
import CustomButton from '../CustomButton/CustomButton'

const IntroAnimation = () => (
  <div className="intro-animation" id="intro">
    <div
      className="animation-container"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}
    >
      {/* mihailo */}
      <div
        className="mihailo-maksa"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <h1 className="hi-mihailo-maksa">
          Hi, I'm <span style={{ color: '#f7931a' }}>Mihailo!</span>
        </h1>
        <p className="full-stack">A Full Stack Web3 Developer</p>
        <CustomButton type="button">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link"
          >
            Resume
          </a>
        </CustomButton>
      </div>

      <div className="night first-animation">
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
      </div>

      <div className="night">
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
      </div>

      <div className="night second-animation">
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
      </div>

      <div className="night">
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
        <div className="shooting_star" />
      </div>
    </div>
  </div>
)

export default IntroAnimation
