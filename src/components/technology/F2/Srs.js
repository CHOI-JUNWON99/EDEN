import React from 'react';

function Srs() {
    return (
      <div className="container">
      <section className="image" style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/Tech2/SRS.webp'})`,
      }}>
      </section>
      <div className="spacer-2x"></div>
    </div>
    );
  }

  export default Srs;