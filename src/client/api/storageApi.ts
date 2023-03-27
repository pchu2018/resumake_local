import { setStorageString, getStorageParse } from "../../utils";
import { UserData, ResumeType, ProfileType, GridType, SectionType } from "../../../types";

export function updateGrid(items: string[]) {
  // retrieve current grids
  const {grids} = getStorageParse('current');


}

export function getInitialState(): UserData {
    // collect initial data from localstorage
    const profile = getStorageParse('profile');

    const currentGrids = getStorageParse('currentGrids');
    const defaultGrid: GridType[] = [{gridId: 'default', resumeId: 'default', sectionId: 'default', y_coordinate:0, x_coordinate:0}]
    
    const resumes = getStorageParse('resumes');
    
    const sections = getStorageParse('sections');
    const defaultSection: SectionType[] = [{sectionId: 'default', header:'Add header', bullets:'Add content'}]
    //pull latest resume to set as current
    const currentResume = resumes?.sort((a: ResumeType, b: ResumeType) => a.lastModified > b.lastModified ? 1 : -1);

    return {
      profile,
      currentGrids: currentGrids || defaultGrid,
      currentResume,
      resumes,
      sections: sections || defaultSection
    }
}

export function saveProfile(profile: ProfileType) {
  setStorageString('profile', profile);
}