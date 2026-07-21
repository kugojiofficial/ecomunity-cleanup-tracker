/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SpadeFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SpadeFilledIcon(props: SpadeFilledIconProps) {
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
          "M11.327 2.26a1395.014 1395.014 0 00-4.923 4.504c-.626.6-1.212 1.21-1.774 1.843a6.528 6.528 0 00-.314 8.245l.14.177c1.012 1.205 2.561 1.755 4.055 1.574l.246-.037-.706 2.118A1 1 0 009 22h6l.118-.007a1 1 0 00.83-1.31l-.688-2.065.104.02c1.589.25 3.262-.387 4.32-1.785a6.527 6.527 0 00-.311-8.243 31.801 31.801 0 00-1.76-1.83l-4.938-4.518a1 1 0 00-1.348-.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SpadeFilledIcon;
/* prettier-ignore-end */
