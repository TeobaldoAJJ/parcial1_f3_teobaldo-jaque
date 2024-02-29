import React, { useState } from 'react';
import Form from './Components/Form';
import Card from "./Components/Card";

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <div className="App">
      {!submittedData && <Form onSubmit={handleSubmit} />}

      {submittedData && <Card data={submittedData} />}
    </div>
  );
}

export default App;
