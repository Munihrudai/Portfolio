import React, { useState } from 'react';

const certificates = [
  {
    event: 'Generative AI ',
    mode: 'Online',
    date: '24 July 2025',
    type: 'Course',
    link: 'GenAI.pdf',
  },
  {
    event: 'AI - GENIUS FORGE ',
    mode: 'Offline',
    date: '30 & 31 MARCH 2024',
    type: 'Hackathon',
    link: '/it.jfif',
  },
  {
    event: 'Power BI',
    mode: 'Online',
    date: '13 MAY 2024',
    type: 'WorkShop',
    link: '/flipkart.jifi',
  },
  {
    event: 'Microsoft Excel',
    mode: 'Online',
    date: '4th AUG 2025',
    type: 'Quiz',
    link: 'MSEXCEL.jpeg',
  },
  {
    event: 'INNOVARC 25',
    mode: 'Offline',
    date: '22 & 23 FEB 2025',
    type: '24 hr Hackthon',
    link: 'innovarc.jpeg',
  },
  {
    event: 'MED-INNOVATE',
    mode: 'Online',
    date: '05 MARCH 2025',
    type: 'Project Expo',
    link: 'med.jpeg',
  },
  {
    event: 'KRIYA IDEATHON',
    mode: 'Offline',
    date: '14 & 15 MARCH 2025',
    type: 'Ideathon',
    link: 'Kriya.jpeg',
  },
  {
    event: 'ICISS 2025',
    mode: 'Online',
    date: '12 MARCH 2025',
    type: 'Paper Presentation',
    link: 'paper.jpeg',
  },
  {
    event: 'ICIRD 2025',
    mode: 'Online',
    date: '29 APRIL 2025',
    type: 'Paper Presentation',
    link: 'Scopus.pdf',
  },
   {
    event: 'E-Commerce & Tech Quiz of Flipkart GRiD 6.0',
    mode: 'Online',
    date: '13 MAY 2024',
    type: 'Tech Quiz',
    link: '/flipkart.jifi',
  },
  {
    event: 'ORACLE',
    mode: 'Online',
    date: '17 DEC 2023',
    type: 'Quiz',
    link: 'oracle.jpeg',
  },
];

function Certificates() {
  const [openCert, setOpenCert] = useState(null);

  // Helper to determine if file is image or PDF
  const isImage = (file) => /\.(jpe?g|jfif|png|svg)$/i.test(file);
  const isPDF = (file) => /\.pdf$/i.test(file);

  return (
    <section>
      <h2>Certificates</h2>
      <div style={{display: 'flex', flexDirection: 'column', gap: 32}}>
        {certificates.map((cert, idx) => (
          <div key={idx} style={{background: '#232946', borderRadius: 14, boxShadow: '0 2px 12px rgba(20,20,40,0.13)', padding: 24, display: 'flex', flexDirection: 'column', gap: 10, minWidth: 220, border: '3px solid #3a415a'}}>
            <div style={{fontWeight: 600, color: '#ffb800', fontSize: '1.15rem', marginBottom: 6}}>{cert.event}</div>
            <div style={{fontSize: '1.05rem', color: '#eebc1d'}}>Mode: <span style={{color: '#eaeaea'}}>{cert.mode}</span></div>
            <div style={{fontSize: '1.05rem', color: '#eebc1d'}}>Date: <span style={{color: '#eaeaea'}}>{cert.date}</span></div>
            <div style={{fontSize: '1.05rem', color: '#eebc1d'}}>Type: <span style={{color: '#eaeaea'}}>{cert.type}</span></div>
            <button onClick={() => setOpenCert(cert)} style={{background: '#ffb800', color: '#232946', border: 'none', borderRadius: 6, padding: '8px 18px', fontWeight: 600, fontSize: '1rem', textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', width: 'fit-content', marginTop: 8, cursor: 'pointer'}}>View Certificate</button>
          </div>
        ))}
      </div>
      {openCert && (
        <div style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(30,32,50,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000}} onClick={() => setOpenCert(null)}>
          <div style={{position: 'relative', background: '#232946', padding: 24, borderRadius: 12, maxWidth: '90vw', maxHeight: '90vh', boxShadow: '0 4px 32px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column', alignItems: 'center'}} onClick={e => e.stopPropagation()}>
            <button onClick={() => setOpenCert(null)} style={{position: 'absolute', top: 12, right: 12, background: '#ffb800', color: '#232946', border: 'none', borderRadius: '50%', width: 32, height: 32, fontWeight: 700, fontSize: 18, cursor: 'pointer'}}>×</button>
            <div style={{marginBottom: 16, color: '#eebc1d', fontWeight: 600, fontSize: '1.2rem'}}>{openCert.event}</div>
            {isImage(openCert.link) ? (
              <img src={openCert.link} alt={openCert.event} style={{maxWidth: '80vw', maxHeight: '70vh', borderRadius: 8, boxShadow: '0 2px 12px rgba(20,20,40,0.13)'}} />
            ) : isPDF(openCert.link) ? (
              <embed src={openCert.link} type="application/pdf" style={{width: '80vw', height: '70vh', borderRadius: 8, boxShadow: '0 2px 12px rgba(20,20,40,0.13)'}} />
            ) : (
              <div style={{color: '#eaeaea'}}>Cannot preview this file type.</div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates; 
