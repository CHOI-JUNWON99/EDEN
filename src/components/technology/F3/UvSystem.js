import React from 'react';

function Uv() {
    return (
      <div className="container">
      <section className="image" style={{  
        backgroundImage: `url(${process.env.PUBLIC_URL + '/Tech3/UvSystem.webp'})`
      }}>
      </section>
      <div className="spacer-2x"></div>
    </div>
    );
  }

  export default Uv;