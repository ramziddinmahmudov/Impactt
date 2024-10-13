import React from 'react';
import './Main.css';

const caseStudies = [
  {
    id: 1,
    title: 'Groceteria',
    description: 'Groceteria - Your One-Stop Online Grocery Store Discover Groceteria, a modern and convenient platform designed to make your grocery shopping experience faster and easier. From fresh produce and everyday essentials to specialty items, we bring a wide range of high-quality products right to your doorstep. With easy navigation, seamless ordering, and secure payments, Groceteria ensures that your kitchen stays stocked without the hassle of physical shopping. Enjoy reliable delivery, great deals, and exceptional service every time you shop with us.',
    buttonText: 'View case study',
    buttonColor: 'yellow',
    image: 'https://img.freepik.com/premium-psd/one-page-modern-website-template-digital-agency_180294-100.jpg',
    tag: 'Finance'
  },
  {
    id: 2,
    title: 'Groceteria',
    description: 'Groceteria - Your One-Stop Online Grocery Store Discover Groceteria, a modern and convenient platform designed to make your grocery shopping experience faster and easier. From fresh produce and everyday essentials to specialty items, we bring a wide range of high-quality products right to your doorstep. With easy navigation, seamless ordering, and secure payments, Groceteria ensures that your kitchen stays stocked without the hassle of physical shopping. Enjoy reliable delivery, great deals, and exceptional service every time you shop with us.',
    buttonText: 'View case study',
    buttonColor: 'blue',
    image: 'https://img.freepik.com/premium-psd/one-page-modern-website-template-digital-agency_180294-100.jpg',
    tag: 'EdTech'
  },
  {
    id: 3,
    title: 'Groceteria',
    description: 'Groceteria - Your One-Stop Online Grocery Store Discover Groceteria, a modern and convenient platform designed to make your grocery shopping experience faster and easier. From fresh produce and everyday essentials to specialty items, we bring a wide range of high-quality products right to your doorstep. With easy navigation, seamless ordering, and secure payments, Groceteria ensures that your kitchen stays stocked without the hassle of physical shopping. Enjoy reliable delivery, great deals, and exceptional service every time you shop with us.',
    buttonText: 'View case study',
    buttonColor: 'green',
    image: 'https://img.freepik.com/premium-psd/one-page-modern-website-template-digital-agency_180294-100.jpg',
    tag: 'Pharma'
  },
];

const CaseStudies = () => {
  return (
    <div className="case-studies">
      <div className="header">
        <h2>Case Studies</h2>
        <p>Solving user & business problems since last 1.5+ years.</p>
      </div>
      <div className="studies-container">
        {caseStudies.map((study) => (
          <div className="case-study-card" key={study.id}>

            <img src={study.image} alt={study.title} />
            <div className="content">
              <h3>{study.title}</h3>
              <p>{study.description}</p>
              <a href="https://groceteria-eta.vercel.app/home" target='blank'><button className={study.buttonColor}>{study.buttonText}</button></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
