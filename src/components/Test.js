import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/Test.css';

gsap.registerPlugin(ScrollTrigger);

const Test = () => {
  useEffect(() => {
    const tree = document.querySelector('.tree');
    const years = document.querySelectorAll('.year');

    console.log('tree element:', tree);
    console.log('year elements:', years);

    const treeGrowth = gsap.timeline({
      scrollTrigger: {
        trigger: ".tree-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: true, // 디버깅을 위해 markers 추가
      },
    });

    treeGrowth
      .to(tree, { height: "100vh", duration: 5 })
      .to(tree, { width: "50px", duration: 5 }, 0);

    years.forEach((year, index) => {
      gsap.to(year, {
        opacity: 1,
        scrollTrigger: {
          trigger: year,
          start: "top center",
          end: "bottom center",
          scrub: true,
          markers: true, // 디버깅을 위해 markers 추가
        },
      });
    });
  }, []);

  return (
    <div className="tree-container">
      <div className="tree"></div>
      <div className="year" data-year="2000">2000: 회사 설립</div>
      <div className="year" data-year="2005">2005: 중요한 이벤트</div>
      <div className="year" data-year="2010">2010: 또 다른 중요한 이벤트</div>
      <div className="year" data-year="2015">2015: 중요한 성과</div>
      <div className="year" data-year="2020">2020: 현재</div>
    </div>
  );
};

export default Test;
