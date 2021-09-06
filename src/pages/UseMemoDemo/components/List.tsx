import React from "react";
import moment from 'moment';

interface Props {
  list: number[]
}
export default function Index({list}: Props) {
  console.log('list', moment().format("YYYY-MM-DD HH:mm:ss"));
  return (
    <div>
      {list.map(i => <div key={i}>{i}</div>)}
    </div>
  );
}
