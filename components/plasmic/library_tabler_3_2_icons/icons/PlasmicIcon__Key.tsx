/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type KeyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function KeyIcon(props: KeyIconProps) {
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
          "M16.555 3.843l3.602 3.602a2.877 2.877 0 010 4.069l-2.643 2.643a2.877 2.877 0 01-4.069 0l-.301-.301-6.558 6.558a2 2 0 01-1.239.578L5.172 21H4a1 1 0 01-.993-.883L3 20v-1.172a2 2 0 01.467-1.284l.119-.13L4 17h2v-2h2v-2l2.144-2.144-.301-.301a2.877 2.877 0 010-4.069l2.643-2.643a2.877 2.877 0 014.069 0zM15 9h.01"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default KeyIcon;
/* prettier-ignore-end */
