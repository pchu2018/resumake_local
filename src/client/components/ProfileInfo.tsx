import { useDispatch } from "react-redux";
import { useState } from "react";
import { ProfileType } from "../../../types";
import { updateProfile } from "../redux/actions/actions";
import { postProfile } from "../../api/storageApi";

interface ProfileProps {
  info: ProfileType
}

export default function ProfileInformation( { info }: ProfileProps ) {
  const [ name, setName ] = useState(info.name);
  const [ location, setLocation ] = useState(info.location);
  const [ linkedIn, setLinkedIn ] = useState(info.linkedIn);
  const [ jobTitle , setJobTitle ] = useState(info.jobTitle);
  const [ email, setEmail ] = useState(info.email);
  const [ additional, setAdditional ] = useState(info.additional);
  const [ editing, setEditing ] = useState(false);

  const dispatch = useDispatch();

  const handleProfileClick = () => {
    // pull up editing modal when profile is clicked
    setEditing(true);
  }
  const handleButtonClick = () => {
    setEditing(false);
    // generate profile
    const profile = {
      name,
      location,
      linkedIn,
      jobTitle,
      email,
      additional
    }
    // dispatch to store
    dispatch(updateProfile(profile));
    // save to storage
    postProfile(profile)
  }

  const blank = (
    <div onClick={() => handleProfileClick()}>
      <h1>Your name here</h1>
      <span>Location</span><span>LinkedIn</span>
    </div>
  );
  const populated = (
    <div onClick={() => handleProfileClick()}>
      <h1>{info.name}</h1>
      <span>{info.location}</span><span>{info.linkedIn}</span>
    </div>
  )
  const editingModal = (
    <div>
      <input placeholder={info.name} onChange={(event) => setName(event.target.value)}></input>
      <input placeholder={info.location} onChange={(event) => setLocation(event.target.value)}></input>
      <button onClick={() => handleButtonClick()}>save</button>
    </div>
  )

  return (
    <>
      { info.name ? populated : blank }
      { editing && editingModal }
    </>
  )
}