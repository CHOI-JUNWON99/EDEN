import React from 'react';

function DrumScreen() {
    return (
      <div className="container">
      <section className="image" style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/Tech3/DRUM-SCREEN.webp'})`
      }}>
      </section>
      <div className="spacer-2x"></div>
    </div>
    );
  }

  export default DrumScreen;