/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CoinBitcoinFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CoinBitcoinFilledIcon(props: CoinBitcoinFilledIconProps) {
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
          "M17 3.34A10 10 0 112 12l.005-.324A10 10 0 0117 3.34zM13 6a1 1 0 00-1 1h-1a1 1 0 00-2 0 1 1 0 000 2v6a1 1 0 000 2c0 1.333 2 1.333 2 0h1a1 1 0 002 0v-.15c1.167-.394 2-1.527 2-2.85l-.005-.175a3.063 3.063 0 00-.734-1.827c.46-.532.739-1.233.739-1.998 0-1.323-.833-2.456-2-2.85V7a1 1 0 00-1-1zm.09 7c.492 0 .91.437.91 1s-.418 1-.91 1H11v-2h2.09zm0-4c.492 0 .91.437.91 1 0 .522-.36.937-.806.993L13.09 11H11V9h2.09z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CoinBitcoinFilledIcon;
/* prettier-ignore-end */
