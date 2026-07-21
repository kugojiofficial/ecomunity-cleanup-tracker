/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandPeanutIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandPeanutIcon(props: BrandPeanutIconProps) {
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
          "M15 16.25l-.816-.36-.462-.196c-1.444-.592-2-.593-3.447 0l-.462.195-.817.359a4.5 4.5 0 110-8.49l1.054.462.434.178c1.292.507 1.863.48 3.237-.082l.462-.195.817-.359a4.5 4.5 0 110 8.49"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandPeanutIcon;
/* prettier-ignore-end */
