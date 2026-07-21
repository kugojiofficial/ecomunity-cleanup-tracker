/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Atom2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Atom2Icon(props: Atom2IconProps) {
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
          "M9 12a3 3 0 106 0 3 3 0 00-6 0zm3 9v.01M3 9v.01M21 9v.01M8 20.1A9 9 0 013 13m13 7.1a9 9 0 005-7.1M6.2 5a9 9 0 0111.4 0"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Atom2Icon;
/* prettier-ignore-end */
