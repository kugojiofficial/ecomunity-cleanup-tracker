/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AnkhIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AnkhIcon(props: AnkhIconProps) {
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
          "M6 13h12m-6 8v-8m0 0l-.422-.211A6.473 6.473 0 018 7a4 4 0 018 0 6.472 6.472 0 01-3.578 5.789L12 13z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AnkhIcon;
/* prettier-ignore-end */
