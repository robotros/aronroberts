import React, {Component} from 'react';
import Project from './Project';
import Modals from './Modals';
import WMPQ from '../img/wmpq_website.png';
import Matching from '../img/matching.png';
import Arcade from '../img/arcade.png';
import NMap from '../img/map.png';
import Banner from '../img/banner.jpg';
import Blog from '../img/blog.jpg';
import Lottopicker from '../img/lottopicker.png';

/**
* React Component to Render Aron Roberts Portfolio
* @author [Aron Roberts](https://github.com/robotros)
*/
class Portfolio extends Component {
  state ={
    projects: [
      {
        'ID': 'WMPQ',
        'name': 'WMPQ Gaming',
        'github': 'https://github.com/robotros/WMPQ-Website',
        'url': 'https://wmpq.org',
        'image': WMPQ,
        'description': 'The website for WMPQ Gaming',
      },
      {
        'ID': 'Match',
        'name': 'Matching Game',
        'github': 'https://github.com/robotros/fend-project-memory-game-master',
        'url': 'http://www.aronroberts.com/memory/index.html',
        'image': Matching,
        'description': 'A simple memory game created in javascript',
      },
      {
        'ID': 'Arcade',
        'name': 'Arcade Game',
        'github': 'https://github.com/robotros/fend-project-memory-game-master',
        'url': 'http://www.aronroberts.com/arcade/index.html',
        'image': Arcade,
        'description': 'A frogger like game made in javascript',
      },
      {
        'ID': 'NMap',
        'name': 'Neighboorhood Map',
        'github': 'https://github.com/robotros/FEND-neighborhood-map',
        'url': 'http://fendreactmap.aronroberts.com/',
        'image': NMap,
        'description': 'A neighboorhood map using various APIs',
      },
      {
        'ID': 'Blog',
        'name': 'Blog',
        'github': 'https://github.com/robotros/UDACITY/tree/master/full-stack-nanodegree/Project-Multi-User-Blog',
        'url': 'https://hello-world-158219.appspot.com/blog/',
        'image': Blog,
        'description': 'A multi user blog built on google using python',
      },
      {
        'ID': 'LottoPicker',
        'name': 'Power Ball Generator',
        'github': 'https://github.com/robotros/Lottery_App',
        'url': 'https://lottopicker.online',
        'image': Lottopicker,
        'description': 'An website that generates powerball numbers',
      },
    ],
  }
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-2'>
          </div>
          <div className='col-md-10 text-right text-uppercase'>
            <h1 className='black'>Aron Roberts
              <br></br><small className='navy'>Full Stack Engineer</small>
            </h1>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <img src={Banner}
              className='img-responsive img-fluid'
              alt='code on monitor' />
          </div>
        </div>
        <hr></hr>
        <section id='projects'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h2 className='text-muted'>Featured Work</h2>
              </div>
            </div>
            <div className='row'>
              {this.state.projects.map((P) =>
                <Project
                  key={P.name}
                  proj={P}
                />
              )}
            </div>
          </div>
        </section>
        <div>
          {this.state.projects.map((P) =>
            <Modals
              key={P.name}
              proj={P}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Portfolio;
