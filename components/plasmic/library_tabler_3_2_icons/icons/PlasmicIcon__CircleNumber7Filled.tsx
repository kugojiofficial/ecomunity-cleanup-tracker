/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CircleNumber7FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CircleNumber7FilledIcon(props: CircleNumber7FilledIconProps) {
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
          "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm2 5h-4l-.117.007a1 1 0 00-.876.876L9 8l.007.117a1 1 0 00.876.876L10 9h2.718l-1.688 6.757-.022.115a1 1 0 001.927.482l.035-.111 2-8 .021-.112a1 1 0 00-.878-1.125L14 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CircleNumber7FilledIcon;
/* prettier-ignore-end */
