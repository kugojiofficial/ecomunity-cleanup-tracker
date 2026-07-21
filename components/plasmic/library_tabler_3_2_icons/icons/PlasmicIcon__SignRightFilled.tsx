/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SignRightFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SignRightFilledIcon(props: SignRightFilledIconProps) {
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
          "M10 2a1 1 0 01.993.883L11 3v2h5a1 1 0 01.694.28l.087.095 2 2.5a1 1 0 01.072 1.147l-.072.103-2 2.5a1 1 0 01-.652.367L16 12h-5v8h1a1 1 0 01.117 1.993L12 22H8a1 1 0 01-.117-1.993L8 20h1v-8H6a1 1 0 01-.993-.883L5 11V6a1 1 0 01.883-.993L6 5h3V3a1 1 0 011-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SignRightFilledIcon;
/* prettier-ignore-end */
