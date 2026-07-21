/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MasksTheaterOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MasksTheaterOffIcon(props: MasksTheaterOffIconProps) {
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
          "M13 9h6.808a2 2 0 011.992 2.183l-.554 6.041m-1.286 2.718A3.99 3.99 0 0117.25 21h-1.5a4 4 0 01-3.983-3.635l-.567-6.182M18 13h.01M15 16.5c.657.438 1.313.588 1.97.451m-8.338-.969A4.06 4.06 0 018.25 16h-1.5a4 4 0 01-3.983-3.635L2.2 6.183a2 2 0 01.514-1.531A1.99 1.99 0 014 4m4 0h2.808a2 2 0 012 2M6 8h.01M6 12c.764-.51 1.528-.63 2.291-.36M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MasksTheaterOffIcon;
/* prettier-ignore-end */
