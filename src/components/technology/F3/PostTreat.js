import React from 'react';

function PostTreat() {
    return (
      <div className="container">
      <section className="image" style={{  
        backgroundImage: `url(${process.env.PUBLIC_URL + '/Tech3/FF-SYSTEM.webp'})`
      }}>
      </section>
      <div className="spacer-2x"></div>
    </div>
    );
  }

  export default PostTreat;