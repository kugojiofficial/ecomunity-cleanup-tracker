/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IrregularPolyhedronOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IrregularPolyhedronOffIcon(
  props: IrregularPolyhedronOffIconProps
) {
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
          "M4.706 4.73a1 1 0 00-.458 1.14L6 12l-1.752 6.13a1 1 0 00.592 1.205l6.282 2.503a2.46 2.46 0 001.756 0l6.282-2.503c.04-.016.079-.035.116-.055m-.474-4.474L18 12l1.752-6.13a1 1 0 00-.592-1.205l-6.282-2.503a2.46 2.46 0 00-1.756 0L7.578 3.574"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M4.5 5.5c.661.214 1.161.38 1.5.5m6 2c.29-.003.603-.06.878-.17L19.5 5.5M6 12l5.21 1.862a2.34 2.34 0 001.58 0l.742-.265m2.956-1.057c.312-.11.816-.291 1.512-.54m-6 10V12M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default IrregularPolyhedronOffIcon;
/* prettier-ignore-end */
