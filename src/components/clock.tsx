import React, { useState } from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import { useCountUp } from "use-count-up";
import { FaCirclePlay } from "react-icons/fa6";

const Clock = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [playHover, setPlayHover] = useState(false);
  const { value: value1, reset: resetValue1 } = useCountUp({
    isCounting: isLoading,
    duration: 1,
    start: 0,
    end: 100,
    onComplete: () => {
      setIsLoading(false);
      // setButtonLabel('Reset');
    },
  });

  const handleButtonClick = () => {
    if (isLoading) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  };

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col items-center space-y-3">
        <CircularProgress
          size="lg"
          variant="solid"
          color="neutral"
          sx={{
            "--CircularProgress-size": "220px",
            "--CircularProgress-trackThickness": "15px",
            "--CircularProgress-progressThickness": "15px",
          }}
          determinate
          value={value1 as number}
        >
          <span className="text-[#5e5e5e] ">00:12:00</span>
        </CircularProgress>
        <FaCirclePlay
          onClick={() => handleButtonClick()}
          size={32}
          color={!playHover ? "#196aa7" : "#1e82cd"}
          onMouseOver={() => setPlayHover(true)}
          onMouseOut={() => setPlayHover(false)}
          className=""
        />
      </div>
    </div>
  );
};

export default Clock;
