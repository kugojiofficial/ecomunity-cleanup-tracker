/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TiltShiftOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TiltShiftOffIcon(props: TiltShiftOffIconProps) {
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
          "M8.56 3.69c-.195.08-.388.169-.577.263M3.69 8.56A9 9 0 003 12m.69 3.44a9 9 0 001.95 2.92m2.92 1.95A9 9 0 0012 21m3.44-.69a9 9 0 002.92-1.95m1.95-2.92A9 9 0 0021 12m-.69-3.44a9 9 0 00-1.95-2.92m-2.92-1.95A9 9 0 0012 3m-1.43 7.602a2 2 0 002.862 2.795M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TiltShiftOffIcon;
/* prettier-ignore-end */
