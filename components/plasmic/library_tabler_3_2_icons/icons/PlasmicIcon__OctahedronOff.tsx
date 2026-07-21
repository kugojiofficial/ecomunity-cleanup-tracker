/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OctahedronOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function OctahedronOffIcon(props: OctahedronOffIconProps) {
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
          "M6.771 6.77l-4.475 4.527a.984.984 0 000 1.407l8.845 8.949a1.234 1.234 0 001.718-.001l4.36-4.412m2.002-2.025l2.483-2.512a.983.983 0 000-1.407l-8.845-8.948a1.233 1.233 0 00-1.718 0L8.766 4.751"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M2 12c.004.086.103.178.296.246l8.845 2.632c.459.163 1.259.163 1.718 0l1.544-.46m3.094-.92l4.207-1.252c.195-.07.294-.156.296-.243M12 2.12V8m0 4v9.88M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default OctahedronOffIcon;
/* prettier-ignore-end */
