import Main from './Main-component/Main';
import About from './About-component/About';
import Products from './Products-component/Products';
// import RecentUpload from './Recent-Uploads/RecentUpload';
function Home(){
    return (
        <div className='container'>
          <Main/>
          <About/>
          <Products/>
        </div>
    );
  }

  export default Home;
