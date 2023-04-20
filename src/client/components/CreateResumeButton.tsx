import { useDispatch } from "react-redux";

import { generateResumeId } from "../../utils";
import { ResumeType } from "../../../types";
import { createResume } from "../actions/actions";
import { postResume } from "../api/storageApi";

export default function CreateResumeButton() {
  const dispatch = useDispatch();

  const handleClick = () => {
    // create new resume
    const newResume: ResumeType = {
      resumeId: generateResumeId(),
      title: 'New Resume',
      lastModified: new Date().toString(),
      currentGrids: []
    }
    // update current resume in store
    dispatch(createResume(newResume));
    // save new resume to storage
    postResume(newResume);
  }

  return (
    <button onClick={() => handleClick()}>
      <h3>Start new resume</h3>
    </button>
  )
}