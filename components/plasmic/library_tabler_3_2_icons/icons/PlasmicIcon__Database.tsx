/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DatabaseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DatabaseIcon(props: DatabaseIconProps) {
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
          "M4 6v6c0 .796.843 1.559 2.343 2.121 1.5.563 3.535.879 5.657.879s4.157-.316 5.657-.879C19.157 13.56 20 12.796 20 12V6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M4 12v6c0 .796.843 1.559 2.343 2.121 1.5.563 3.535.879 5.657.879s4.157-.316 5.657-.879C19.157 19.56 20 18.796 20 18v-6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DatabaseIcon;
/* prettier-ignore-end */
