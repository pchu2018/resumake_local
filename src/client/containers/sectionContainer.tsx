import { useDispatch, useSelector } from 'react-redux';
import Section from '../components/Section';
import { SectionType } from '../../../types';
import { RootState } from '../store';
import { updateProfile } from '../actions/actions';
import AddSectionButton from '../components/AddSectionButton';

export default function SectionContainer() {
  const dispatch = useDispatch();
  // all the components from the store
  const sections = useSelector((state:RootState) => state.initialState.sections);
  const profile = useSelector((state:RootState) => state.initialState.profile)

  // create array of components to render
  const resumeSections = sections.map((comp: SectionType) => {
    return <Section key={comp.databaseId} databaseId={comp.databaseId} header={comp.header} bullets={comp.bullets} />
  })

  return (
    <div className='max-w-md mx-auto mt-4 p-4 border-2 border-gray-400 rounded-lg'>
      <div className='text-xl font-semibold mb-4'>Edit Your Resume Sections</div>
      {profile.name}

      <br/><input className='focus:invalid:border-pink-500 rounded border-dashed border-2 ' onChange={(event) => dispatch(updateProfile({...profile, name: event.target.value}))} value={profile.name}></input>
      {resumeSections}
      <AddSectionButton/>
    </div>
  )
}
