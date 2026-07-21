/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LockFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LockFilledIcon(props: LockFilledIconProps) {
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
          "M12 2a5 5 0 015 5v3a3 3 0 013 3v6a3 3 0 01-3 3H7a3 3 0 01-3-3v-6a3 3 0 013-3V7a5 5 0 015-5zm0 12a2 2 0 00-1.995 1.85L10 16a2 2 0 102-2zm0-10a3 3 0 00-3 3v3h6V7a3 3 0 00-3-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LockFilledIcon;
/* prettier-ignore-end */
