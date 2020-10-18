// Import React dependencies.
import React from "react";
// Import Editor from components.
import SyncingEditor from './components/SyncingEditor'
// const initialValue = Value.fromJSON(require('./data/init_code.json'))

const App = () => {
  return (
    <div>
      <SyncingEditor type='paragraph' />
      <SyncingEditor type='code' />
    </div>
  )
}

export default App;
