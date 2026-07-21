/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GenderGenderfluidIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GenderGenderfluidIcon(props: GenderGenderfluidIconProps) {
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
          "M10 15.464a4 4 0 104.046-6.902A4 4 0 0010 15.464zM15.464 14l3-5.196M5.536 15.195l3-5.196M12 12h.01M9 9L3 3m2.5 5.5l3-3M21 21l-6-6m2 5l3-3M3 7V3h4"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GenderGenderfluidIcon;
/* prettier-ignore-end */
