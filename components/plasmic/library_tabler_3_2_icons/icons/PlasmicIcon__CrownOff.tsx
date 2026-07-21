/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CrownOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CrownOffIcon(props: CrownOffIconProps) {
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
          "M18 18H5L3.135 8.673a.25.25 0 01.4-.244L8 12l1.6-2.4m1.596-2.394L12 6l4 6 4.464-3.571a.25.25 0 01.401.244l-1.363 6.818M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default CrownOffIcon;
/* prettier-ignore-end */
