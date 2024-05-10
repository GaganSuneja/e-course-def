import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { PrimaryButton } from '../../../components/buttons';
import { COMPLETE, INCOMPLETE, LOCKED } from '../../../constants';


const ModuleModal = ({ isShowing, moduleType, text, buttonAction }) => {

  let imgPath = '';
  let btn_text = '';
  const [show, setShow] = useState<boolean>(isShowing);
  if (moduleType === LOCKED) {
    imgPath = '../../../../../assets/icons/popup-Module-Blocked.png';
    btn_text='Go to Profile';
  } else if(moduleType === INCOMPLETE) {
    imgPath = '../../../../../assets/icons/popup-Module-Proccess.png';
    btn_text = 'Redo';
    buttonAction = () => {
      setShow(false);
    };
  } else if(moduleType === COMPLETE) {
    imgPath = '../../../../../assets/icons/popup-Module-Proccess.png';;
    btn_text='Next Module';
  }


  return show
    ? ReactDOM.createPortal(
      <React.Fragment>
        <div className="custom-modal-overlay"/>
        <div
          className="custom-modal-wrapper"
          aria-modal
          aria-hidden
          tabIndex={-1}
          role="dialog"
        >
          <div className="custom-Module-modal">
            <div>
              <img src={imgPath}/>
              <div className="modal-bottom-text">
                {text}
                <div>
                  <PrimaryButton btn_text={btn_text} className={'redoBtn'} OnClick={()=>{buttonAction()}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>,
      document.body
    )
    : null;
};

export default ModuleModal;
