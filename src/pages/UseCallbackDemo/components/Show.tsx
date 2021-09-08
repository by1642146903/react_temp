import React from 'react';

interface Props {
  sum: () => any
}
export default function Index({sum}: Props) {
  console.log('sumFoo');
  return (
    <div>{`1212: ${sum()}`}</div>
  );
}
