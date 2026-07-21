/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BorderBottomPlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BorderBottomPlusIcon(props: BorderBottomPlusIconProps) {
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
          "M4 20h16M4 16v-.01M20 16v-.01M4 12v-.01M20 12v-.01M4 8v-.01M20 8v-.01M4 4v-.01M8 4v-.01M12 4v-.01M16 4v-.01M20 4v-.01M15 12H9m3-3v6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BorderBottomPlusIcon;
/* prettier-ignore-end */
