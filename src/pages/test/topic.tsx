import React from 'react';
import { useParams } from 'react-router-dom';

export default () => {
  const {topicId = ''} = useParams();
  return (
    <div>topic-id:{topicId}</div>
  )
}