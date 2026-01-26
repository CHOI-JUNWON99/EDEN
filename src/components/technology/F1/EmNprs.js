import React from 'react';
import '../../../css/Technology.css';

function EmNprs() {
    return (
    <div className="container">
      <section className="image" style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/Tech1/EM-NPRS.webp'})`,
      }}>
      </section>
      <div className="spacer-2x"></div>
    </div>
    );
  }

  export default EmNprs;