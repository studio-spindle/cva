import { FC } from 'react';

type eventTime = { hours: string; minutes: string };

function leadingZero(numeral: string): string {
  return (`0${numeral}`).slice(-2);
}

const convertEpochToTime = (epoch: number): eventTime => {
  const date: Date = new Date(epoch * 1000);

  const hours: string = leadingZero(date.getUTCHours().toString());
  const minutes: string = leadingZero(date.getUTCMinutes().toString());
  return { hours, minutes };
};

interface TimeRemainingProps {
  timeStamp: number;
}

const Time: FC<TimeRemainingProps> = ({ timeStamp }) => {
  const time = convertEpochToTime(timeStamp);
  return (
    <div>
      <span>{time.hours}</span>:<span>{time.minutes}</span>
    </div>
  );
};

export default Time;
