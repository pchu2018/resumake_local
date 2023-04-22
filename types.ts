export interface ResumeType {
  resumeId: string,
  title: string,
  lastModified: string,
  currentGrids: string[]
}

// export interface databaseIdType {
//   databaseId: string,
// } 

export interface SectionType {
  sectionId: string,
  header: string,
  bullets: string
}

export interface ProfileSection {
  key: string
}

export interface ProfileType {
  name: string,
  location: string,
  email: string,
  jobTitle: string,
  linkedIn: string,
  additional: ProfileSection[],
}

export interface GridType{
  gridId: string,
  resumeId: string,
  sectionId: string,
}

export interface UserData {
  currentResume: ResumeType | null,
  resumes: ResumeType[] | null,
  sections: SectionType[],
  profile: ProfileType
}