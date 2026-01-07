import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import gsap from 'gsap';
import '../../assets/styles/Animation.css';

const AnimatedButton = ({ color, label, hoverLabel, btnWidth, isClassName, classMe }) => {
  const btnRef = useRef(null);
  const [currentLabel, setCurrentLabel] = useState(label);
  const themeValues = useSelector((state) => state.theme);
 
  const onEnter = () => {
    const labelEl = btnRef.current.querySelector('.btn-label');

    gsap.to(btnRef.current.querySelector('.bubbly'), {
      duration: 0.3,
      ease: 'power3.out',
      top: '0%',
     backgroundColor: themeValues.mode==="dark" ? "#fff" : "#000",
     borderRadius:"10%"
    
    });

    gsap.to(labelEl, {
      opacity: 0,
      y: -6,
      duration: 0.15,
      color: color === '#fff' ? '#000' : '#fff',

      onComplete: () => {
        setCurrentLabel(hoverLabel);
        gsap.fromTo(
          labelEl,
          { y: 6, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.15 }
        );
      },
    });
  };

  const onLeave = () => {
    const labelEl = btnRef.current.querySelector('.btn-label');

    gsap.to(btnRef.current.querySelector('.bubbly'), {
      duration: 0.3,
      ease: 'power3.out',
      top: '100%',
    });

    gsap.to(labelEl, {
      opacity: 0,
      y: -6,
      color: color === '#000' ? '#000' : '#fff',
      duration: 0.15,
      onComplete: () => {
        setCurrentLabel(label);
        gsap.fromTo(
          labelEl,
          { y: 6, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.15 }
        );
      },
    });
  };

  return (
    <>
      <button
        style={{
          backgroundColor: 'transparent',
          color: color,
          border: '1px solid #6e6e6eff',
          padding: '12px 32px',
          fontSize: '14px',
          borderRadius: '30px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          fontWeight: '600',
          width: btnWidth,
        }}
        className={isClassName ? classMe : "gsap-btn"}
        ref={btnRef}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <span className="btn-label">{currentLabel}</span>
        <span className="bubbly" />
      </button>
    </>
  );
};

export default AnimatedButton;
