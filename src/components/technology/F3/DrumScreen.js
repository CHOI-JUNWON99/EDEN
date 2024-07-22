import React from 'react';

function DrumScreen() {
    return (
      <div className="container">
      <section className="image" style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + '/Tech3/DRUM-SCREEN.webp'})`
      }}>
      </section>
      <div>ㅤ</div>
      <div>ㅤ</div>
    </div>
    );
  }
  
  export default DrumScreen;