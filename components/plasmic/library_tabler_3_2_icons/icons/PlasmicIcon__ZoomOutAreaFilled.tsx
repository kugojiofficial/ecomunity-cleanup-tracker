/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ZoomOutAreaFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ZoomOutAreaFilledIcon(props: ZoomOutAreaFilledIconProps) {
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
          "M15 9a6 6 0 014.891 9.476l2.816 2.817a1 1 0 01-1.414 1.414l-2.817-2.816A6 6 0 019 15l.004-.225A6 6 0 0115 9zm2 5h-4a1 1 0 000 2h4a1 1 0 000-2zM3 14a1 1 0 011 1v1a1 1 0 001 1h1a1 1 0 010 2H5a3 3 0 01-3-3v-1a1 1 0 011-1zm0-5a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm3-7a1 1 0 010 2H5a1 1 0 00-1 1v1a1 1 0 01-2 0V5a3 3 0 013-3h1zm5 0a1 1 0 110 2h-1a1 1 0 010-2h1zm5 0a3 3 0 013 3v1a1 1 0 01-2 0V5a1 1 0 00-1-1h-1a1 1 0 110-2h1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ZoomOutAreaFilledIcon;
/* prettier-ignore-end */
