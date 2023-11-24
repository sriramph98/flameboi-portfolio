import Music from './Music';
import NavBar from './components/NavBar';
import SubNav from './components/subNav';


export default function Home() {
  return (
    <>
    <div className='p-8'>

    <div className='gap-16'>

        <div className='gap-8'>
          <h1>Flameboi</h1>
          <h1>Independant Creative Artist</h1>
        </div>

        <NavBar/>
        <SubNav/>
      <Music/>
      </div>

      <footer>
        <ul>Instagram</ul>
        
      </footer>

    </div>
  
    </>
  );
}