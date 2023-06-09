import { useDispatch } from 'react-redux';
import { createSection } from '../redux/actions/actions';
import { postSection } from '../../api/storageApi';
import { generateSectionId } from '../../utils';
import { SectionType } from '../../../types';

export default function AddSectionButton() {
  const dispatch = useDispatch();

  const handleClick = async () => {
    // generate blank section
    const secId = generateSectionId();
    const newSection: SectionType = {
      sectionId: secId,
      header: 'NEW HEADER',
      bullets: 'ADD CONTENT'
    }
    // store component to localstorage
    postSection(newSection);
    // dispatch new empty section to store with retrieved id
    dispatch(createSection(newSection));

  }

  return (
    <div>
      <button onClick={() => handleClick()}>+</button>
    </div>
  )
}