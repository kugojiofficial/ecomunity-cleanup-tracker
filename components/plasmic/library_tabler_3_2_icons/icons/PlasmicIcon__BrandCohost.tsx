/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrandCohostIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrandCohostIcon(props: BrandCohostIconProps) {
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
          "M14 14c0 .53.316 1.04.879 1.414.562.375 1.325.586 2.121.586s1.559-.21 2.121-.586C19.684 15.04 20 14.53 20 14c0-.53-.316-1.04-.879-1.414C18.56 12.21 17.796 12 17 12s-1.559.21-2.121.586C14.316 12.96 14 13.47 14 14z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M4.526 17.666c-1.133-.772-1.897-1.924-2.291-3.456-.398-1.54-.29-2.937.32-4.19.61-1.255 1.59-2.34 2.938-3.254 1.348-.914 2.93-1.625 4.749-2.132 1.81-.504 3.516-.708 5.12-.61 1.608.1 2.979.537 4.112 1.31s1.897 1.924 2.291 3.456c.398 1.541.29 2.938-.32 4.192-.61 1.253-1.59 2.337-2.938 3.252-1.348.915-2.93 1.626-4.749 2.133-1.81.503-3.516.707-5.12.61-1.608-.102-2.979-.539-4.112-1.311z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M11 12.508C10.47 12.192 9.77 12 9 12c-1.657 0-3 .895-3 2s1.343 2 3 2c.767 0 1.467-.192 2-.508"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default BrandCohostIcon;
/* prettier-ignore-end */
