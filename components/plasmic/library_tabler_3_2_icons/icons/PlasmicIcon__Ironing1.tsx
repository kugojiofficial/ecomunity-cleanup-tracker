/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ironing1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ironing1Icon(props: Ironing1IconProps) {
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
          "M9 6h7.459a3 3 0 012.959 2.507l.577 3.464.81 4.865A.999.999 0 0119.82 18H3a7 7 0 017-7h9.8M12 15h.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Ironing1Icon;
/* prettier-ignore-end */
