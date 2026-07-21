/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Briefcase2FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Briefcase2FilledIcon(props: Briefcase2FilledIconProps) {
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
          "M14 2a3 3 0 013 3v1h2a3 3 0 013 3v9a3 3 0 01-3 3H5a3 3 0 01-3-3V9a3 3 0 013-3h2V5a3 3 0 013-3h4zm0 2h-4a1 1 0 00-1 1v1h6V5a1 1 0 00-1-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Briefcase2FilledIcon;
/* prettier-ignore-end */
