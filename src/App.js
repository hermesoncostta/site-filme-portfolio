import React , { useEffect , useState} from "react";
import apiFilme from "./Api/Api"
import MovieRow from "./components/MovieRow";
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import Api from "./Api/Api";
import './App.css';
import Header from './components/Header';
import loadingimg from './assets/Images/loading.gif';

function App() {
  
  const [movieList, setMovieList] = useState([]);

  const [featuredData, setFeaturedData] = useState(null);

  const [blueHeader, setBlueHeader] = useState(false);

useEffect(() => {
  const loadFilm = async () => {
    let list = await apiFilme.getHomeList();
    setMovieList(list);


    let originals = list.filter(i=> i.slug='toprated');
    let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length));
    let chosen = originals[0].items.results[randomChosen];
    let chosenInfo = await Api.getMovieInfo(chosen.id, "tv");
    setFeaturedData(chosenInfo);
  }

  loadFilm();


}, []);


useEffect(() => {
  const scrollListener = () => {
    if(window.scrollY > 15){
      setBlueHeader(true);
    }else{
      setBlueHeader(false);
    }
  }
  window.addEventListener('scroll', scrollListener);
  return () => {
    window.removeEventListener('scroll', scrollListener);
  }
}, []);


  return (
    <div className="pageHome">

    <Header Blue={blueHeader}/>

    {featuredData && <FeaturedMovie item={featuredData}/>}

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
          
        
        ))}
      </section>,


          {/* Gif de carregamento */}
      {movieList.length <= 0 &&
   <div className="loading">
    <img src={loadingimg}/>
   </div>
  }
    </div>

   
  
  );
  
}


export default App;
