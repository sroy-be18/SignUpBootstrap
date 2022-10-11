import React from 'react';
import ReactDOM from 'react-dom';

const SuccessModal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal-new">
              <div className="modal-header-new">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <p>Account Created Successfully</p>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default SuccessModal;
