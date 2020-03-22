import { FC } from 'react';

interface TruncateProps {
  text: string;
  position: number;
}

const Truncate: FC<TruncateProps> = ({ text, position }) => (<>{`${text.slice(0, position)}...`}</>);

export default Truncate;
