import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Section1 from './Section1';
import exampleImage from './images/dog.png'; // 画像ファイルのパスを指定

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Hello, World!</h1>
        <p>This is a web site for my first project.</p>
        <Section1 />
        <img src={exampleImage} alt="Example" />
      </main>
      <Footer />
    </div>
  );
};

export default App;
