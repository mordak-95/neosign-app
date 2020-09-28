import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Portrait from './Components/Main/img/portrait.jpg'
import Background0 from './Components/Main/img/BackGround/bg.jpg'
import Background1 from './Components/Main/img/BackGround/london.jpg'
import Background2 from './Components/Main/img/BackGround/new-york.jpg'
import Background3 from './Components/Main/img/BackGround/rome.jpg'
import Background4 from './Components/Main/img/BackGround/tokyo.jpg'
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

class App extends Component {
  

  state = {
    mains: [
      {img:Portrait, background:Background0, title:'I Am Mordak', description:'Graphic Artist - Web Designer - Illustrator', mainId:'main-0'},
      {img:Portrait, background:Background1, title:'I Am Mordak', description:'Graphic Artist - Web Designer - Illustrator', mainId:'main-1'},
      {img:Portrait, background:Background2, title:'I Am Mordak', description:'Graphic Artist - Web Designer - Illustrator', mainId:'main-2'},
      {img:Portrait, background:Background3, title:'I Am Mordak', description:'Graphic Artist - Web Designer - Illustrator', mainId:'main-3'},
      {img:Portrait, background:Background4, title:'I Am Mordak', description:'Graphic Artist - Web Designer - Illustrator', mainId:'main-4'}
    ],
  }

  render(){

    
    return (
      <div >        
          <Header></Header>
          <div className='scroll'>
            <Main img={this.state.mains[0].img} background={this.state.mains[0].background} title={this.state.mains[0].title} description={this.state.mains[0].description} mainId={this.state.mains[0].mainId}></Main>
            <Main img={this.state.mains[0].img} background={this.state.mains[1].background} title={this.state.mains[0].title} description={this.state.mains[0].description} mainId={this.state.mains[1].mainId}></Main>
            <Main img={this.state.mains[0].img} background={this.state.mains[2].background} title={this.state.mains[0].title} description={this.state.mains[0].description} mainId={this.state.mains[2].mainId}></Main>
            <Main img={this.state.mains[0].img} background={this.state.mains[3].background} title={this.state.mains[0].title} description={this.state.mains[0].description} mainId={this.state.mains[3].mainId}></Main>
            <Main img={this.state.mains[0].img} background={this.state.mains[4].background} title={this.state.mains[0].title} description={this.state.mains[0].description} mainId={this.state.mains[4].mainId}></Main>
          </div>
      </div>
    );
  }
}

export default App;
