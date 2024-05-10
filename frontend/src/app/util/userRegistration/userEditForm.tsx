import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../modal/modal.scss';
const EditFormModal = ({ submit, isShowing, hide, element }) => {
    const [userForm,setUserForm] = useState<any>({role:"user",school:"Darshan Academy, HQ",gender:"F"});
    const [contactError,setContactError] = useState<boolean>(false);
    const [fieldMandotoryError, setMandatoryFieldError] = useState<boolean>(false);
    const contactRegex = new RegExp('^[0-9]{10}$');
    const handleFormChanges = (event) => {
        setContactError(false)
        setMandatoryFieldError(false);
        setUserForm({ ...userForm,[event.target.name] : event.target.value})
    };

    const handleSubmit = (event)=> {
        event.preventDefault();
        let error = false;
        if(userForm.contact?.length > 0 && !contactRegex.test(userForm.contact)) {
            setContactError(true);
            error=true
        }

        if(Object.keys(userForm).length < 7 ) {
            setMandatoryFieldError(true);
            error=true;
        }

        for(let key in userForm) {
            if(userForm[key].length === 0) {
                setMandatoryFieldError(true);
                error=true;
            }
        }
        
        if(error) {
            return;
        }

        submit(userForm);
        
    }
    
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
                        <form onSubmit={handleSubmit} >
                            <div className="form-group">
                                <label>Teacher Name*</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    onChange={handleFormChanges}
                                    
                                />
                            </div>
                            <div className="form-group">
                                <label>Email address*</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                    name="email"
                                    onChange={handleFormChanges}
                                />
                            </div>
                            
                            <div className="form-group">
                                <label>Contact*</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="10 digit Contact no"
                                    name="contact"
                                    maxLength={10}
                                    onChange={handleFormChanges}
                                />
                            </div>
                            {contactError  && <p style={{color:"red"}}>Please enter 10 digit contact no</p>}
                            <div className="form-group">
                                <label>Gender</label>
                                <br/>
                                <select name="gender" style={{width: '50%',border: '1px solid #ced4da',height: '32px',borderRadius: '5px'}}  onChange={handleFormChanges}>
                                    <option value="F">Female</option>
                                    <option value="M">Male</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>School</label>
                                <br/>
                                <select name="school" style={{width: '50%',border: '1px solid #ced4da',height: '32px',borderRadius: '5px'}} onChange={handleFormChanges}>
                                    <option value="Darshan Academy, HQ">Darshan Academy, HQ</option>
                                    <option value="Darshan Academy, Delhi">Darshan Academy, Delhi</option>
                                    <option value="Darshan Academy, Dasuya">Darshan Academy, Dasuya</option>
                                    <option value="Darshan Academy, Ambala">Darshan Academy, Ambala</option>
                                    <option value="Darshan Academy, Amritsar">Darshan Academy, Amritsar</option>
                                    <option value="Darshan Academy, Bhubaneswar">Darshan Academy, Bhubaneswar</option>
                                    <option value="Darshan Academy, Bigas">Darshan Academy, Bigas</option>
                                    <option value="Darshan Academy, Devlali">Darshan Academy, Devlali</option>
                                    <option value="Darshan Academy, Ferozepur">Darshan Academy, Ferozepur</option>
                                    <option value="Darshan Academy, Gulariabhat">Darshan Academy, Gulariabhat</option>
                                    <option value="Darshan Academy, Hisar">Darshan Academy, Hisar</option>
                                    <option value="Darshan Academy, Jagdishpura">Darshan Academy, Jagdishpura</option>
                                    <option value="Darshan Academy, Jansath">Darshan Academy, Jansath</option>
                                    <option value="Darshan Academy, Kalka">Darshan Academy, Kalka</option>
                                    <option value="Darshan Academy, Lucknow">Darshan Academy, Lucknow</option>
                                    <option value="Darshan Academy, Ludhiana">Darshan Academy, Ludhiana</option>
                                    <option value="Darshan Academy, Meerut">Darshan Academy, Meerut</option>
                                    <option value="Darshan Academy, Modasa">Darshan Academy, Modasa</option>
                                    <option value="Darshan Academy, Pune">Darshan Academy, Pune</option>
                                    <option value="Darshan Academy, Rathonda">Darshan Academy, Rathonda</option>
                                    <option value="Darshan Academy, Sundargarh">Darshan Academy, Sundargarh</option>
                                    <option value="Darshan Academy, Modasa">Darshan Academy, Modasa</option>
                                    <option value="Darshan Academy, Jalandhar Senior Wing">Darshan Academy, Jalandhar Senior Wing</option>
                                    <option value="Darshan Academy, Jalandhar Junior Wing">Darshan Academy, Jalandhar Junior Wing</option>
                                    <option value="Darshan Academy, Kaithal">Darshan Academy, Kaithal</option>
                                    <option value="Darshan Academy, Cali">Darshan Academy, Cali</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Role</label>
                                <br/>
                                <select name="role"  style={{width: '50%',border: '1px solid #ced4da',height: '32px',borderRadius: '5px'}}  onChange={handleFormChanges}>
                                    <option value="user">User</option>
                                    <option value="publisher">Publisher</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Designation*</label>
                                <br/>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Designation"
                                    name="designation"
                                    onChange={handleFormChanges}
                                />
                            </div>
                            {fieldMandotoryError && <p style={{color:"red"}}>* Marked Fields are mandatory</p>}
                            <button className="btn btn-primary btn-block">
                                Create Account
                            </button>
                        </form>
                    </div>
                </div>
            </React.Fragment>,
            document.body
        )
        : null;
};

export default InputFormModal;
