import React from 'react';
import ReactDOM from 'react-dom';
import './ratingModal.scss';
import './../modal/modal.scss';
const RatingModal = ({ isShowing, hide, element }) => {

  return isShowing
    ? ReactDOM.createPortal(
      <>
        <div className="custom-modal-overlay" />
        <div
          className="custom-modal-wrapper"
          aria-modal
          aria-hidden
          tabIndex={-1}
          role="dialog"
        >
          <div className="custom-modal" style={{backgroundColor:"#d44994"}}>
            <div className="custom-modal-header">
              <button
                type="button"
                className="custom-modal-close-button cross-button"
                data-dismiss="modal"
                style={{backgroundColor:"#ffffff"}}
                aria-label="Close"
                onClick={hide}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
           <p className={"text-center"} style={{color:"#ffffff"}}>Please enter value between 1 and 5</p>
          </div>
        </div>
      </>,
      document.body
    )
    : null;
};

export default RatingModal;
