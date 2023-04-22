<<<<<<< HEAD
import { mock } from 'node:test';
import { useDispatch } from 'react-redux';
import { createSection } from '../actions/actions';
=======
import { useDispatch } from 'react-redux';
import { createSection } from '../redux/actions/actions';
import { postSection } from '../../api/storageApi';
import { generateSectionId } from '../../utils';
import { SectionType } from '../../../types';
>>>>>>> dev

export default function AddSectionButton() {
  const dispatch = useDispatch();

  const handleClick = async () => {
<<<<<<< HEAD
    // fetch new section to api and receive back databaseId for store update
    // const id = await fetch('/api/createComponent', {method: 'POST'})
      // .then(data => data.json());

    // set id to random number while api is under construction
    const mockId =  (Math.random()*10).toString();
    // dispatch new empty section to store with retrieved id
    dispatch(createSection(mockId));
=======
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
>>>>>>> dev

  }

  return (
    <div>
      <button onClick={() => handleClick()}>+</button>
    </div>
  )
}