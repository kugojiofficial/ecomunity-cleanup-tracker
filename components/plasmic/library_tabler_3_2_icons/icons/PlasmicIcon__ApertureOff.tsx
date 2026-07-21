/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ApertureOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ApertureOffIcon(props: ApertureOffIconProps) {
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
          "M3.6 15h10.55M5.641 5.631A9 9 0 0018.36 18.369m1.68-2.318A9 9 0 007.966 3.953m-.571 3.581l2.416 7.438m7.221-10.336L12.18 8.162M9.846 9.857l-1.349.98m12.062 3.673l-8.535-6.201m.233 12.607l2.123-6.533m.984-3.028l.154-.473M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default ApertureOffIcon;
/* prettier-ignore-end */
