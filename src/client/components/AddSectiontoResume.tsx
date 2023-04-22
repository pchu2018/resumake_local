import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
// internal import
import { GridType } from '../../../types';
import { useSection } from '../redux/actions/actions';
import { useResumeSection } from '../../api/storageApi';

export default function AddSectiontoResume({sectionId}: {sectionId: string}) {
  const dispatch = useAppDispatch();
  const currentResume = useAppSelector(state => state.initialState.currentResume)
  const [hover, setHover] = useState(false);

  const defaultIcon = '>';
  const hoverIcon = '> add';

  // dispatch current section to store to add to resume
  const handleClick = () => {
    // dispatch to store
    dispatch(useSection(sectionId));
    // update storage
    useResumeSection(sectionId);
  }

  return (
    <div className='flex-1 mx-3 font-bold'>
      <button 
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => handleClick()}
        >{hover? hoverIcon : defaultIcon}</button>
    </div>
  )
}