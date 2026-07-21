/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FidgetSpinnerIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FidgetSpinnerIcon(props: FidgetSpinnerIconProps) {
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
          "M18 16v.01M6 16v.01M12 5v.01M12 12v.01M12 1a4 4 0 012.001 7.464l.001.072a3.998 3.998 0 011.987 3.758l.22.128a3.977 3.977 0 011.591-.417L18 12a4 4 0 11-3.994 3.77l-.28-.16c-.522.25-1.108.39-1.726.39-.619 0-1.205-.14-1.728-.391l-.279.16L10 16a4 4 0 11-2.212-3.579l.222-.129a3.998 3.998 0 011.988-3.756L10 8.465A4 4 0 018.005 5.2L8 5a4 4 0 014-4z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FidgetSpinnerIcon;
/* prettier-ignore-end */
