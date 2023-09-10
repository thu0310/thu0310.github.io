import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import SkillPage from './components/Skill';

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header style={{ marginBottom: '20px' }} />
      <Banner style={{ marginBottom: '40px' }} />
      <Nav style={{ marginBottom: '30px' }} />
      <About style={{ marginBottom: '50px' }} />
      <Services style={{ marginBottom: '40px' }} />
      <SkillPage style={{ marginBottom: '60px' }} />
      <Work style={{ marginBottom: '40px' }} />
      <Contact style={{ marginBottom: '20px' }} />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
  // return (
  //   <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
  //     <Header />
  //     <Banner />
  //     <Nav />
  //     <About />
  //     <Services />
  //     <SkillPage />
  //     <Work />
  //     <Contact />
  //     {/* <div className='h-[4000px]'></div> */}
  //   </div>
  // );
};

export default App;
