import React, { Component, PropTypes } from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactDOM from 'react-dom';

class ErrorModal extends Component{
  static defaultProps = {
    title: 'ErrorR'
  }
  componentDidMount() {
    const { title, message } = this.props;
    var modalMarkup = (
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
    var modal2 = ReactDOMServer.renderToString(modalMarkup);
    var $modal = $(modal2);
    $(ReactDOM.findDOMNode(this)).html($modal);
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }
  render() {

    return (<div></div>);
  }
}


ErrorModal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired
};
export default ErrorModal;
