import { FC } from 'react';

type eventTime = { year: string };

const convertEpochToYear = (epoch: number): eventTime => {
  const date: Date = new Date(epoch * 1000);

  const year: string = date.getUTCFullYear().toString();
  return { year };
};

interface TimeRemainingProps {
  timeStamp: number;
}

const Year: FC<TimeRemainingProps> = ({ timeStamp }) => {
  const time = convertEpochToYear(timeStamp);
  return (
    <span>{time.year}</span>
  );
};

export default Year;
