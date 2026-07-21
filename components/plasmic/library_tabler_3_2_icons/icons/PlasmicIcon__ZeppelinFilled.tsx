/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ZeppelinFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ZeppelinFilledIcon(props: ZeppelinFilledIconProps) {
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
          "M13.5 3c5.187 0 9.5 3.044 9.5 7 0 3.017-2.508 5.503-6 6.514V20a1 1 0 01-1 1h-6a1 1 0 01-1-1v-4.046a21 21 0 01-2.66-1.411l-.13-.082-1.57 1.308a1 1 0 01-1.634-.656L3 15v-2.851l-.31-.25a46.93 46.93 0 01-.682-.568l-.67-.582a1 1 0 010-1.498c.443-.392.893-.776 1.351-1.151L3 7.85V5a1 1 0 011.55-.836l.09.068 1.57 1.307.128-.08c2.504-1.553 4.784-2.378 6.853-2.453L13.5 3zm-2.499 13.657L11 19h4l.001-2.086c-.49.057-.99.086-1.501.086a9.602 9.602 0 01-2.13-.252l-.369-.091z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ZeppelinFilledIcon;
/* prettier-ignore-end */
