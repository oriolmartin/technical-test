import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import { usePromiseTracker } from "react-promise-tracker";

interface Props {
  children?: React.ReactNode;
  forceSpin?: boolean;
}

const LoadingSpinner: React.FC<Props> = ({ children, forceSpin }: Props) => {
  const [spinning, setSpinning] = useState<boolean>(false);

  const { promiseInProgress } = usePromiseTracker();

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined = undefined;

    if (promiseInProgress) {
      setSpinning(true);
    } else {
      timeout = setTimeout(() => {
        setSpinning(false);
      }, 500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [promiseInProgress]);

  return (
    <Spin
      className={forceSpin ? "ant-spin-forced" : ""}
      spinning={forceSpin || spinning}
      size={"large"}
    >
      {children}
    </Spin>
  );
};

export default LoadingSpinner;
