import {DndContext, MouseSensor, useSensor, useSensors} from '@dnd-kit/core';
<<<<<<< HEAD
import {arrayMove, SortableContext, useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import { useState, useEffect, useRef, useMemo} from 'react';
import { throttle } from '../../utils';
import ResumeSection from '../components/ResumeSection';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { SectionType } from '../../../types';
=======
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import { useState, useEffect, useRef, useMemo} from 'react';
import { useSelector } from 'react-redux';
// internal imports
import { throttle } from '../../utils';
import ResumeSection from '../components/ResumeSection';
import CreateResumeButton from '../components/CreateResumeButton';
import { RootState } from '../redux/store';
import { SectionType } from '../../../types';
import { patchGrids } from '../../api/storageApi';
>>>>>>> dev


export default function ResumeContainer() {
  // sections should update when store is dispatched to
  const sections = useSelector((state:RootState) => state.initialState.sections);
  const [items, setItems] = useState([]);
  const [resumeSections, setResumeSections] = useState([]);
  
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
  );

  const isInitialMount = useRef(true);
  // access resume id by initial state -> current resume 
<<<<<<< HEAD
  const { currentResume, userId, currentGrids, profile } = useSelector((state:RootState) => state.initialState);
  
  // initializing items for sortable context
  useEffect(() => {    
    const componentIds = currentGrids.map(x => x.componentId)
    setItems(componentIds);
    console.log('setting items to ', items);
  },[currentGrids])

  // throttle for update reumse
=======
  const { currentResume, profile } = useSelector((state:RootState) => state.initialState);
  
  // initializing items for sortable context -> update context when currentGrids is changed
  useEffect(() => {    
    const componentIds = currentResume.currentGrids
    setItems(componentIds);
  }, [currentResume])

  // throttle for update resume
>>>>>>> dev
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
   } else {
<<<<<<< HEAD
       // Your useEffect code here to be run on update
       throttledFetch(items);
   }
   // generate resumeSections
   console.log('setting items to ', items);
  //  if (sections.length && currentGrids.length) {
    setResumeSections(items.map((databaseId) => {
      console.log('sections', sections, 'currentGrids', currentGrids);

        console.log('in setResumeSections ',databaseId)
        const { header, bullets } = findSection(databaseId, sections);
        return <ResumeSection key={databaseId} databaseId={databaseId} header={header} bullets={bullets} />

    }));
  //  }
   
  }, [items, sections, currentGrids])
  
  // post updates to api
  const callback = (items: string[]) => {
    // fetch to update all the grids in the resume
    const updateGrid = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        // query by resume id to update the timestamp
        resumeId: currentResume?.resumeId,
        grids: items,
      }),
    };

    // fetch(`/api/grid`, updateGrid).then((response) => {
    //   if (response.status === 200) {
    //     console.log(`update grid successfully`)
    //   }
    // });
  };

  // memo-ize throttled function
  const throttledFetch = useMemo(() => throttle(callback, 5000), [])
=======
       throttledUpdateStorage(items);
   }
    setResumeSections(items?.map((databaseId) => {
        const { header, bullets } = findSection(databaseId, sections);
        return <ResumeSection key={databaseId} sectionId={databaseId} header={header} bullets={bullets} />
    }));
  //  }
   
  }, [items, sections, currentResume])
  
  // post updated items list to local storage
  const updateStorage = (items: string[]) => {
    // send items to storage
    patchGrids(items);
  };

  // memo-ize throttled function
  const throttledUpdateStorage = useMemo(() => throttle(updateStorage, 5000), [])
>>>>>>> dev

  
  function handleDragEnd(event: any) {
    const {active, over} = event;
    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  const findSection = (id: string, sections: SectionType[]): SectionType => {
    // iterate over sections array and find matching componentId
    let section: SectionType;
    for (const entry of sections) {
<<<<<<< HEAD
      if (entry.databaseId == id) section = entry;
=======
      if (entry.sectionId == id) section = entry;
>>>>>>> dev
      // break;
    }
    return section;
  }

  return (
<<<<<<< HEAD
    <div className='min-w-2xl max-w-3xl mx-auto p-4 border-2 border-lightgrey rounded-lg shadow-inner'><h2 className='text-xl font-semibold mb-1'>{profile.name}</h2>
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <SortableContext items={items}>
        {resumeSections}
      </SortableContext>
    </DndContext>
=======
    <div className='min-w-2xl max-w-3xl mx-auto p-4 border-2 border-lightgrey rounded-lg shadow-inner'>
      <h3>{currentResume.title}</h3>
      <h2 className='text-xl font-semibold mb-1'>{profile.name}</h2>
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <SortableContext items={items}>
          {resumeSections}
        </SortableContext>
      </DndContext>
      <CreateResumeButton />
>>>>>>> dev
    </div>
  );
}
