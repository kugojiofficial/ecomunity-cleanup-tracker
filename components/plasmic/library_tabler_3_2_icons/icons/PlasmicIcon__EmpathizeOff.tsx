/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EmpathizeOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EmpathizeOffIcon(props: EmpathizeOffIconProps) {
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
          "M12 8a2.5 2.5 0 10-2.5-2.5m2.817 6.815l-.317.317-.728-.727a3.089 3.089 0 10-4.367 4.367L12 21.368l4.689-4.69m1.324-2.673a3.087 3.087 0 00-3.021-3.018M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default EmpathizeOffIcon;
/* prettier-ignore-end */
