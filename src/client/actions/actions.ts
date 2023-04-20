// import actionType constants
import { createAction } from '@reduxjs/toolkit';
import {ResumeType, SectionType, UserData, ProfileType, GridType} from '../../../types';
import { useSectionPayload } from './actionTypes';

// actionTypes need 
export const initializeStore = createAction<UserData>('INITIALIZE_STORE');
export const createResume = createAction<ResumeType>('CREATE_RESUME');
export const updateResume = createAction<ResumeType>('UPDATE_RESUME');
export const deleteResume = createAction<string>('DELETE_RESUME');
export const loadResume = createAction<ResumeType>('LOAD_RESUME');

export const createSection = createAction<SectionType>('CREATE_SECTION');
export const updateSection = createAction<SectionType>('UPDATE_SECTION');
export const deleteSection = createAction<string>('DELETE_SECTION');

export const useSection = createAction<string>('USE_SECTION');
// export const loadComponent = createAction<ComponentType>('LOAD_COMPONENT');
export const updateProfile = createAction<ProfileType>('UPDATE_PROFILE');