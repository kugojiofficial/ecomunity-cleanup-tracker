/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SteeringWheelOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SteeringWheelOffIcon(props: SteeringWheelOffIconProps) {
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
          "M20.04 16.048A9 9 0 007.957 3.958m-2.32 1.678a9 9 0 0012.737 12.719m-7.779-7.779a2 2 0 102.827 2.83M12 14v7m-2-9l-6.75-2m12.292 1.543L20.75 10M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SteeringWheelOffIcon;
/* prettier-ignore-end */
