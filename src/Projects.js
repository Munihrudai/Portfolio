import React, { useState } from 'react';

const projects = [
  {
    title: 'IoT-based Health Monitoring',
    images: ['/project1a.jfif', '/project1b.jfif'],
    description: 'Built a low-cost IoT-based health monitoring system for bedridden patients, enabling real-time monitoring and alerting for caregivers.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7329436664622174208/',
    linkLabel: 'View Demo',
  },
  {
    title: 'Smart Budget Planner Web App',
    images: ['/project2a.jfif', '/project2b.jfif'],
    description: 'Designing a basic Smart Budget Planner App: My Take on Financial Simplicity. Budgeting can feel overwhelming, but the right tools can make all the difference. I’ve been working on designing a basic Smart Budget Planner App that focuses on simplicity, clarity, and smart financial tracking.',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7298416547448963072/',
    linkLabel: 'View Demo',
  },
  {
    title: '2D Bubble Shooter Game (Unity & C#)',
    images: ['/project3a.png', '/project3b.webp'],
    description: 'Designed and developed a 2D Bubble Shooter game using Unity and C#. Features engaging gameplay and smooth mechanics.',
    link: 'https://drive.google.com/file/d/1hOCdzDXfFqg8w44uhaNzq_mAbb73mY0B/view?pli=1',
    linkLabel: 'View Demo',
  },
  {
    title: 'LoCbus: Bus Route and Scheduling Web App',
    images: ['Locbus.jpeg', 'Locbus2.jpeg'],
    description: "Developed 'LoCbus' bus route and scheduling web app to optimize public transport routes and schedules.",
    link: 'https://github.com/Munihrudai/locbus.git',
    linkLabel: 'View Demo',
  },
  {
    title: 'Career Guidance Platform',
    images: ['Ed.png', 'Ed2.png'],
    description: 'Designed and developed a web-based platform to help students plan their educational journey and explore career options based on their interests and academic background.',
    link: 'https://example.com/career-guidance',
    linkLabel: 'View Demo',
  },
];

function Projects() {
  const [expanded, setExpanded] = useState(null);
  const [modalImg, setModalImg] = useState(null);

  return (
    <section>
      <h2>Projects</h2>
      <div style={{display: 'flex', flexDirection: 'column', gap: 36}}>
        {projects.map((project, idx) => {
          const isOpen = expanded === idx;
          return (
            <div key={idx} style={{
              background: '#232946',
              borderRadius: 16,
              boxShadow: '0 2px 12px rgba(20,20,40,0.13)',
              padding: 28,
              marginBottom: 8,
              transition: 'box-shadow 0.2s',
              cursor: 'pointer',
              border: '3px solid #3a415a',
            }}>
              <div
                onClick={() => setExpanded(isOpen ? null : idx)}
                style={{
                  color: '#ffb800',
                  fontWeight: 600,
                  fontSize: '1.25rem',
                  marginBottom: isOpen ? 18 : 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  userSelect: 'none',
                }}
              >
                {project.title}
                <span style={{fontSize: 22, marginLeft: 12, color: '#eebc1d'}}>{isOpen ? '▲' : '▼'}</span>
              </div>
              {isOpen && (
                <div style={{display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start', marginTop: 8}}>
                  <div style={{display: 'flex', flexDirection: 'column', gap: 18, minWidth: 260}}>
                    {project.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={project.title + ' ' + (i + 1)}
                        style={{width: 320, height: 200, objectFit: 'cover', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.13)', cursor: 'zoom-in'}}
                        onClick={e => { e.stopPropagation(); setModalImg(img); }}
                      />
                    ))}
                  </div>
                  <div style={{flex: 1, minWidth: 220}}>
                    <p style={{color: '#eaeaea', fontSize: '1.08rem', lineHeight: 1.6, marginBottom: 16}}>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{color: '#ffb800', textDecoration: 'underline', fontWeight: 500, fontSize: '1.08rem'}}>🔗 {project.linkLabel}</a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {modalImg && (
        <div
          onClick={() => setModalImg(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.85)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
          }}
        >
          <img
            src={modalImg}
            alt="Full Project"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              borderRadius: 16,
              boxShadow: '0 4px 32px rgba(0,0,0,0.25)',
              background: '#fff',
            }}
            onClick={e => e.stopPropagation()}
          />
          <button
            onClick={() => setModalImg(null)}
            style={{
              position: 'fixed',
              top: 32,
              right: 48,
              background: '#ffb800',
              color: '#232946',
              border: 'none',
              borderRadius: 8,
              padding: '8px 18px',
              fontWeight: 700,
              fontSize: '1.1rem',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
              zIndex: 1001,
            }}
          >Close</button>
        </div>
      )}
    </section>
  );
}

export default Projects; 