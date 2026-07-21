/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LayersOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LayersOffIcon(props: LayersOffIconProps) {
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
          "M8.59 4.581C8.952 4.222 9.45 4 10 4h8a2 2 0 012 2v8c0 .556-.227 1.06-.594 1.422M16 16h-6a2 2 0 01-2-2V8"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M16 16v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2h2M3 3l18 18"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default LayersOffIcon;
/* prettier-ignore-end */
