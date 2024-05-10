import React from 'react';
import ReactDOM from 'react-dom';
import './modal.scss';
const Modal = ({ isShowing, hide, element }) => {

  return isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="custom-modal-overlay" />
          <div
            className="custom-modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="custom-modal">
              <div className="custom-modal-header">
                <button
                  type="button"
                  className="custom-modal-close-button cross-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {element ? element : ''}
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default Modal;
