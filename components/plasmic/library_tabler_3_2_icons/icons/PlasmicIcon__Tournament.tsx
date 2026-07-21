/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TournamentIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TournamentIcon(props: TournamentIconProps) {
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
          "M2 4a2 2 0 104 0 2 2 0 00-4 0zm16 6a2 2 0 104 0 2 2 0 00-4 0zM2 12a2 2 0 104 0 2 2 0 00-4 0zm0 8a2 2 0 104 0 2 2 0 00-4 0zm4-8h3a1 1 0 011 1v6a1 1 0 01-1 1H6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M6 4h7a1 1 0 011 1v10a1 1 0 01-1 1h-2m3-6h4"}
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default TournamentIcon;
/* prettier-ignore-end */
