import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Form from './components/Form';


class App extends Component {

  state = { 
    news: []
   }

   componentDidMount() {
    this.consultNews();
  }  

  consultNews = async ( category = 'technology') => {
    const url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=a01c4fb69675455ba3aeac8088439d1e`;

    const answer = await fetch(url);
    const news = await answer.json();

    this.setState ({
      news : news.articles
    })
  }
  
  render() { 
    return ( 
      <Fragment>
          <Header
            title = 'Colombian  News API'
          />

          <div className = "container white contenedor-noticias">
              <Form 
                consultNews = {this.consultNews}
              />
              <NewsList
                news = {this.state.news}
              />
          </div>
      </Fragment>

     );
  }
}
 
export default App;


