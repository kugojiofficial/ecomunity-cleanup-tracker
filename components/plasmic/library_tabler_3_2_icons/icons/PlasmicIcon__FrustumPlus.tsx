/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FrustumPlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FrustumPlusIcon(props: FrustumPlusIconProps) {
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
          "M12.841 21.309a1.945 1.945 0 01-1.682 0l-7.035-3.365a1.99 1.99 0 01-1.064-2.278L5.598 5.508a1.98 1.98 0 011.11-1.328l4.496-2.01a1.95 1.95 0 011.59 0l4.496 2.01c.554.246.963.736 1.112 1.328l1.67 6.683"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M18 4.82l-5.198 2.324a1.963 1.963 0 01-1.602 0L6 4.819m6 2.501V21.5m4-2.5h6m-3-3v6"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FrustumPlusIcon;
/* prettier-ignore-end */
