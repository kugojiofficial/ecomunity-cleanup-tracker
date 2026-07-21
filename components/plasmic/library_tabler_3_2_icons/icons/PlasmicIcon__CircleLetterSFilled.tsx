/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleLetterSFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleLetterSFilledIcon(props: CircleLetterSFilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm1 5h-2a2 2 0 00-2 2v2a2 2 0 002 2h2v2h-2a1 1 0 00-2 0 2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2V9h2l.007.117A1 1 0 0015 9a2 2 0 00-2-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleLetterSFilledIcon;
/* prettier-ignore-end */
