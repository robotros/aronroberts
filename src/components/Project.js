import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
* React Component to Render a project
* @author [Aron Roberts](https://github.com/robotros)
*/
class Project extends Component {
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    let target = '#' + this.props.proj.ID;
    return (
      <div className='col-md-3 project'>
        <img src={this.props.proj.image}
          className='img-responsive img-fluid img-thumbnail proj-img'
          alt={this.props.proj.name} data-toggle='modal'
          data-target={target}></img>
        <h4>{this.props.proj.name}</h4>
        <ul>
          <li><a href={this.props.proj.github}>github</a></li>
          <li><a href={this.props.proj.url}>live</a></li>
        </ul>
      </div>
    );
  }
}

Project.propTypes = {
  proj: PropTypes.object.isRequired,
};

export default Project;
