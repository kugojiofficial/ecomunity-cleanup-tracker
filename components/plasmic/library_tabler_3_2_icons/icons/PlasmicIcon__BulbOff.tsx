/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BulbOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BulbOffIcon(props: BulbOffIconProps) {
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
          "M3 12h1m8-9v1m8 8h1M5.6 5.6l.7.7m12.1-.7l-.7.7m-6.611.783a5 5 0 015.826 5.84m-1.378 2.611A5.011 5.011 0 0115 16a3.5 3.5 0 00-1 3 2 2 0 01-4 0 3.499 3.499 0 00-1-3 5 5 0 01-.528-7.544M9.7 17h4.6M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BulbOffIcon;
/* prettier-ignore-end */
