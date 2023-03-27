// just for reference
import { createReducer, current } from '@reduxjs/toolkit';
import * as actions from '../actions/actions';
import { ResumeType, SectionType, GridType, initialStateType } from '../../../types';

const initialState: initialStateType = {
  userId: '',
  currentResume: {resumeId: '1', title: 'My Resume', lastModified: new Date().toString()},
  currentGrids: [
    {gridId: '1', resumeId: '1', componentId: 'test', y_coordinate: 0, x_coordinate: 7}, 
    {gridId: '2', resumeId: '1', componentId: 'test1', y_coordinate: 0, x_coordinate: 8},
    {gridId: '3', resumeId: '1', componentId: 'test2', y_coordinate: 0, x_coordinate: 9}
  ],
  resumes: [],
  sections: [
    {
      databaseId: 'test', 
      header: 'head honcho @ codesmith', 
      bullets: 'bossed around residents'},
    {
      databaseId: 'test1', 
      header: 'director @ federal bank', 
      bullets: 'responsible for minting billions of mattbucks per hour, leading to inflation'
    },
    {
      databaseId: 'test2', 
      header: 'cat butler @ home', 
      bullets: 'narrowly avoided stepping on his cat at the bottom of the stairs'
    },
    {
      databaseId: 'test3', 
      header: 'SKILLS', 
      bullets: 'oversharing, pep talks'
    }
  ],
  profile: {
    name: 'Matt Severyn',
    location: 'North Carolina',
    email: 'matt.s@codesmith.io',
    jobTitle: 'Head Honcho',
    additional: '',
  }
};

const resumeReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.initializeStore, (state, action) => {
      state = action.payload;
    })
    .addCase(actions.createResume, (state, action) => {
      state.currentResume = null;
    })
    .addCase(actions.updateResume, (state, action) => {
      state.currentResume = action.payload;
    })
    .addCase(actions.updateProfile, (state, action) => {
      state.profile = action.payload;
    })
    .addCase(actions.createSection, (state, action) => {
      state.sections.push({databaseId: action.payload, header: 'HEADER', bullets: 'ADD CONTENT'});
    })
    .addCase(actions.updateSection, (state, action) => {
      const { sections } = current(state);
      // find section in state and update
      console.log('dispatched to update section with ', action.payload, 'with sections ', sections);

      for (let i = 0; i < sections.length; i++) {
        console.log(sections[i].databaseId)
        if(sections[i].databaseId == action.payload.databaseId) {
          console.log(sections[i])
          state.sections[i] = action.payload;
          break;
        } else console.log('no section found')
      
      };
    })
    .addCase(actions.useSection, (state, action) => {
      const { currentResume } = current(state);
      const newGrid: GridType = {
        resumeId: currentResume.resumeId,
        gridId: action.payload.gridId,
        componentId: action.payload.componentId,
        y_coordinate: 0,
        x_coordinate: 0
      };
      state.currentGrids.push(newGrid);
    })
});

export default resumeReducer;
