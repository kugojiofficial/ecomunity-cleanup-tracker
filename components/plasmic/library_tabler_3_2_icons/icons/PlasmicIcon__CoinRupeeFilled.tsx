/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CoinRupeeFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CoinRupeeFilledIcon(props: CoinRupeeFilledIconProps) {
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
          "M17 3.34A10 10 0 112 12l.005-.324A10 10 0 0117 3.34zM15 7H9c-1.287 0-1.332 1.864-.133 1.993L9 9h1a2 2 0 011.732 1H9a1 1 0 000 2l2.732.001A2.001 2.001 0 0110 13H9c-.89 0-1.337 1.077-.707 1.707l3 3a1 1 0 001.414 0l.083-.094a1 1 0 00-.083-1.32l-1.484-1.485.113-.037a4.01 4.01 0 002.538-2.77L15 12a1 1 0 000-2h-1.126a3.976 3.976 0 00-.33-.855L13.465 9H15a1 1 0 001-1l-.007-.117A1 1 0 0015 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CoinRupeeFilledIcon;
/* prettier-ignore-end */
