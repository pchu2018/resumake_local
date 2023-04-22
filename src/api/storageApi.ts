import { setStorageString, getStorageParse } from "../utils";
import { UserData, ResumeType, ProfileType, GridType, SectionType } from "../../types";

export function getInitialState(): UserData {
    // collect initial data from localstorage
    const profile = getStorageParse('profile');
    
    const resumes = getStorageParse('resumes');
    
    const sections = getStorageParse('sections');
    const defaultSection: SectionType[] = [];
    //pull latest resume to set as current
    const currentResume = resumes?.sort((a: ResumeType, b: ResumeType) => a.lastModified > b.lastModified ? 1 : -1);
    // create default current
    const defaultCurrent: ResumeType = {
      resumeId: 'default', title: 'My Resume', lastModified: new Date().toString(), currentGrids: []
    }

    return {
      profile,
      currentResume: currentResume || defaultCurrent,
      resumes,
      sections: sections || defaultSection
    }
}

export function postProfile(profile: ProfileType) {
  setStorageString('profile', profile);
}

export function postSection(section: SectionType) {
  // pull current sections array
  const sections = getStorageParse('sections') || [];
  console.log(sections)
  // push new section
  sections.push(section);
  setStorageString('sections', sections);
}

export function patchSection(section: SectionType) {
  console.log('patchSection start')
  // pull current sections array
  const sections: SectionType[] = getStorageParse('sections');
   console.log('pulled from storage', sections)
  // find sectionId
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].sectionId == section.sectionId) {
      sections[i] = section;
      break;
    } 
  }
  setStorageString('sections', sections);
}

export function useResumeSection(grid: string) {
  // find current resume in resumes array
  const currentResume: ResumeType = getStorageParse('resumes');
  // add section to grid array
  
  currentResume.currentGrids.push(grid);
  setStorageString('currentResume', currentResume);
}

export function patchGrids(grids: string[]) {
  const currentResume: ResumeType = getStorageParse('currentResume');
  currentResume.currentGrids = grids;
  setStorageString('currentResume', currentResume);
}

export function postResume(resume: ResumeType) {
  const resumes: ResumeType[] = getStorageParse('resumes') || [];
  resumes.push(resume);
  setStorageString('resumes', resumes);
}