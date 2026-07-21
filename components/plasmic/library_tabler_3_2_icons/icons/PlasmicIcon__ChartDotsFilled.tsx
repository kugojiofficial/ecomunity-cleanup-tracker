/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChartDotsFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChartDotsFilledIcon(props: ChartDotsFilledIconProps) {
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
          "M3 2a1 1 0 011 1v17h17a1 1 0 01.993.883L22 21a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M19 4a3 3 0 11-.651 5.93l-2.002 3.202a3 3 0 11-4.927.337l-1.378-1.655a3 3 0 111.538-1.282l1.378 1.654c.541-.2 1.13-.24 1.693-.115l2.002-3.203A3 3 0 0119 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChartDotsFilledIcon;
/* prettier-ignore-end */
