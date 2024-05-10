//@ts-nocheck
import React, { useCallback, useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { saveModuleProgress } from './action';
import { PuffLoader } from 'react-spinners';
import {
  MODULE_INCOMPLETE,
  override,
  USER,
  _ID,
  USER_PROFILE,
  PROGRESS,
  MODULE_LOCKED,
  MODULE_STATUS_INCOMPLETE,
  MODULE_ID,
  LOCKED, INCOMPLETE, COMPLETE, MODULE_COMPLETED
} from '../../constants';
import { useSelector } from 'react-redux';
import moduleApi from '../../api/moduleApi';
import './module.scss';
import Module1 from './1';
import Module2 from './2';
import Module3 from './3';
import Module4 from './4';
import Module5 from './5';
import Module6 from './6';
import Module7 from './7';
import Module8 from './8';
import Module9 from './9';
import Module10 from './10';
import Module11 from './11';
import Module12 from './12';
import Module13 from './13';
import Module14 from './14';
import Module15 from './15';
import Modal from '../../util/modal/modal';
import ModuleModal from '../../util/modal/ModuleModals';

const mapState = (id) => (state) => {
  const moduleData = state?.moduleData[id] ? state.moduleData[id] : {};
  return {
    'totalQuestion': moduleData?.data?.totalQuestion
  };
};


const Module = (props): JSX.Element => {
  const moduleIdInUrl = props.match.params.id;
  const [loader, showLoader] = useState<boolean>(true);
  const [moduleLocked, setModuleLocked] = useState<boolean>(false);
  const [moduleIncomplete, setModuleIncomplete] = useState<boolean>(false);
  const [moduleCompleted, setModuleCompleted] = useState<boolean>(false);
  const [nextModule, setNextModule] = useState<string>('-1');
  const dispatch = useDispatch();
  const userId = useSelector((state) => state[USER]?.[USER_PROFILE]?.[_ID]);


  const showNextModule = useCallback(
    (moduleId) => {
      let status = '';
      window.scrollTo({ top: 0 });
      (async () => {
        const elem = document.getElementsByClassName('active')?.[0];
        if (elem && elem.hasAttribute('data-id-next')) {
          showLoader(true);
          setModuleIncomplete(false);
          setModuleCompleted(false);
          try {
            const module = await moduleApi.getModule([props.match.params.id], userId);
            if (!module[0]) {
              setModuleLocked(true);
              setNextModule(moduleId);
            } else if (module[0].status === PROGRESS) {
              status = PROGRESS;
              setModuleIncomplete(true);
              dispatch({
                type: MODULE_STATUS_INCOMPLETE,
                payload: { [MODULE_ID]: moduleIdInUrl, status: true }
              });
            } else if (module[0].status === COMPLETE) {
              status = COMPLETE;
              setNextModule(moduleId);
              setModuleCompleted(true);
            }
          } catch (ex) {

          } finally {
            showLoader(false);
          }

        }
      })();
    },
    [props.history, props.match.params.id, nextModule]
  );

  const showPrevModule = useCallback(
    (moduleId) => {
      window.scrollTo({ top: 0 });
      const elem = document.getElementsByClassName('active')?.[0];
      if (elem && elem.hasAttribute('data-id-prev')) {
        props.history.push(`/module/${moduleId}`);

        return false;
      }
      return true;
    },
    [props.history]
  );

  let ModuleToRender: JSX.Element;

  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (moduleIdInUrl === '1' || parseInt(moduleIdInUrl) > 1 ) {
      showLoader(false);
      setModuleLocked(false);
      return;
    }
    (async () => {
      try {
        const module = await moduleApi.getModule([moduleIdInUrl], userId);
        if (!module[0]) {
          setModuleLocked(true);
        }
      } catch (exception) {
        console.log(exception);
      } finally {
        showLoader(false);
      }
    })();

  }, [moduleIdInUrl]);


  switch (moduleIdInUrl) {
    case '1':
      ModuleToRender = connect(mapState(1), { saveModuleProgress })(Module1);
      break;
    case '2':
      ModuleToRender = connect(mapState(2), { saveModuleProgress })(Module2);
      break;
    case '3':
      ModuleToRender = connect(mapState(3), { saveModuleProgress })(Module3);
      break;
    case '4':
      ModuleToRender = connect(mapState(4), { saveModuleProgress })(Module4);
      break;
    case '5':
      ModuleToRender = connect(mapState(5), { saveModuleProgress })(Module5);
      break;
    case '6':
      ModuleToRender = connect(mapState(6), { saveModuleProgress })(Module6);
      break;
    case '7':
      ModuleToRender = connect(mapState(7), { saveModuleProgress })(Module7);
      break;
    case '8':
      ModuleToRender = connect(mapState(8), { saveModuleProgress })(Module8);
      break;
    case '9':
      ModuleToRender = connect(mapState(9), { saveModuleProgress })(Module9);
      break;
    case '10':
      ModuleToRender = connect(mapState(10), { saveModuleProgress })(Module10);
      break;
    case '11':
      ModuleToRender = connect(mapState(11), { saveModuleProgress })(Module11);
      break;
    case '12':
      ModuleToRender = connect(mapState(12), { saveModuleProgress })(Module12);
      break;
    case '13':
      ModuleToRender = connect(mapState(13), { saveModuleProgress })(Module13);
      break;
    case '14':
      ModuleToRender = connect(mapState(14), { saveModuleProgress })(Module14);
      break;
    case '15':
      ModuleToRender = connect(mapState(15), { saveModuleProgress })(Module15);
      break;
    default:
      props.history.push('/not-found');
      return null;
  }

  const gotoNextModule = ()=>{
    props.history.push(`/module/${nextModule}`);
    setModuleCompleted(false);
  }

  if (loader) {
    return (
      <div className="ch-super-container">
        <PuffLoader css={override} size={300} color={'#18afe6'} loading={true}/></div>);
  } else if (moduleLocked) {
    return (
      <div className="ch-super-container">
        <ModuleModal buttonAction={() => props.history.push('/profile')} moduleType={LOCKED} text={MODULE_LOCKED}
                     isShowing={true}/></div>);
  } else if (moduleCompleted) {
    return (
      <div className="ch-super-container">
        <ModuleModal buttonAction={gotoNextModule} moduleType={COMPLETE}
                     text={MODULE_COMPLETED}
                     isShowing={true}/></div>);
  }

  return (
    <div className="ch-super-container">
      <ModuleToRender
        showCompletionPopup={false}
        showNextModule={showNextModule}
        showPrevModule={showPrevModule}
      />
      {moduleIncomplete &&
			<ModuleModal moduleType={INCOMPLETE} text={MODULE_INCOMPLETE} isShowing={true}/>}
    </div>
  );
};

export default Module;
