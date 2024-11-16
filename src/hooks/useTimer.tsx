import { useEffect, useState } from "react";

interface UseTimerProps {
  duration: number;
  onExpire: () => void;
}

export default function useTimer({ duration, onExpire }: UseTimerProps) {
  const [, setRestart] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      onExpire();
      setRestart(true);
    }, duration * 1000);

    return () => {
      clearInterval(interval);
      setRestart(false);
    };
  }, []);
}
