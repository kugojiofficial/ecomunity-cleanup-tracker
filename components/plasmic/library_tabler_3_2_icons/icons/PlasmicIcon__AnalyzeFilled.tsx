/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AnalyzeFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AnalyzeFilledIcon(props: AnalyzeFilledIconProps) {
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
          "M4.99 12.862a7.1 7.1 0 0012.171 3.924 1.956 1.956 0 01-.156-.637L17 16l.005-.15a2 2 0 111.769 2.137 9.1 9.1 0 01-15.764-4.85 1 1 0 011.98-.275z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M12 8a4 4 0 11-3.995 4.2L8 12l.005-.2A4 4 0 0112 8z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M13.142 3.09a9.1 9.1 0 017.848 7.772 1 1 0 01-1.98.276 7.1 7.1 0 00-6.125-6.064A7.096 7.096 0 006.837 7.21a2 2 0 11-3.831.939L3 8l.005-.15a2 2 0 012.216-1.838 9.094 9.094 0 017.921-2.922z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AnalyzeFilledIcon;
/* prettier-ignore-end */
