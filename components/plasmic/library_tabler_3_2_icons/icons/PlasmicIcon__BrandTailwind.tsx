/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandTailwindIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandTailwindIcon(props: BrandTailwindIconProps) {
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
          "M11.667 6C9.177 6 7.623 7.222 7 9.667c.933-1.223 2.023-1.68 3.267-1.375.71.174 1.217.68 1.778 1.24.916.912 2 1.968 4.288 1.968 2.49 0 4.044-1.222 4.667-3.667-.933 1.223-2.023 1.68-3.267 1.375-.71-.174-1.217-.68-1.778-1.24C15.039 7.056 13.98 6 11.667 6zm-4 6.5c-2.49 0-4.044 1.222-4.667 3.667.933-1.223 2.023-1.68 3.267-1.375.71.174 1.217.68 1.778 1.24.916.912 1.975 1.968 4.288 1.968 2.49 0 4.044-1.222 4.667-3.667-.933 1.223-2.023 1.68-3.267 1.375-.71-.174-1.217-.68-1.778-1.24-.916-.912-1.975-1.968-4.288-1.968z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandTailwindIcon;
/* prettier-ignore-end */
