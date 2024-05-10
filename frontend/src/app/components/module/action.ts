import { MODULE_DATA} from '../../constants';
import {GET_USER_PROGRESS} from '../user/types';
import moduleApi from '../../api/moduleApi';

export const fetchModuleData = (moduleId, userId) => (dispatch) => {
  moduleApi.getModule(moduleId, userId).then((res) => {
    dispatch({ type: MODULE_DATA, payload: { 'moduleId': moduleId, 'data': res } });
  });
};

export const saveModuleProgress = (moduleId, userId,data) => (dispatch) => {
  moduleApi.updateUserProgress(userId,moduleId,data).then(()=>{
  })
};

export const fetchUserProgressModule = (userId,moduleId) => (dispatch) => {
  moduleApi.getUserProgress(userId,moduleId).then((res)=>{
    dispatch({type:GET_USER_PROGRESS,payload: {'moduleId': moduleId, 'data': res }})
  })
};


export const saveActivityResult = (userId,moduleId,data)  => {
  return moduleApi.updateUserProgress(userId,moduleId,data).then((res)=>{
    return res;
  })
};

export const deleteActivity= (userId,moduleId,data)  => {
  return moduleApi.deleteUserProgress(userId,moduleId,data).then((res)=>{
    return res;
  })
};