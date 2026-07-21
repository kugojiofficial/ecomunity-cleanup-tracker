/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FrustumOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FrustumOffIcon(props: FrustumOffIconProps) {
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
          "M7.72 3.728l3.484-1.558a1.95 1.95 0 011.59 0l4.496 2.01c.554.246.963.736 1.112 1.328l2.538 10.158c.103.412.07.832-.075 1.206m-2.299 1.699l-5.725 2.738a1.945 1.945 0 01-1.682 0l-7.035-3.365a1.99 1.99 0 01-1.064-2.278l2.52-10.08"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M18 4.82l-5.198 2.324a1.963 1.963 0 01-1.602 0m.8.176V8m0 4v9.5M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FrustumOffIcon;
/* prettier-ignore-end */
