/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ScribbleOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ScribbleOffIcon(props: ScribbleOffIconProps) {
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
          "M3 15c2 3 4 4 7 4 1.95 0 4.324-1.268 5.746-3.256m1.181-2.812A5.96 5.96 0 0017 12c0-4-3-7-6-7-.642 0-1.239.069-1.78.201M6.728 6.716C6.258 7.333 6 8.102 6 9c0 2.5 2 5 6 5 .597 0 1.203-.055 1.808-.156m3.102-.921C19.145 11.97 21.062 10.5 22 9M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ScribbleOffIcon;
/* prettier-ignore-end */
