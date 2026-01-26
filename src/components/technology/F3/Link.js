import React from 'react';

function Link() {
    return (
      <div className="container">
      <section className="image" style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/Tech3/LINK-CONVEYOR.webp'})`
      }}>
      </section>
      <div className="spacer-2x"></div>
    </div>
    );
  }

  export default Link;