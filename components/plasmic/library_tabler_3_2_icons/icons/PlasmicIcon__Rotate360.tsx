/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rotate360IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rotate360Icon(props: Rotate360IconProps) {
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
        d={"M12 16h4v4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M19.458 11.042c.86-2.366.722-4.58-.6-5.9-2.272-2.274-7.185-1.045-10.973 2.743-3.788 3.788-5.017 8.701-2.744 10.974 2.227 2.226 6.987 1.093 10.74-2.515"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Rotate360Icon;
/* prettier-ignore-end */
