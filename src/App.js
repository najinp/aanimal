import './App.css';
import Header from './component/Header'
import MainVisual from './component/MainVisual';
import Part from './component/Part';
import Part2 from './component/Part2';
import Video from './component/Video';
import Footer from './component/Footer';

const App = () => {
  return (
    <div className="Wrap">
      <Header />
      <main>
        <MainVisual />
        <Part2 />
        <Video />
      </main>
      <Footer />
    </div>
  );
}

export default App;

