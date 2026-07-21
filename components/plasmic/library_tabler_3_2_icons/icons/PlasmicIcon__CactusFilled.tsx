/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CactusFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CactusFilledIcon(props: CactusFilledIconProps) {
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
          "M7 22a1 1 0 01-.117-1.993L7 20h2v-6a4 4 0 01-3.995-3.8L5 10V9a1 1 0 011.993-.117L7 9v1a2 2 0 001.85 1.995L9 12V5a3 3 0 015.995-.176L15 5v10a2 2 0 001.995-1.85L17 13V8a1 1 0 011.993-.117L19 8v5a4 4 0 01-3.8 3.995L15 17v3h2a1 1 0 01.117 1.993L17 22H7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CactusFilledIcon;
/* prettier-ignore-end */
