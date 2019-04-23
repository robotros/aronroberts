import React, {Component} from 'react';

/**
* React Component to Render Aron Roberts Bio
* @author [Aron Roberts](https://github.com/robotros)
*/
class Credentials extends Component {
  state ={ }
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div className='container'>
        <h1>Why should I trust you?</h1>
        <p>Aside from a B.S. in Computer Science, Aron Roberts has many industry recognized certificates and Credentials.
        You can view a majority of these on his linked in profile.
        </p>
      </div>
    );
  }
}

export default Credentials;
