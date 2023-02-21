import React from 'react';
import axios from 'axios';
import './Home.scss'
import HomeMovie from '../component/HomeMovie'



class Home extends React.Component {
    state = {
      isLoading: true,
      movies:[]
    }
    getMovies=async () => {
      const {
        data: {
          data:{movies},
      },
    }=await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
      //console.log(movies);
      this.setState({movies, isLoading:false})//키와 밸류값이 같을 때는 ({movies: movies})를 ({movies})라고 써도 됨
    }
    componentDidMount(){
      this.getMovies();
    }
    render() {
      const {isLoading, movies} = this.state;
      return (
        <section className='container'>
          <div className='home_title_wrap'>
            <h1 className='home_title'><span className='mv_title'>JOOCINEMA</span> <span className='mv_best'>최고</span> <br/>인기작 콘텐츠 <span className='mv_ea'>{movies.length}</span> 개</h1>
            <p className='home_content'>블록버스터 영화부터 아트 영화, 인기 애니메이션, 드라마, 예능 등 모든 작품을 무료 이용으로 감상하세요.<br/>취향에 맞는 작품을 선별하여 추천해드릴게요 😋</p>
          </div>
          <h2 className='movie_title'><span className='mv_ea_1'>{movies.length}</span> 개의 인기작 콘텐츠 목록</h2>
          {isLoading ? (<div className='loader'><span className='loader_text'>Loading...</span></div>) : 
          (<div className='movies'>
              {movies.map(movie => (
              //console.log(movie);
              <HomeMovie
                key={movie.id} 
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres}
                />
              )
              )}
          </div>
          )
        }
        </section>
      );
    }
  }
  
  export default Home;