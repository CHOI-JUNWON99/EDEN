import React from 'react';
import '../../../css/Technology.css';

function EmPwt() {
    return (
      <div className="container">
      <section className="image" style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/Tech1/EM-PWT.webp'})`,
      }}>
      </section>
      <div className="spacer-2x"></div>
    </div>
    );
  }

  export default EmPwt;