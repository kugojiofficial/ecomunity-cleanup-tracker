/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Stack2FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Stack2FilledIcon(props: Stack2FilledIconProps) {
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
          "M20.894 15.553a1 1 0 01-.447 1.341l-8 4a1 1 0 01-.894 0l-8-4a1 1 0 01.894-1.788L12 18.88l7.554-3.775a1 1 0 011.341.447m0-4a1 1 0 01-.447 1.341l-8 4a1 1 0 01-.894 0l-8-4a1 1 0 01.894-1.788L12 14.88l7.554-3.775a1 1 0 011.341.447zM12.008 3c.037 0 .074.002.111.007l.111.02.086.024.012.006.012.002.029.014.05.019.016.009.012.005 8 4a1 1 0 010 1.788l-8 4a1 1 0 01-.894 0l-8-4a1 1 0 010-1.788l8-4 .011-.005.018-.01.078-.032.011-.002.013-.006.086-.024.11-.02.056-.005.072-.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Stack2FilledIcon;
/* prettier-ignore-end */
