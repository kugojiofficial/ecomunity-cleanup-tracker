/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClubsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClubsIcon(props: ClubsIconProps) {
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
          "M12 3a4 4 0 013.164 6.447A4 4 0 1114 15.645V17l1 4H9l1-4v-1.355a4 4 0 11-1.164-6.199A4 4 0 0111.999 3H12z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ClubsIcon;
/* prettier-ignore-end */
