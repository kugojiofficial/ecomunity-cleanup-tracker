/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CoinPoundFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CoinPoundFilledIcon(props: CoinPoundFilledIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M17 3.34A10 10 0 112 12l.005-.324A10 10 0 0117 3.34zM13 6a3 3 0 00-3 3v2H9a1 1 0 00-.993.883L8 12a1 1 0 001 1h1v1a1 1 0 01-.77.974l-.113.02L9 15c-1.287 0-1.332 1.864-.133 1.993L9 17h6a1 1 0 001-1l-.007-.117A1 1 0 0015 15h-3.171l.048-.148A3 3 0 0012 14v-1h1a1 1 0 00.993-.883L14 12a1 1 0 00-1-1h-1V9a1 1 0 01.883-.993L13 8a1 1 0 01.993.883L14 9a1 1 0 002 0 3 3 0 00-3-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CoinPoundFilledIcon;
/* prettier-ignore-end */
