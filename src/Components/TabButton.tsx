import React, { useEffect, useRef, useState } from 'react';
import { CircularProgress } from './CircleProgress';

type Props = {
  name: string;
  className?: string;
  icon?: any;
  isActive?: boolean;
  onClick?: () => void;

  id: any;
};

export const TabButton = (props: Props) => {
  const { name, className, icon, isActive, onClick, id } = props;
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;

    if (isActive) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100) {
            return prev + 1;
          } else {
            clearInterval(timer);
            return prev;
          }
        });
      }, 1);
    } else {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            clearInterval(timer);
            return prev;
          }
        });
      }, 1);
    }

    return () => clearInterval(timer);
  }, [isActive]);

  return (
    <button
      id={id}
      onClick={onClick}
      className={
        'h-full flex items-center justify-center gap-4 whitespace-nowrap	' +
        (isActive ? 'bg-primary-50 ' : 'bg-white ') +
        className
      }
    >
      <CircularProgress
        icon={
          <img
            src={icon}
            alt={name}
            className={' w-[32px] h-[32px] ' + (isActive ? '' : 'grayscale')}
          />
        }
        value={progress}
        size={50}
        strokeWidth={2}
      />
      <span className="text-lg ">{name}</span>
    </button>
  );
};
