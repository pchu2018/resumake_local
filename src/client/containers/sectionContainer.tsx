import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
import Section from '../components/Section';
import { SectionType } from '../../../types';
import { RootState } from '../store';
import { updateProfile } from '../actions/actions';
import AddSectionButton from '../components/AddSectionButton';
=======

import { SectionType } from '../../../types';
import { RootState } from '../redux/store';
import { updateProfile } from '../redux/actions/actions';

import AddSectionButton from '../components/AddSectionButton';
import Section from '../components/Section';
import ProfileInformation from '../components/ProfileInfo';
>>>>>>> dev

export default function SectionContainer() {
  const dispatch = useDispatch();
  // all the components from the store
  const sections = useSelector((state:RootState) => state.initialState.sections);
  const profile = useSelector((state:RootState) => state.initialState.profile)

  // create array of components to render
<<<<<<< HEAD
  const resumeSections = sections.map((comp: SectionType) => {
    return <Section key={comp.databaseId} databaseId={comp.databaseId} header={comp.header} bullets={comp.bullets} />
=======
  const resumeSections = sections?.map((comp: SectionType) => {
    return <Section key={comp.sectionId} sectionId={comp.sectionId} header={comp.header} bullets={comp.bullets} />
>>>>>>> dev
  })

  return (
    <div className='max-w-md mx-auto mt-4 p-4 border-2 border-gray-400 rounded-lg'>
      <div className='text-xl font-semibold mb-4'>Edit Your Resume Sections</div>
<<<<<<< HEAD
      {profile.name}

      <br/><input className='focus:invalid:border-pink-500 rounded border-dashed border-2 ' onChange={(event) => dispatch(updateProfile({...profile, name: event.target.value}))} value={profile.name}></input>
=======
      <ProfileInformation 
        info={profile} />
>>>>>>> dev
      {resumeSections}
      <AddSectionButton/>
    </div>
  )
}
