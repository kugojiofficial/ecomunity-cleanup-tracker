/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PointFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PointFilledIcon(props: PointFilledIconProps) {
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
        d={"M12 7a5 5 0 11-4.995 5.217L7 12l.005-.217A5 5 0 0112 7z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PointFilledIcon;
/* prettier-ignore-end */
