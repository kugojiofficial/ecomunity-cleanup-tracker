/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type KeyOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function KeyOffIcon(props: KeyOffIconProps) {
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
          "M10.17 6.159l2.316-2.316a2.877 2.877 0 014.069 0l3.602 3.602a2.877 2.877 0 010 4.069l-2.33 2.33m-2.896 1.104a2.863 2.863 0 01-1.486-.79l-.301-.302-6.558 6.558a2 2 0 01-1.239.578L5.172 21H4a1 1 0 01-.993-.883L3 20v-1.172a2 2 0 01.467-1.284l.119-.13L4 17h2v-2h2v-2l2.144-2.144-.301-.301a2.863 2.863 0 01-.794-1.504M15 9h.01M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default KeyOffIcon;
/* prettier-ignore-end */
