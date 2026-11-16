'use client';

import React, {Component} from 'react';
import Project from './Project';
import Modals from './Modals';

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
        'image': '/img/wmpq_website.png',
        'description': 'The website for WMPQ Gaming',
      },
      {
        'ID': 'Match',
        'name': 'Matching Game',
        'github': 'https://github.com/robotros/fend-project-memory-game-master',
        'url': 'http://www.aronroberts.com/memory/index.html',
        'image': '/img/matching.png',
        'description': 'A simple memory game created in javascript',
      },
      {
        'ID': 'Arcade',
        'name': 'Arcade Game',
        'github': 'https://github.com/robotros/fend-project-memory-game-master',
        'url': 'http://www.aronroberts.com/arcade/index.html',
        'image': '/img/arcade.png',
        'description': 'A frogger like game made in javascript',
      },
      {
        'ID': 'NMap',
        'name': 'Neighboorhood Map',
        'github': 'https://github.com/robotros/FEND-neighborhood-map',
        'url': 'http://fendreactmap.aronroberts.com/',
        'image': '/img/map.png',
        'description': 'A neighboorhood map using various APIs',
      },
      {
        'ID': 'Blog',
        'name': 'Blog',
        'github': 'https://github.com/robotros/UDACITY/tree/master/full-stack-nanodegree/Project-Multi-User-Blog',
        'url': 'https://hello-world-158219.appspot.com/blog/',
        'image': '/img/blog.jpg',
        'description': 'A multi user blog built on google using python',
      },
      {
        'ID': 'LottoPicker',
        'name': 'Power Ball Generator',
        'github': 'https://github.com/robotros/Lottery_App',
        'url': 'https://lottopicker.online',
        'image': '/img/lottopicker.png',
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
            <img src='/img/banner.jpg'
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
