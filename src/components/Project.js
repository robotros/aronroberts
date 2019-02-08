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
    return (
      <div>
        <div className='col-md-4'>
          <img src={this.props.proj.image} className='img-responsive img-fluid img-thumbnail' alt={this.props.proj.name} data-toggle='modal' data-target='#{this.props.proj.ID}'></img>
          <h3>{this.props.proj.name}</h3>
          <ul>
            <li><a href={this.props.proj.github}>github</a></li>
            <li><a href={this.props.proj.url}>live</a></li>
          </ul>
        </div>


        <div className='modal fade' id={this.props.proj.ID} tabindex='-1' role='dialog' aria-labelledby='myModalLabel1' aria-hidden='true'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h4 className='modal-title' id='myModalLabel'>{this.props.proj.name}</h4>
              </div>
              <div className='modal-body'>
                <img src={this.props.proj.image} class='img-responsive' alt={this.props.proj.name}></img>
                <h5 className='text-uppercase'>Description</h5>
                <p>{this.props.proj.description}</p>
              </div>
              <div class='modal-footer'>
                <button type='button' className='btn btn-default' data-dismiss='modal'>Close</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

Project.propTypes = {
  proj: PropTypes.object.isRequired,
};

export default Project;
