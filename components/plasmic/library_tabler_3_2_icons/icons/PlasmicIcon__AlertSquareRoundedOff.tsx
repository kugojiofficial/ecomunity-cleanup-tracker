/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AlertSquareRoundedOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AlertSquareRoundedOffIcon(
  props: AlertSquareRoundedOffIconProps
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
          "M19.201 19.199C17.851 20.549 15.601 21 12 21c-7.2 0-9-1.8-9-9 0-3.598.45-5.847 1.797-7.197m2.626-1.376C8.627 3.12 10.132 3 12 3c7.2 0 9 1.8 9 9 0 1.865-.12 3.367-.425 4.57M12 7v1m0 8h.01M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default AlertSquareRoundedOffIcon;
/* prettier-ignore-end */
