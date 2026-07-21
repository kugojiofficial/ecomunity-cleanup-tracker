/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FeatherOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FeatherOffIcon(props: FeatherOffIconProps) {
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
          "M4 20l8-8m2-7v5h5M9 11v4h4m-7-2v5h5m-5-5l3.502-3.502m2.023-2.023L14 5"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M19 10c.638-.636 1-1.515 1-2.486A3.515 3.515 0 0016.483 4c-.97 0-1.847.367-2.483 1m-3 13l3.499-3.499m2.008-2.008L19 10M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FeatherOffIcon;
/* prettier-ignore-end */
