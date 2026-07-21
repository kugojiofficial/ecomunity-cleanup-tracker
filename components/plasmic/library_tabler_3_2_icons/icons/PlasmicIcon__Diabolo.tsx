/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DiaboloIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DiaboloIcon(props: DiaboloIconProps) {
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
          "M4 6c0 .796.843 1.559 2.343 2.121C7.843 8.684 9.878 9 12 9s4.157-.316 5.657-.879C19.157 7.56 20 6.796 20 6s-.843-1.559-2.343-2.121C16.157 3.316 14.122 3 12 3s-4.157.316-5.657.879C4.843 4.44 4 5.204 4 6z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M4 6v.143a1 1 0 00.048.307L6 12l-1.964 5.67a1 1 0 00-.036.265V18c0 1.657 3.582 3 8 3s8-1.343 8-3v-.065a.985.985 0 00-.036-.265L18 12l1.952-5.55A1 1 0 0020 6.143V6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6 12c0 1.105 2.686 2 6 2s6-.895 6-2"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DiaboloIcon;
/* prettier-ignore-end */
