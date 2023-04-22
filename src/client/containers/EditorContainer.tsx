import SectionContainer from "./SectionContainer";
import ResumeContainer from "./ResumeContainer";

export default function MasterEditorContainer() {
  return (
    <div className='flex m-5 space-y-4'>
      <SectionContainer/>
      <ResumeContainer/>
    </div>
  )
}