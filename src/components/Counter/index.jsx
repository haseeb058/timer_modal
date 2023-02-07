import moment from "moment";
import React, { useEffect, useState } from "react";

const Counter = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [diff, setDiff] = useState("00:00:00");
  useEffect(() => {
    setStartDate(new Date());
    setInterval(() => {
      let start = moment(startDate);
      let end = moment(new Date());
      let diff = end.diff(start);
      let f = moment.utc(diff).format("HH:mm:ss");
      setDiff(f);
    }, 1000);
  }, []);

  return <div>{diff}</div>;
};

export default Counter;
