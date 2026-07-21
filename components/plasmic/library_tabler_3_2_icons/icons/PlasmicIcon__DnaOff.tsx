/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DnaOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DnaOffIcon(props: DnaOffIconProps) {
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
          "M16 12a3.897 3.897 0 00-1.172-2.828A4.027 4.027 0 0012 8M9.172 9.172a4 4 0 105.656 5.656m-5.656 5.657a4 4 0 10-5.657-5.657M14.828 3.515a4 4 0 005.657 5.657M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DnaOffIcon;
/* prettier-ignore-end */
