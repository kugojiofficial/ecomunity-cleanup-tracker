/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WindmillOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WindmillOffIcon(props: WindmillOffIconProps) {
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
          "M15.061 11.06C16.241 10.236 17 8.95 17 7.5 17 5.01 14.76 3 12 3v5m0 4c0 2.76 2.01 5 4.5 5 .166 0 .33-.01.49-.03m2.624-1.36C20.47 14.7 21 13.42 21 12h-5m-4 0c-2.76 0-5 2.01-5 4.5S9.24 21 12 21v-9zM6.981 7.033C4.737 7.318 3 9.435 3 12h9M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default WindmillOffIcon;
/* prettier-ignore-end */
