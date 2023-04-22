import { SectionType } from '../../../types';
import { useSortable } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';


<<<<<<< HEAD
export default function ResumeSection({ databaseId, header, bullets }: SectionType) {
=======
export default function ResumeSection({ sectionId, header, bullets }: SectionType) {
>>>>>>> dev

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
<<<<<<< HEAD
  } = useSortable({id: databaseId});
=======
  } = useSortable({id: sectionId});
>>>>>>> dev

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