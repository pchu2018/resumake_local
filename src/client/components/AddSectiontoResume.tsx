import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSectionPayload } from '../actions/actionTypes';
import { useSection } from '../actions/actions';

export default function AddSectiontoResume({databaseId}: {databaseId: string}) {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);

  const defaultIcon = '>';
  const hoverIcon = '> add';

  // dispatch current section to store to add to resume
  const handleClick = () => {
    // fetch new grid item to api and return back gridId
    const mockGrid = (Math.random()*10).toString();
    const mockPayload: useSectionPayload = {gridId: mockGrid, componentId: databaseId};
    dispatch(useSection(mockPayload));
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