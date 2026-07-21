/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SquareNumber7FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SquareNumber7FilledIcon(props: SquareNumber7FilledIconProps) {
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
          "M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 01-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2h12.666zM14 7h-4l-.117.007a1 1 0 00-.876.876L9 8l.007.117a1 1 0 00.876.876L10 9h2.718l-1.688 6.757-.022.115a1 1 0 001.927.482l.035-.111 2-8 .021-.112a1 1 0 00-.878-1.125L14 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SquareNumber7FilledIcon;
/* prettier-ignore-end */
