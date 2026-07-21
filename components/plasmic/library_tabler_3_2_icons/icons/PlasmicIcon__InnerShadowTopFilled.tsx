/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InnerShadowTopFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InnerShadowTopFilledIcon(props: InnerShadowTopFilledIconProps) {
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
          "M4.929 4.929c3.905-3.905 10.237-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0-3.905-3.905-3.905-10.237 0-14.142zm12.02 2.121a7 7 0 00-9.899 0 1 1 0 001.414 1.414 5 5 0 017.072 0A1 1 0 0016.95 7.05h-.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default InnerShadowTopFilledIcon;
/* prettier-ignore-end */
