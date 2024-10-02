import React, { useMemo } from 'react';

const ExpensiveComponent = ({ data }) => {
  const processedData = useMemo(() => {
    return data.map(item => item * 2);
  }, [data]);

  return <div>{processedData}</div>;
};

export default ExpensiveComponent;