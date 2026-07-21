/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EditOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EditOffIcon(props: EditOffIconProps) {
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
        d={"M7 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-1"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M10.507 10.498L9 12v3h3l1.493-1.498m2-2.01l4.89-4.907a2.1 2.1 0 00-2.97-2.97L12.5 8.511M16 5l3 3M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default EditOffIcon;
/* prettier-ignore-end */
