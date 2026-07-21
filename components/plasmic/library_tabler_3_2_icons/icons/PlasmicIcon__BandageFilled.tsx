/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BandageFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BandageFilledIcon(props: BandageFilledIconProps) {
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
          "M20.207 3.793a5.95 5.95 0 01.179 8.228l-.179.186-8 8a5.95 5.95 0 01-8.593-8.228l.179-.186 8-8a5.95 5.95 0 018.414 0zM12 13a1 1 0 00-1 1l.007.127A1 1 0 0013 14.01l-.007-.127A1 1 0 0012 13zm2-2a1 1 0 00-1 1l.007.127A1 1 0 0015 12.01l-.007-.127A1 1 0 0014 11zm-4 0a1 1 0 00-1 1l.007.127A1 1 0 0011 12.01l-.007-.127A1 1 0 0010 11zm2-2a1 1 0 00-1 1l.007.127A1 1 0 0013 10.01l-.007-.127A1 1 0 0012 9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BandageFilledIcon;
/* prettier-ignore-end */
