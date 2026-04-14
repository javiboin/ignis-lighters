import Hero from '../components/Hero';
import AboutUs from './AboutUs';
import Collection from './Collection';
import Premium from './Premium';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Collection />
      <Premium />
      <AboutUs />
    </div>
  );
};

export default Home;
