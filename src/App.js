import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Portrait from './Components/Main/img/portrait.jpg'
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

class App extends Component {

  state = {
    mains: [
      {img:Portrait, title:'I Am Mordak', description:'Graphic Artist - Web Designer - Illustrator', mainId:'main-1'}
    ],
  }

  render(){
    return (
      <div >
        
          <Header></Header>
          <Main img={this.state.mains[0].img} title={this.state.mains[0].title} description={this.state.mains[0].description}></Main>
          <Main img={this.state.mains[0].img} title={this.state.mains[0].title} description={this.state.mains[0].description} mainId={this.state.mains[0].mainId}></Main>
          <Main img={this.state.mains[0].img} title={this.state.mains[0].title} description={this.state.mains[0].description} mainId={'main-2'}></Main>
          <Main img={this.state.mains[0].img} title={this.state.mains[0].title} description={this.state.mains[0].description} mainId={'main-3'}></Main>
          <Main img={this.state.mains[0].img} title={this.state.mains[0].title} description={this.state.mains[0].description} mainId={'main-4'}></Main>
        
      </div>
    );
  }
}

export default App;
