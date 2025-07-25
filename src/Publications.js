import React from 'react';

const publications = [
  {
    title: "LoCbus: Travel Automation and Customer Satisfaction",
    publisher: "IEEE",
    publisherLink: "https://ieeexplore.ieee.org/document/your-paper-id",
    paperLink: "/locbus.pdf", // This will open the PDF directly
  },
  {
    title: "Low-Cost IoT-Based Health Monitoring System for Bedridden Patients",
    publisher: "Scopus Book Chapter",
    publisherLink: "https://www.scopus.com/record/display.uri?eid=your-eid",
    paperLink: "/health.pdf", // This will open the PDF directly
  },
];

function Publications() {
  return (
    <section>
      <h2>Publications</h2>
      <div style={{display: 'flex', flexDirection: 'column', gap: 32}}>
        {publications.map((pub, idx) => (
          <div key={idx} style={{
            background: '#232946',
            borderRadius: 14,
            boxShadow: '0 2px 12px rgba(20,20,40,0.13)',
            padding: 24,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            minWidth: 220,
            border: '3px solid #3a415a',
          }}>
            <div style={{fontWeight: 600, color: '#ffb800', fontSize: '1.15rem', marginBottom: 6}}>{pub.title}</div>
            <div style={{marginBottom: 8, fontSize: '1.05rem'}}>
              Published in: <a href={pub.publisherLink} target="_blank" rel="noopener noreferrer" style={{color: '#eebc1d', textDecoration: 'underline', fontWeight: 500}}>{pub.publisher}</a>
            </div>
            <a href={pub.paperLink} target="_blank" rel="noopener noreferrer" style={{background: '#ffb800', color: '#232946', border: 'none', borderRadius: 6, padding: '8px 18px', fontWeight: 600, fontSize: '1rem', textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', width: 'fit-content'}}>View Paper</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Publications; 