import React from 'react';

function MultyScrubber() {
    return (
      <div className="container">
      <section className="image" style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/Tech2/MUILT-SCRUBBER.webp'})`
      }}>
      </section>
      <div className="spacer-2x"></div>
    </div>
    );
  }

  export default MultyScrubber;