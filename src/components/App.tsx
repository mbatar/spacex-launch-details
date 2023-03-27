import IndexRouter from '../routes';
import Search from './Search';

function App() {
  return (
    <div className='bg-launch-desktop bg-cover bg-screen w-full h-full pb-12'>
      <Search />
      <IndexRouter />
    </div>
  );
}

export default App;
