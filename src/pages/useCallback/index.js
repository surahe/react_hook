import React, { useState, useCallback } from 'react';

const Child = React.memo(function ({ val, onChange, type }) {
  console.log('render...' + type);

  return <input value={val} onChange={onChange} />;
});

function App() {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');

  const onChange1 = useCallback(function (evt){
    setVal1(evt.target.value);
  }, []);

  const onChange2 = useCallback(function (evt) {
    setVal2(evt.target.value);
  }, []);

  return (
    <>
      <Child val={val1} type={1} onChange={onChange1} />
      <Child val={val2} type={2} onChange={onChange2} />
    </>
  );
}

export default App
