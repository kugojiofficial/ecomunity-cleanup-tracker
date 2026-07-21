/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Blob2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Blob2Icon(props: Blob2IconProps) {
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
          "M5.897 20.188C7.567 20.94 9.793 21 12 21s4.434-.059 6.104-.812c.868-.392 1.614-.982 2.133-1.856.514-.865.763-1.94.763-3.234 0-2.577-.983-5.315-2.557-7.416C16.873 5.588 14.61 4 12 4 9.39 4 7.127 5.588 5.557 7.682 3.983 9.783 3 12.522 3 15.098c0 1.295.249 2.369.763 3.234.519.874 1.265 1.464 2.134 1.856z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Blob2Icon;
/* prettier-ignore-end */
