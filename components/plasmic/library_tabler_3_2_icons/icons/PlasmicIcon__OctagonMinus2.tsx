/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OctagonMinus2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OctagonMinus2Icon(props: OctagonMinus2IconProps) {
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
          "M13.039 21.734l-.237.101c-.512.22-1.092.22-1.604 0l-5.575-2.389a2.036 2.036 0 01-1.07-1.07l-2.388-5.574a2.036 2.036 0 010-1.604l2.389-5.575c.206-.48.589-.863 1.07-1.07l5.574-2.388a2.036 2.036 0 011.604 0l5.575 2.389c.48.206.863.589 1.07 1.07l2.388 5.574c.22.512.22 1.092 0 1.604l-.94 2.196M16 19h6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default OctagonMinus2Icon;
/* prettier-ignore-end */
