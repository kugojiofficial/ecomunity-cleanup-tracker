/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type RadioIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function RadioIcon(props: RadioIconProps) {
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
          "M14 3L4.629 6.749A1 1 0 004 7.677V19a1 1 0 001 1h14a1 1 0 001-1V8a1 1 0 00-1-1H4.5M4 12h16M7 12v-2m10 6v.01M13 16v.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default RadioIcon;
/* prettier-ignore-end */
