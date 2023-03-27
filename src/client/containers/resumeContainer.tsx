import {DndContext, MouseSensor, useSensor, useSensors} from '@dnd-kit/core';
import { arrayMove, SortableContext } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import { useState, useEffect, useRef, useMemo} from 'react';
import { throttle } from '../../utils';
import ResumeSection from '../components/ResumeSection';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { SectionType } from '../../../types';
import { updateGrid } from '../api/storageApi';


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
  const { currentResume, currentGrids, profile } = useSelector((state:RootState) => state.initialState);
  
  // initializing items for sortable context -> update context when currentGrids is changed
  useEffect(() => {    
    const componentIds = currentGrids?.map(grid => grid.sectionId)
    setItems(componentIds);
  }, [currentGrids])

  // throttle for update resume
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
   } else {
       throttledUpdateStorage(items);
   }
    setResumeSections(items?.map((databaseId) => {
        const { header, bullets } = findSection(databaseId, sections);
        return <ResumeSection key={databaseId} sectionId={databaseId} header={header} bullets={bullets} />
    }));
  //  }
   
  }, [items, sections, currentGrids])
  
  // post updated items list to local storage
  const updateStorage = (items: string[]) => {
    
  };

  // memo-ize throttled function
  const throttledUpdateStorage = useMemo(() => throttle(updateStorage, 5000), [])

  
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
      if (entry.sectionId == id) section = entry;
      // break;
    }
    return section;
  }

  return (
    <div className='min-w-2xl max-w-3xl mx-auto p-4 border-2 border-lightgrey rounded-lg shadow-inner'><h2 className='text-xl font-semibold mb-1'>{profile.name}</h2>
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <SortableContext items={items}>
        {resumeSections}
      </SortableContext>
    </DndContext>
    </div>
  );
}
