import SectionContainer from "./sectionContainer";
import ResumeContainer from "./resumeContainer";

export default function MasterEditorContainer() {
  return (
    <div className='flex m-5 space-y-4'>
      <SectionContainer/>
      <ResumeContainer/>
    </div>
  )
}