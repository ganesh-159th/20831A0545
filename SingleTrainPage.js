import React from 'react';
import { useParams } from 'react-router-dom';

const SingleTrainPage = () => {
  const { trainId } = useParams();
  // Fetch train details using trainId

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Single Train Details</h1>
      {/* Render single train details here */}
    </div>
  );
};

export default SingleTrainPage;


