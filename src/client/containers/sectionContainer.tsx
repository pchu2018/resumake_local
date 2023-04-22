import { useDispatch, useSelector } from 'react-redux';

import { SectionType } from '../../../types';
import { RootState } from '../redux/store';
import { updateProfile } from '../redux/actions/actions';

import AddSectionButton from '../components/AddSectionButton';
import Section from '../components/Section';
import ProfileInformation from '../components/ProfileInfo';

export default function SectionContainer() {
  const dispatch = useDispatch();
  // all the components from the store
  const sections = useSelector((state:RootState) => state.initialState.sections);
  const profile = useSelector((state:RootState) => state.initialState.profile)

  // create array of components to render
  const resumeSections = sections?.map((comp: SectionType) => {
    return <Section key={comp.sectionId} sectionId={comp.sectionId} header={comp.header} bullets={comp.bullets} />
  })

  return (
    <div className='max-w-md mx-auto mt-4 p-4 border-2 border-gray-400 rounded-lg'>
      <div className='text-xl font-semibold mb-4'>Edit Your Resume Sections</div>
      <ProfileInformation 
        info={profile} />
      {resumeSections}
      <AddSectionButton/>
    </div>
  )
}
