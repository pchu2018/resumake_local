// data that needs to be fetched:
// user information (name, contact, etc)
// all user components

import './styles/index.css';

import MasterEditorContainer from "./containers/masterEditorContainer";

export default function App() {
  return (
    <div >
      <h1 className="m-4 text-center font-mono text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">resumake</h1>
      <MasterEditorContainer/>
    </div>
  )
}