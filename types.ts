export interface ResumeType {
  resumeId: string,
  title: string,
  lastModified: string,
}

// export interface databaseIdType {
//   databaseId: string,
// } 

export interface SectionType {
  databaseId: string,
  header: string,
  bullets: string
}

export interface ProfileType {
  name: string,
  location: string,
  email: string,
  jobTitle: string,
  additional: string,
}

export interface GridType{
  gridId: string,
  resumeId: string,
  componentId: string,
  x_coordinate: number,
  y_coordinate: number,
}

export interface initialStateType {
  userId: string,
  currentGrids: GridType[],
  currentResume: ResumeType | null,
  resumes: ResumeType[] | null,
  sections: SectionType[],
  profile: ProfileType
}