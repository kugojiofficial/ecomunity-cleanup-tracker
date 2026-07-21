/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ZoomPanFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ZoomPanFilledIcon(props: ZoomPanFilledIconProps) {
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
          "M12 8a4 4 0 013.447 6.031l2.26 2.262a1 1 0 01-1.414 1.414l-2.262-2.26A4 4 0 018 12l.005-.2A4 4 0 0112 8zm-.707-6.707a1 1 0 011.414 0l2 2a1 1 0 11-1.414 1.414L12 3.415l-1.293 1.292a1 1 0 01-1.32.083l-.094-.083a1 1 0 010-1.414l2-2zm8 8a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-2 2a1 1 0 01-1.414-1.414L20.585 12l-1.292-1.293a1 1 0 01-.083-1.32l.083-.094zm-16 0a1 1 0 111.414 1.414L3.415 12l1.292 1.293a1 1 0 01.083 1.32l-.083.094a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414l2-2zm6 10a1 1 0 011.414 0L12 20.585l1.294-1.292a1 1 0 011.32-.083l.094.083a1 1 0 010 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 01-.001-1.414z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ZoomPanFilledIcon;
/* prettier-ignore-end */
