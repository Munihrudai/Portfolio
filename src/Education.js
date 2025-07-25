import React from 'react';

function Education() {
  return (
    <section>
      <h2>Education</h2>
      <div className="edu-timeline" style={{position: 'relative', marginLeft: 20, paddingLeft: 20, borderLeft: '3px solid #ffb800'}}>
        <div style={{marginBottom: 32, position: 'relative'}}>
          <div style={{position: 'absolute', left: -32, top: 0, width: 20, height: 20, background: '#ffb800', borderRadius: '50%', border: '3px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,0.10)'}}></div>
          <div style={{marginLeft: 8}}>
            <div style={{fontWeight: 600, color: '#eebc1d'}}>2020</div>
            <div style={{fontSize: '1.08rem', color: '#eaeaea'}}>Class 10th State Board</div>
            <div style={{fontSize: '0.98rem', color: '#bdbdbd'}}>Score: 530/600</div>
          </div>
        </div>
        <div style={{marginBottom: 32, position: 'relative'}}>
          <div style={{position: 'absolute', left: -32, top: 0, width: 20, height: 20, background: '#ffb800', borderRadius: '50%', border: '3px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,0.10)'}}></div>
          <div style={{marginLeft: 8}}>
            <div style={{fontWeight: 600, color: '#eebc1d'}}>2020 - 2022</div>
            <div style={{fontSize: '1.08rem', color: '#eaeaea'}}>Intermediate (MPC) at Sri Sai Krupa jr College</div>
            <div style={{fontSize: '0.98rem', color: '#bdbdbd'}}>GPA: 672/1000</div>
          </div>
        </div>
        <div style={{marginBottom: 0, position: 'relative'}}>
          <div style={{position: 'absolute', left: -32, top: 0, width: 20, height: 20, background: '#ffb800', borderRadius: '50%', border: '3px solid #fff', boxShadow: '0 2px 8px rgba(0,0,0,0.10)'}}></div>
          <div style={{marginLeft: 8}}>
            <div style={{fontWeight: 600, color: '#eebc1d'}}>2022 - 2026</div>
            <div style={{fontSize: '1.08rem', color: '#eaeaea'}}>BTech (IT) at Kalasalingam University</div>
            <div style={{fontSize: '0.98rem', color: '#bdbdbd'}}>GPA: 8.53/10.0</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education; 