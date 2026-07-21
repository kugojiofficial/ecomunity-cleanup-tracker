/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WindowIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WindowIcon(props: WindowIconProps) {
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
          "M12 3c-3.866 0-7 3.272-7 7v10a1 1 0 001 1h12a1 1 0 001-1V10c0-3.728-3.134-7-7-7zM5 13h14M12 3v18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WindowIcon;
/* prettier-ignore-end */
