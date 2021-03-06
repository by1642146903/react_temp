### 1.最终态
```
import React, {useEffect, useMemo, useState} from "react";
import List from "./components/List";
import moment from 'moment';

export default function Index() {
  const [timer, setTimer] = useState(0);
  const [list] = useState([1, 2, 3, 4, 5, 6, 7]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(moment().valueOf());
    }, 1000);

    return () => {
      interval && clearInterval(interval);
    };
  }, []);

  console.log('i', timer);

  const lst = useMemo(() => {
    return (<List list={list} />);
  }, [list]);

  return (
    <div>
      <span>{moment(timer).format('YYYY-MM-DD HH:mm:ss')}</span>
      {lst}
    </div>
  );
}
```
### 2.list定为常量
```
import React, {useEffect, useMemo, useState} from "react";
import List from "./components/List";
import moment from 'moment';

export default function Index() {
  const [timer, setTimer] = useState(0);
  const list = [1, 2, 3, 4, 5, 6, 7];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(moment().valueOf());
    }, 1000);

    return () => {
      interval && clearInterval(interval);
    };
  }, []);

  console.log('i', timer);

  const lst = useMemo(() => {
    return (<List list={list} />);
  }, [list]);

  return (
    <div>
      <span>{moment(timer).format('YYYY-MM-DD HH:mm:ss')}</span>
      {lst}
    </div>
  );
}
```
### 3.不用useMemo
```
import React, {useEffect, useMemo, useState} from "react";
import List from "./components/List";
import moment from 'moment';

export default function Index() {
  const [timer, setTimer] = useState(0);
  const [list] = useState([1, 2, 3, 4, 5, 6, 7]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(moment().valueOf());
    }, 1000);

    return () => {
      interval && clearInterval(interval);
    };
  }, []);
  
  console.log('i', timer);
  
  return (
    <div>
      <span>{moment(timer).format('YYYY-MM-DD HH:mm:ss')}</span>
      <List list={list} />
    </div>
  );
}
```
