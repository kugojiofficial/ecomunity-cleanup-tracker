/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WorldDownloadIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WorldDownloadIcon(props: WorldDownloadIconProps) {
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
          "M21 12a9 9 0 10-9 9M3.6 9h16.8M3.6 15H12m-.422-12a17 17 0 000 18M12.5 3c1.719 2.755 2.5 5.876 2.5 9m3 2v7m0 0l-3-3m3 3l3-3"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WorldDownloadIcon;
/* prettier-ignore-end */
