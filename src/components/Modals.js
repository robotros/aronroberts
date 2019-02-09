import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
* React Component to Render a project modal
* @author [Aron Roberts](https://github.com/robotros)
*/
class Modals extends Component {

  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div className='modal fade' id={this.props.proj.ID}
        tabIndex='-1' role='dialog' aria-labelledby='myModalLabel1'
        aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title' id='myModalLabel'>{this.props.proj.name}</h4>
            </div>
            <div className='modal-body'>
              <img src={this.props.proj.image} className='img-responsive modal-image img-fluid' alt={this.props.proj.name}></img>
              <h5 className='text-uppercase'>Description</h5>
              <p>{this.props.proj.description}</p>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-default' data-dismiss='modal'>Close</button>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

Modals.propTypes = {
  proj: PropTypes.object.isRequired,
};

export default Modals;
