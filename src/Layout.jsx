import React from 'react';
import { Outlet } from 'react-router-dom';
import Haeder from '@/components/common/Haeder';
import Footer from '@/components/common/Footer';

const Layout = () => {
  return (
    <div>
      <Haeder />
      <main><Outlet /></main>
      <Footer />
    </div>
  );
};

export default Layout;