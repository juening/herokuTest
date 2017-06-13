import React, { Component, PropTypes } from 'react';

class ErrorModal extends Component{
  static defaultProps = {
    title: 'ErrorR'
  }
  componentDidMount() {
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }
  render() {
    const { title, message } = this.props;
    return (
      <div id="error-modal" className="reveal small text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
  }
}


ErrorModal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired
};
export default ErrorModal;
