// library imports
import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// internal imports
import { SectionType } from '../../../types';
import { updateSection } from '../actions/actions';
import { patchSection } from '../api/storageApi';
// components
import AddSectiontoResume from './AddSectiontoResume';

export default function Section({ sectionId, header, bullets }: SectionType) {
  const [headerContent, setHeaderContent] = useState(header);
  const [bulletContent, setBulletContent] = useState(bullets);

  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const [ editing, setEditing ] = useState(false);

  // updates to section should be posted to store, then updated in db
  const handleChange = () => {
    // dispatch new Section object to store
    const payload = {sectionId, header: headerContent, bullets: bulletContent};
    // send post request to api
    patchSection(payload);
    dispatch(updateSection(payload));
  }

  // create listener for when click occurs outside of component
  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      // update render
      setEditing(false);
    }
  };
  //attach listener to document
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
        document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  useEffect(() => {
    // trigger update when editing state is false and header or bullets change
    if (!editing && (headerContent != header || bulletContent != bullets)) handleChange();
  }, [editing])

  const tailwind = 'flex my-2 max-w-xs'

  const staticData = <div  onClick={() => setEditing(true)}><p className='font-bold'>{headerContent}</p>{bulletContent}</div>;
  const editable = <div ref={ref}><input placeholder={headerContent} onChange={event => {setHeaderContent(event.target.value)}}/>
                    <br/><input placeholder={bulletContent} onChange={event => setBulletContent(event.target.value)}/></div>

  return (
    <div className={tailwind}>
      {editing ? editable : staticData}
      <AddSectiontoResume databaseId={sectionId}/>
    </div>
  )
}