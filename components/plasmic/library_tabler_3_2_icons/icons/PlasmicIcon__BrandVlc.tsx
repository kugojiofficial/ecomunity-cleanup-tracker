/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandVlcIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandVlcIcon(props: BrandVlcIconProps) {
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
          "M13.79 4.337l3.101 9.305c.33.985-.113 2.07-1.02 2.499a9.149 9.149 0 01-7.742 0c-.907-.428-1.35-1.514-1.02-2.499l3.1-9.305C10.476 3.537 11.194 3 12 3c.807 0 1.525.537 1.79 1.337z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M7 14H5.571a2 2 0 00-1.923 1.45l-.571 2A2 2 0 005 20h13.998a2.001 2.001 0 001.923-2.55l-.572-2A2 2 0 0018.426 14H17"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandVlcIcon;
/* prettier-ignore-end */
