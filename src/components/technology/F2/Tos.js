import React from 'react';

function Tos() {
    return (
      <div className="container">
      <section className="image" style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/Tech2/TOS.webp'})`
      }}>
      </section>
      <div className="spacer-2x"></div>
    </div>
    );
  }

  export default Tos;