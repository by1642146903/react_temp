import React, { useCallback, useEffect, useMemo, useState } from 'react';
import moment from "moment";
import _ from "lodash";
import Show from './components/Show';

export default function Index() {
  const [timer, setTimer] = useState(0);
  const [list] = useState([1, 2, 3, 4, 5, 6, 7]);
  // const list = [1, 2, 3, 4, 5, 6, 7];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(moment().valueOf());
    }, 1000);

    return () => {
      interval && clearInterval(interval);
    };
  }, []);

  console.log('i', timer);

  function sumFoo() {
    console.log('sumFoo11111111111');
    return _.sum(list);
  }

  const sum = useCallback(sumFoo, [list]);

  const show = useMemo(() => {
    return (<Show sum={sum} />);
  }, [sum])

  return (
    <div>
      <span>{moment(timer).format('YYYY-MM-DD HH:mm:ss')}</span>
      {show}
    </div>
  );
}
