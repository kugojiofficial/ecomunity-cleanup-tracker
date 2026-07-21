/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AssetFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AssetFilledIcon(props: AssetFilledIconProps) {
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
          "M19 2a3 3 0 012.86 3.91l-.107.291-.046.093c-.04.085-.085.169-.134.25l-6.476 11.909a.997.997 0 01-.066.104A7 7 0 012 15l.004-.24a7 7 0 013.342-5.732l.256-.15 11.705-6.355a3.08 3.08 0 01.378-.22l.215-.096.136-.048C18.338 2.056 18.663 2 19 2zM9 12a3 3 0 00-2.995 2.824L6 15a3 3 0 103-3zm7.04-6.512l-5.12 2.778a7.01 7.01 0 014.816 4.824l2.788-5.128a3 3 0 01-2.485-2.474M19 4a1 1 0 00-.317.051l-.31.17a1 1 0 101.465 1.325l.072-.13A1 1 0 0019 4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AssetFilledIcon;
/* prettier-ignore-end */
