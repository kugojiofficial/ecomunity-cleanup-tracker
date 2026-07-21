/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WomanFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WomanFilledIcon(props: WomanFilledIconProps) {
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
          "M14 8c1.91 0 3.79.752 5.625 2.219a.999.999 0 01-.904 1.742 1 1 0 01-.346-.18c-1.019-.815-2.016-1.345-2.997-1.6l1.584 5.544A1 1 0 0116 17h-1v4a1 1 0 01-2 0v-4h-2v4a1 1 0 01-2 0v-4H8a1 1 0 01-.962-1.275l1.584-5.545c-.98.256-1.978.786-2.997 1.601a1 1 0 01-1.25-1.562c1.733-1.386 3.506-2.133 5.307-2.212L10.017 8H14zm-2-7a3 3 0 11-3 3l.005-.176A3 3 0 0112 1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default WomanFilledIcon;
/* prettier-ignore-end */
