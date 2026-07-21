/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandStorjIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandStorjIcon(props: BrandStorjIconProps) {
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
          "M3 17a1 1 0 102 0 1 1 0 00-2 0zM3 7a1 1 0 102 0 1 1 0 00-2 0zm16 10a1 1 0 102 0 1 1 0 00-2 0zm0-10a1 1 0 102 0 1 1 0 00-2 0zm-8-4a1 1 0 102 0 1 1 0 00-2 0zm0 18a1 1 0 102 0 1 1 0 00-2 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M12 21l-8-4V7l8-4 8 4v10l-8 4z"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M9.1 15a2.1 2.1 0 01-.648-4.098C8.734 9.254 9.771 8 11.5 8c1.694 0 2.906 1.203 3.23 2.8h.17a2.1 2.1 0 01.202 4.19L14.9 15H9.1zM4 7l4.323 2.702m8.09 5.056L20 17M4 17l3.529-2.206m7.08-4.424L20 7m-8-4v5m0 7v6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandStorjIcon;
/* prettier-ignore-end */
