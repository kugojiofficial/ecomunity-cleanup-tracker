/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BellRinging2FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BellRinging2FilledIcon(props: BellRinging2FilledIconProps) {
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
          "M9.63 17.531c.612.611.211 1.658-.652 1.706a3.991 3.991 0 01-3.05-1.166 3.992 3.992 0 01-1.165-3.049c.046-.826 1.005-1.228 1.624-.726l.082.074 3.161 3.161zM20.071 3.929c.96.96 1.134 2.41.52 3.547l-.09.153-.024.036a8.013 8.013 0 01-1.446 7.137l-.183.223-.191.218-2.073 2.072-.08.112a3 3 0 00-.499 2.113l.035.201.045.185c.264.952-.853 1.645-1.585 1.051l-.086-.078L3.101 9.586c-.727-.727-.017-1.945.973-1.671a3 3 0 002.5-.418l.116-.086 2.101-2.1a8 8 0 017.265-1.86l.278.071.037-.023a3.003 3.003 0 013.432.192l.14.117.128.121z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BellRinging2FilledIcon;
/* prettier-ignore-end */
