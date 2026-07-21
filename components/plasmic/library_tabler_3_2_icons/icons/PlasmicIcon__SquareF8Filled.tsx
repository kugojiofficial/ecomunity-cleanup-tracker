/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareF8FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareF8FilledIcon(props: SquareF8FilledIconProps) {
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
          "M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 01-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2h12.666zM15 8h-1l-.15.005a2 2 0 00-1.844 1.838L12 10v1l.005.15c.018.236.077.46.17.667l.075.152.018.03-.018.032c-.133.24-.218.509-.243.795L12 13v1l.005.15a2 2 0 001.838 1.844L14 16h1l.15-.005a2 2 0 001.844-1.838L17 14v-1l-.005-.15a1.99 1.99 0 00-.17-.667l-.075-.152-.019-.032.02-.03c.135-.245.218-.516.242-.795L17 11v-1l-.005-.15a2 2 0 00-1.838-1.844L15 8zm-5 0H8l-.117.007a1 1 0 00-.876.876L7 9v6l.007.117a1 1 0 00.876.876L8 16l.117-.007a1 1 0 00.876-.876L9 15v-2h1l.117-.007a1 1 0 000-1.986L10 11H9v-1h1l.117-.007a1 1 0 000-1.986L10 8zm5 5v1h-1v-1h1zm0-3v1h-1v-1h1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareF8FilledIcon;
/* prettier-ignore-end */
