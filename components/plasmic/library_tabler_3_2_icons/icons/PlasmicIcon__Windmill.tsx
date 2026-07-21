/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WindmillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WindmillIcon(props: WindmillIconProps) {
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
          "M12 12c2.76 0 5-2.01 5-4.5S14.76 3 12 3v9zm0 0c0 2.76 2.01 5 4.5 5s4.5-2.24 4.5-5h-9zm0 0c-2.76 0-5 2.01-5 4.5S9.24 21 12 21v-9zm0 0c0-2.76-2.01-5-4.5-5S3 9.24 3 12h9z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WindmillIcon;
/* prettier-ignore-end */
