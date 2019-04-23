/**
* filename: App.js
* Main component to render aronroberts.com Webpage
*
* Author:[Aron Roberts](github.com/robotros)
* Last Update: 02/08/2019
*/
import React from 'react';
import {Route} from 'react-router-dom';
import ReactDOMServer from 'react-dom/server';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faCopyright, faFlagUsa} from '@fortawesome/free-solid-svg-icons';
import Head from './components/Head';
import Foot from './components/Foot';
import Portfolio from './components/Portfolio';
import Bio from './components/Bio';
import Credentials from './components/Credentials';
import './css/app.css';

// font awesome icon library
library.add(faCopyright, faFlagUsa);

/**
* React Component to Render aronroberts.com Website
* @author [Aron Roberts](https://github.com/robotros)
*/
class AronRobertsApp extends React.Component {
  state = {
    Nav: [
      {
        'path': '/',
        'label': 'Portfolio',
        'component': Portfolio,
      },
      {
        'path': '/Bio',
        'label': 'Bio',
        'component': Bio,
      },
      {
        'path': '/Credentials',
        'label': 'Credentials',
        'component': Credentials,
      },
    ],
    social: [
      {'url': 'https://www.linkedin.com/in/aronroberts'},
      {'url': 'https://github.com/robotros'},
    ],
  }

  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <main className='app'>
        <Head Nav={this.state.Nav}/>
        <div className='center'>
          {this.state.Nav.map((page) =>
            <Route
              key={page.label}
              exact path={page.path}
              component={page.component}
            />
          )}
        </div>
        <Foot social={this.state.social}/>
      </main>
    );
  }
}

export default AronRobertsApp;
