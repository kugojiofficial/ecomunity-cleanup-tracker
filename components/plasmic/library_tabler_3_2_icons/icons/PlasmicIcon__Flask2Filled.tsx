/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Flask2FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Flask2FilledIcon(props: Flask2FilledIconProps) {
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
          "M15 2a1 1 0 110 2v5.674l.062.03a7 7 0 013.85 5.174l.037.262a7 7 0 01-3.078 6.693 1 1 0 01-.553.167H8.683a1 1 0 01-.552-.166A7 7 0 018.938 9.7L9 9.672V4a1 1 0 010-2h6zm-2 2h-2v6.34a1 1 0 01-.551.894l-.116.049A5 5 0 007.413 14h9.172a5 5 0 00-2.918-2.715 1 1 0 01-.667-.943V4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Flask2FilledIcon;
/* prettier-ignore-end */
