import React from 'react';
import Info from './info';
import About from './about';
import Interest from './AllAbout';
import NavB from './navbar';

function AllAbout() {
  return (
    <div>
      <NavB />
      <Info />
      <About />
      <Interest />
    </div>
  );
}

export default AllAbout;
