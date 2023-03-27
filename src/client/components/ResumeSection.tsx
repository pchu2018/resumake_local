import { SectionType } from '../../../types';
import { useSortable } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';


export default function ResumeSection({ sectionId, header, bullets }: SectionType) {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: sectionId});

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className='pt-4 font-bold'>{header}</div>
      <div>{bullets}</div>
    </div>
  )
}