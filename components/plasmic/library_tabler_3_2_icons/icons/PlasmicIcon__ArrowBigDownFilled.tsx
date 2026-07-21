/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowBigDownFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowBigDownFilledIcon(props: ArrowBigDownFilledIconProps) {
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
          "M10 2l-.15.005A2 2 0 008 4v6.999L5.414 11A2 2 0 004 14.414L10.586 21a2 2 0 002.828 0L20 14.414a2 2 0 00.434-2.18l-.068-.145A2 2 0 0018.586 11L16 10.999V4a2 2 0 00-2-2h-4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowBigDownFilledIcon;
/* prettier-ignore-end */
