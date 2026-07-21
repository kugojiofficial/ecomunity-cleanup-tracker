/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DropletCodeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DropletCodeIcon(props: DropletCodeIconProps) {
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
          "M18.907 13.147a6.586 6.586 0 00-.843-2.27l-4.89-7.26c-.42-.625-1.287-.803-1.936-.397a1.376 1.376 0 00-.41.397l-4.893 7.26C4.24 13.715 4.9 17.318 7.502 19.423a7.123 7.123 0 003.99 1.561M20 21l2-2-2-2m-3 0l-2 2 2 2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default DropletCodeIcon;
/* prettier-ignore-end */
