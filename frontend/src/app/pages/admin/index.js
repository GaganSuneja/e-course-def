/**
 * Created by ajaykumar on 12/04/20
 */
import React, { useState, useEffect, memo } from 'react';
import moment from 'moment';
import Pagination from 'react-js-pagination';
//api
import { usersApi } from '../../api/usersApi';


//styles
import './index.scss';
import useModal from '../../util/modal/useModal.ts';
import InputFormModal from '../../util/userRegistration/userRegistrationForm';
import { PuffLoader } from 'react-spinners';
import { override,COMPLETE } from '../../constants';
import moduleApi from '../../api/moduleApi';
const Admin = (props) => {
  const limit = 10;
  const query = 'limit=' + limit + '&page=1';
  const [users, setUsers] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const { isShowing, toggle } = useModal();
  const [userProgress, setUserProgress] = useState({});
  const [userDetails,setUserDetails]=useState(false);


  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    usersApi.getAllUsers(createQuery(activePage)).then((users) => {
      setUsers(users);
    });
    usersApi.getUsersCount().then((result) => {
      setTotalUsers(result);
    });
  }, []);

  useEffect(() => {
    usersApi.getAllUsers(createQuery(activePage)).then((users) => {
      setUsers(users);
    });
  }, [activePage]);

  useEffect(() => {
    (async () => {
      const userProgressObject = {};
      let totalModules = [...Array(16).keys()].map((x) => ++x);
      let completedModules = 0;
      for (let user of users) {
        const allModules = await moduleApi.getModule(totalModules, user['_id']);
        for (let m of allModules) {
          if (m.status === COMPLETE) {
            ++completedModules;
          }
        }
        userProgressObject[user['_id']] = completedModules;
        completedModules = 0;
      }
      setUserProgress(userProgressObject)
    })();
  }
    , [users]);


  const createUser = (newUser) => {
    usersApi.create(newUser).then((response) => {
      toggle();
      usersApi.getAllUsers(createQuery(activePage)).then((users) => {
        setUsers(users);
      });
      usersApi.getUsersCount().then((result) => {
        setTotalUsers(result);
      });
    });
  };

  const createQuery = (page) => {
    return 'limit=' + limit + '&page=' + page;
  };


  const editUser = (userForm)=>{
    usersApi.update(userForm._id,userForm).then((response)=>{
      let index = users.findIndex((u)=>{return u._id===userForm._id});
      users[index]=userForm;
      setUsers(users);
      toggle()
    })
  }

  const deleteUser = (userId) => {
    const user = users.find((usr) => {
      return usr._id === userId;
    });
    if (user.role === 'publisher') {
      alert('publisher cant be deleted');
      return;
    }
    usersApi.remove(userId).then((res) => {
      usersApi.getAllUsers().then((users) => {
        toggle();
        setUsers(users);
      });
    });
  };

  const pageChange = (data) => {
    setActivePage(data);
  };


  const createModalInput = async (modal, user) => {
    switch(modal) {
      case 'create':
        setUserDetails(undefined)
        toggle()
        break;
      case 'delete':
        await setInputForm(deleteUserForm(userId));
        break;
      case 'edit':
        setUserDetails(user)
        toggle();
        break;
    }
  };

  const closeForm = () => {
    toggle();
  };


  if (users.length === 0) {
    return (<PuffLoader css={override} size={150} color={'#18afe6'} loading={true} />)
  }

  return (
    <div>
      <div className="user-management-container">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-5">
                <h2>
                  User <b>Management</b>
                </h2>
              </div>
              <div className="col-sm-7">
                <button
                  className="btn btn-primary"
                  onClick={() => createModalInput('create', null)}
                >
                  <i className="material-icons">&#xE147;</i>
                  <span>Add New User</span>
                </button>
              </div>
            </div>
          </div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>School</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Designation</th>
                <th>Date Created</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{index + (activePage - 1) * limit + 1}</td>
                    <td>
                      {user.name}
                      {'   '}
                      <br/>
                      <br/>
                      <div style={{display:'inline-block'}}>
                        {(userProgress[user._id] >= 0) ? <span style={{lineHeight:'1.5px',fontWeight:'bold'}}>
                          Modules Completed: { userProgress[user._id]}/15</span> : 
                        <PuffLoader css={override} size={5} color={'#18afe6'} loading={true} />}
                      </div>
                    </td>
                    <td>{user.school}</td>
                    <td>{user.email}</td>
                    <td>{user.contact}</td>
                    <td>{user.designation}</td>
                    <td>{moment.unix(user.createdAt).format('DD-MM-YY')}</td>
                    <td>{user.role}</td>
                    <td>
                      <a className="settings"
                        title="Settings"
                        data-toggle="tooltip"
                        onClick={()=> createModalInput('edit', user)}
                      >
                        <i className="material-icons">edit</i>
                      </a>
                      <a
                        className="delete"
                        title="Delete"
                        data-toggle="tooltip"
                        onClick={() => createModalInput('delete', user._id)}
                      >
                        <i className="material-icons">&#xE5C9;</i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="clearfix">
            <div className="hint-text">
              Showing <b> {users.length < limit ? users.length : limit}</b> out
              of <b>{totalUsers}</b> entries
            </div>
          </div>
        </div>
      </div>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={10}
        totalItemsCount={totalUsers}
        pageRangeDisplayed={5}
        onChange={(event) => pageChange(event)}
        innerClass={'pagination justify-content-center'}
        itemClass="page-item"
        linkClass="page-link"
      />
      <InputFormModal isShowing={isShowing} userDetails={userDetails} edit={editUser} submit={createUser} hide={closeForm} />
    </div>
  );
};

export default Admin;
