/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CoinFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CoinFilledIcon(props: CoinFilledIconProps) {
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
          "M17 3.34A10 10 0 112 12l.005-.324A10 10 0 0117 3.34zM12 6a1 1 0 00-1 1 3 3 0 000 6v2a1.025 1.025 0 01-.866-.398l-.068-.101a1 1 0 00-1.732.998 3 3 0 002.505 1.5H11a1 1 0 00.883.994L12 18a1 1 0 001-1l.176-.005A3 3 0 0013 11V9c.358-.012.671.14.866.398l.068.101a1 1 0 001.732-.998A3 3 0 0013.161 7H13a1 1 0 00-1-1zm1 7a1 1 0 010 2v-2zm-2-4v2a1 1 0 010-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CoinFilledIcon;
/* prettier-ignore-end */
