import{css}from'@emotion/core';

export const api = '/api/v1';
export const users_api = '/users/';
export const activityApiUrl = '/activity/';
export const BEARER_TOKEN = 'DFA_USER_TOKEN';

export enum USER_ROLES  {
PUBLISHER = 'publisher',
USER = 'user',
ADMIN = 'admin'
}

export class ActivityTypes {
TRUE_FALSE = 'trueFalse';
MCQ_QUESTION = 'mcqQuestion';
MATCHING = 'matching';
FILL_IN_BLANK = 'fillInBlank'
}

export const TRUE_FALSE  = 'trueFalse';
export const MCQ_QUESTION = 'mcqQuestion';
export const MATCHING = 'matching';
export const FILL_IN_BLANK = 'fillInBlank';
export const RATING = 'rating';
export const USER_PROFILE = 'userProfile';
export const USER = 'user';
export const _ID = '_id';

export const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;
export const PROGRESS = 'progress';
export const COMPLETE = 'complete';
export const MODULE_LOCKED = 'This module is locked, kindly complete all previous modules first';
export const MODULE_INCOMPLETE = 'Looks like some of your answers were not correct. Please redo the module.';
export const MODULE_COMPLETED = 'Congratulations, you have completed this module';
export const MODULE_DATA = 'moduleData';
export const MODULE_STATUS_INCOMPLETE = 'moduleStatusIncomplete';
export const MODULE_ID = 'moduleId';
export const STATUS = 'status';
export const REDO = 'Redo';
export const DAY_IN_SECONDS = (24 * 60 * 60);
export const LOCKED = 'locked';
export const INCOMPLETE = 'incomplete';