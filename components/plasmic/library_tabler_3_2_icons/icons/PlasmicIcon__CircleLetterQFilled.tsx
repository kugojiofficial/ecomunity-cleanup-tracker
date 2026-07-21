/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleLetterQFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleLetterQFilledIcon(props: CircleLetterQFilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 5a3 3 0 00-3 3v4a3 3 0 004.168 2.764l.125-.057a1 1 0 001.414-1.414l.057-.125A3 3 0 0015 14v-4a3 3 0 00-3-3zm1 7.001h-.059a.996.996 0 00-.941 1A1 1 0 0111 14v-4a1 1 0 012 0v4.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleLetterQFilledIcon;
/* prettier-ignore-end */
