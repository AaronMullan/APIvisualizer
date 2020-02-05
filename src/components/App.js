import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import RecordDisplayerFn from '../containers/RecordDisplayerFn';

export default function App() {
  return (
    <>
      <Header />
      <RecordDisplayerFn />
      <Footer />
    </>
  );
}
