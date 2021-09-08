import React, {useEffect, useMemo, useState} from "react";
import moment from 'moment';
/**************************封印开始********************************/
interface ListProps {
  list: number[]
}
export function List({list}: ListProps) {
  console.log('list', moment().format("YYYY-MM-DD HH:mm:ss"));
  return (
    <div>
      {list.map(i => <div key={i}>{i}</div>)}
    </div>
  );
}
/**************************封印结束********************************/
export default function Index() {
  const [timer, setTimer] = useState(moment());
  const [list] = useState([1, 2, 3, 4, 5, 6, 7]);
  // const list = [1, 2, 3, 4, 5, 6, 7];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(moment());
    }, 1000);
    return () => {
      interval && clearInterval(interval);
    };
  }, []);

  const lst = useMemo(() => {
    return (<List list={list} />);
  }, [list]);

  console.log('timer', timer.format('YYYY-MM-DD HH:mm:ss'));

  return (
    <div>
      <span>{timer.format('YYYY-MM-DD HH:mm:ss')}</span>
      {lst}
    </div>
  );
}
