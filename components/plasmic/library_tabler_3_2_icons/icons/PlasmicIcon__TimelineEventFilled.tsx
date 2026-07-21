/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TimelineEventFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TimelineEventFilledIcon(props: TimelineEventFilledIconProps) {
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
          "M12 17c1.306 0 2.418.835 2.83 2H20a1 1 0 010 2h-5.171a3 3 0 01-5.658 0H4a1 1 0 010-2h5.17A3.001 3.001 0 0112 17zm5-15a2 2 0 012 2v8a2 2 0 01-2 2h-2.586l-1.707 1.707a1 1 0 01-1.32.083l-.094-.083L9.585 14H7a2 2 0 01-1.995-1.85L5 12V4a2 2 0 012-2h10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TimelineEventFilledIcon;
/* prettier-ignore-end */
