/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CoinMoneroFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CoinMoneroFilledIcon(props: CoinMoneroFilledIconProps) {
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
          "M15 11.414V16a1 1 0 001 1l4.66.001a10 10 0 01-17.32 0L8 17l.117-.007A1 1 0 009 16v-4.585l2.293 2.292.094.083a1 1 0 001.32-.083L15 11.414zm2-8.074A10 10 0 0121.54 15H17V9c0-.89-1.077-1.337-1.707-.707L12 11.585 8.707 8.293l-.084-.076C7.986 7.703 7 8.147 7 9v6H2.46A9.99 9.99 0 012 12l.005-.324A10 10 0 0117 3.34z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CoinMoneroFilledIcon;
/* prettier-ignore-end */
