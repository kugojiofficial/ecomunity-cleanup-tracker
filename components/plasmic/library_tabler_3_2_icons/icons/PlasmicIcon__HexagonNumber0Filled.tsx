/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HexagonNumber0FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HexagonNumber0FilledIcon(props: HexagonNumber0FilledIconProps) {
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
          "M10.425 1.414a3.33 3.33 0 013.216 0l6.775 3.995c.067.04.127.084.18.133l.008.007.107.076a3.222 3.222 0 011.284 2.39l.005.203v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.225 3.225 0 012 15.502V8.217a3.21 3.21 0 011.65-2.808l6.775-3.995zM12 7a3 3 0 00-2.995 2.824L9 10v4l.005.176a3 3 0 005.99 0L15 14v-4l-.005-.176A3 3 0 0012 7zm0 2a1 1 0 01.993.883L13 10v4l-.007.117a1 1 0 01-1.986 0L11 14v-4l.007-.117A1 1 0 0112 9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HexagonNumber0FilledIcon;
/* prettier-ignore-end */
