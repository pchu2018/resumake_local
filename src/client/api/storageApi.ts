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
    const defaultGrid: GridType[] = []
    
    const resumes = getStorageParse('resumes');
    
    const sections = getStorageParse('sections');
    const defaultSection: SectionType[] = [{sectionId: 'default', header:'NEW HEADER', bullets:'ADD CONTENT'}]
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

}