import React from 'react';

const technicalSkills = [
  { name: 'Java', icon: '☕' },
  { name: 'Python', icon: '🐍' },
  { name: 'Web App Development', icon: '🌐' },
  { name: 'Quickly Learns New Tools', icon: '⚡' },
  { name: 'Generative AI (Basic)', icon: '🤖' },
  { name: 'Microsoft Excel', icon: '📊' },
  { name: 'Problem Solving', icon: '🧩' },
];

const softSkills = [
  { name: 'Critical Thinking', icon: '💡' },
  { name: 'Leadership in Student Projects', icon: '🧑‍💼' },
  { name: 'Community Engagement', icon: '🌱' },
  { name: 'Public Speaking', icon: '🎤' },
  { name: 'Proficient in Canva Presentations', icon: '🎨' },
  { name: 'Presenting Ideas', icon: '📢' },
  { name: 'Adaptability and Quick Learning', icon: '🔄' },
  { name: 'Team Collaboration and Communication', icon: '🤝' },
];

const cardStyle = {
  background: '#232946',
  color: '#eaeaea',
  borderRadius: 16,
  boxShadow: '0 2px 16px rgba(20,20,40,0.13)',
  padding: 24,
  margin: 0,
  minWidth: 220,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 16,
  border: '3px solid #3a415a',
};

const gridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 32,
  marginTop: 24,
  marginBottom: 32,
  justifyContent: 'center',
};

const skillItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  fontSize: '1.1rem',
  background: '#121629',
  borderRadius: 8,
  padding: '8px 16px',
  margin: '4px 0',
  boxShadow: '0 1px 4px rgba(20,20,40,0.10)',
  border: '3px solid #3a415a',
};

function Skills() {
  return (
    <section style={{maxWidth: 900, margin: '0 auto', padding: '32px 0'}}>
      <h2 style={{textAlign: 'center', color: '#ffb800', fontSize: '2.2rem', marginBottom: 8, letterSpacing: 1}}>Skills</h2>
      <div style={gridStyle}>
        <div style={cardStyle}>
          <h3 style={{color: '#eebc1d', fontSize: '1.3rem', marginBottom: 8}}>Technical Skills</h3>
          {technicalSkills.map((skill, idx) => (
            <div key={idx} style={skillItemStyle}>
              <span style={{fontSize: '1.5rem'}}>{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
        <div style={cardStyle}>
          <h3 style={{color: '#eebc1d', fontSize: '1.3rem', marginBottom: 8}}>Soft Skills</h3>
          {softSkills.map((skill, idx) => (
            <div key={idx} style={skillItemStyle}>
              <span style={{fontSize: '1.5rem'}}>{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills; 
