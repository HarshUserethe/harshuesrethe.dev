import React, { useState, useEffect, useRef } from 'react';
import '../../assets/styles/testimonal.css'

const testimonials = [
  {
    id: 1,
    name: 'Divya Walia',
    role: 'Senior Java Developer @Nagarro',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    text: 'I am writing to highly recommend Devraj for any Java fullstackrole. I have had the pleasure of working with Devraj for the past two years at Oneshield, where he has consistently demonstrated strong technical skills and a collaborative attitude. Devraj played a pivotal role in building the applicatio...',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 2,
    name: 'John Smith',
    role: 'Tech Lead @Microsoft',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    text: 'Working with this developer has been an absolute pleasure. Their expertise in full-stack development and ability to solve complex problems efficiently is truly impressive. They consistently deliver high-quality code and are always willing to go the extra mile...',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Product Manager @Google',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    text: 'An exceptional developer who combines technical excellence with great communication skills. They have been instrumental in delivering our most critical features on time and have shown remarkable leadership qualities throughout our collaboration...',
    linkedin: 'https://linkedin.com',
  },
];

const TestimonialSlider = ({ slideInterval = 18000, styles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const [isSeeMore, setIsSeeMore] = useState(null);

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);

    setProgress(0);

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 100 / (slideInterval / 50);
      });
    }, 50);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setProgress(0);
    }, slideInterval);
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);
    };
  }, [slideInterval]);

  const handlePrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    startAutoSlide();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    startAutoSlide();
  };
  
  

 const handleSeeMore = (id) => {
  setIsSeeMore(prev => (prev === id ? null : id));
};

  const currentTestimonial = testimonials[currentIndex];
   

  return (
    <div
      style={{
        backgroundColor: styles?.mainTheme?.backgroundColor,
        color: styles?.mainTheme?.color,
        //   padding: '80px 60px',
        //   minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Profile Section */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '32px',
          }}
        >
          {/* Avatar with Progress Border */}
          <div
            style={{
              position: 'relative',
              width: '85px',
              aspectRatio: '1 / 1', // keeps it responsive
            }}
          >
            {/* Progress ring */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background: `conic-gradient(
        ${styles?.mainTheme?.epicColor} ${progress}%,
        ${styles?.mainTheme?.backgroundColor} 0
      )`,
                padding: '3px', // thickness of ring
                transition: 'background 0.2s linear',
              }}
            >
              {/* Inner background */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: styles?.mainTheme?.backgroundColor,
                }}
              />
            </div>

            {/* Avatar */}
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              style={{
                position: 'absolute',
                inset: '6px', // space for ring
                width: 'calc(100% - 12px)',
                height: 'calc(100% - 12px)',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Name and Role */}
          <div>
            <h2
              style={{
                fontWeight: 600,
                fontSize: '20px',
                margin: '0 0 8px 0',
              }}
            >
              {currentTestimonial.name}
            </h2>
            <p
              style={{
                color: '#999',
                fontSize: '14px',
                margin: 0,
              }}
            >
              {currentTestimonial.role}
            </p>
          </div>
        </div>

        {/* Testimonial Text */}
        <div style={{ marginBottom: '32px' }}>
          <p
            style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: '#A9A9BD',
              margin: 0,
            }}
          >
            {currentTestimonial.text.length > 260
              ? isSeeMore === currentTestimonial.id ? currentTestimonial.text : currentTestimonial.text.slice(0, 260)
              : currentTestimonial.text}{' '}
            {
              isSeeMore === currentTestimonial.id ? <span
              onClick={() => handleSeeMore(currentTestimonial.id)}
              style={{
                color: styles?.mainTheme?.color,
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              ... see less
            </span> : <span
              onClick={() => handleSeeMore(currentTestimonial.id)}
              style={{
                color: styles?.mainTheme?.color,
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              ... see more
            </span>
            }
          </p>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #222',
            paddingTop: '24px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          {/* LinkedIn Link */}
          <a
            href={currentTestimonial.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: styles?.mainTheme?.color,
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'opacity 0.2s',
            }}
            className='testimonial-button'
            // onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
            // onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Check it out on Linkedin
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>

          {/* Navigation Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <button
              onClick={handlePrevious}
              style={{
                background: 'transparent',
                border: 'none',
                color: styles?.mainTheme?.color,
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = '#222')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = 'transparent')
              }
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>

            <span style={{ fontSize: '14px' }}>
              {currentIndex + 1} / {testimonials.length}
            </span>

            <button
              onClick={handleNext}
              style={{
                background: 'transparent',
                border: 'none',
                color: styles?.mainTheme?.color,
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = '#222')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = 'transparent')
              }
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          div[style*="padding: 80px 60px"] {
            padding: 40px 20px !important;
          }
          div[style*="width: 100px"] {
            width: 80px !important;
            height: 80px !important;
          }
          h2 {
            font-size: 1.25rem !important;
          }
          p {
            font-size: 0.875rem !important;
          }
          div[style*="fontSize: 1.125rem"] p {
            font-size: 14rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;
