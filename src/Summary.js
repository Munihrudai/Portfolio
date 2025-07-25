import React from 'react';
import { useNavigate } from 'react-router-dom';
import Education from './Education';

const stats = [
  { label: 'Projects', value: '4+', path: '/projects' },
  { label: 'Publications', value: '2', path: '/publications' },
  { label: 'Skills', value: '8+', path: '/skills' },
];

const githubSvg = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" fill="#fff"/>
  </svg>
);

function Summary() {
  const navigate = useNavigate();
  return (
    <>
      {/* Hero Section (like the image) */}
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '65vh',
        background: 'rgba(0,0,0,0.45)',
        borderRadius: 0,
        boxShadow: 'none',
        padding: '100px 0 70px 0',
        margin: 0,
      }}>
        <img
          src={process.env.PUBLIC_URL + '/profile.jpg'}
          alt="Profile"
          style={{
            width: 180,
            height: 180,
            objectFit: 'cover',
            borderRadius: '50%',
            border: '5px solid #fff',
            marginBottom: 36,
            background: 'none',
          }}
        />
        <h1 style={{
          color: '#fff',
          fontSize: '2.7rem',
          fontWeight: 700,
          margin: 0,
          textAlign: 'center',
          letterSpacing: 1,
          textShadow: '0 2px 8px rgba(0,0,0,0.25)'
        }}>
          Hi, I'm POTTA MUNI HRUDAI
        </h1>
        <h2 style={{
          color: '#eaeaea',
          fontSize: '1.35rem',
          fontWeight: 400,
          margin: '12px 0 0 0',
          textAlign: 'center',
          letterSpacing: 1,
          textShadow: '0 2px 8px rgba(0,0,0,0.18)'
        }}>
          I'M IT STUDENT
        </h2>
      </section>

      {/* Scroll-down Details Section (previous summary details) */}
      <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
        <section style={{marginTop: 48, maxWidth: 800, width: '100%', background: 'rgba(35,41,70,0.97)', borderRadius: 20, padding: 48, boxShadow: '0 4px 32px rgba(20,20,40,0.18)', border: '3px solid #3a415a', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h2 style={{fontSize: '2rem', fontWeight: 700, margin: '0 0 28px 0', color: '#eebc1d', letterSpacing: 1, textAlign: 'center'}}>ABOUT ME</h2>
          <p style={{margin: '0 0 32px 0', color: '#eaeaea', fontSize: '1.28rem', lineHeight: 1.8, maxWidth: 700, fontWeight: 400, textAlign: 'center'}}>
            Information Technology student with a strong interest in full-stack development and game design. Skilled in Java, Python, and SQL with hands-on experience in building web and interactive projects. Completed a community-based project using automation and microcontrollers. Good at problem-solving, teamwork, and learning new technologies. Looking for opportunities to apply and grow my skills in real-world projects.
          </p>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: 32, marginBottom: 32, fontSize: '1.18rem', justifyContent: 'center'}}>
            <div><b>Date Of Birth:</b> OCT 08 2004</div>
            <div><b>Place:</b> Saale Street, Dharmavaram, Sri Sathya Sai District, Andhra Pradesh - 515671</div>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', gap: 32, justifyContent: 'center', marginBottom: 32}}>
            <a href="https://www.linkedin.com/in/muni-hrudai-30957a322/" target="_blank" rel="noopener noreferrer" style={{display: 'flex', alignItems: 'center', gap: 10, background: '#0077b5', color: '#fff', borderRadius: 8, padding: '12px 28px', fontWeight: 600, fontSize: '1.18rem', textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.10)'}}>
              <img src={process.env.PUBLIC_URL + '/download.png'} alt="LinkedIn" style={{width: 28, height: 28, verticalAlign: 'middle', borderRadius: '50%', background: '#fff'}} />
              LinkedIn
            </a>
            <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer" style={{display: 'flex', alignItems: 'center', gap: 10, background: '#232946', color: '#fff', borderRadius: 8, padding: '12px 28px', fontWeight: 600, fontSize: '1.18rem', textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.10)'}}>
              {githubSvg}
              GitHub
            </a>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', gap: 32, justifyContent: 'center', marginBottom: 32}}>
            <a href="mailto:Munihrudai0810@gmail.com" style={{background: '#ffb800', color: '#232946', border: 'none', borderRadius: 8, padding: '12px 32px', fontWeight: 700, fontSize: '1.18rem', textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', transition: 'background 0.2s'}} onMouseOver={e => e.currentTarget.style.background='#ffd966'} onMouseOut={e => e.currentTarget.style.background='#ffb800'}>Contact Me</a>
            <a href="/Munihrudai_Resume.pdf" download style={{background: '#232946', color: '#ffb800', border: '2px solid #ffb800', borderRadius: 8, padding: '12px 32px', fontWeight: 700, fontSize: '1.18rem', textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', transition: 'background 0.2s'}} onMouseOver={e => {e.currentTarget.style.background='#ffb800';e.currentTarget.style.color='#232946';}} onMouseOut={e => {e.currentTarget.style.background='#232946';e.currentTarget.style.color='#ffb800';}}>Download Resume</a>
          </div>
          <div style={{display: 'flex', gap: 32, justifyContent: 'center', marginTop: 16}}>
            {stats.map(stat => (
              <div key={stat.label} style={{textAlign: 'center', cursor: 'pointer', borderRadius: 10, padding: '18px 36px', background: '#181824', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', transition: 'background 0.2s', minWidth: 90, fontSize: '1.18rem', fontWeight: 600, color: '#ffb800', border: '3px solid #3a415a'}} onClick={() => navigate(stat.path)} onMouseOver={e => e.currentTarget.style.background='#353570'} onMouseOut={e => e.currentTarget.style.background='#181824'}>
                <div style={{fontSize: '1.5rem', fontWeight: 700}}>{stat.value}</div>
                <div style={{fontSize: '1.18rem', color: '#eebc1d'}}>{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Summary; 