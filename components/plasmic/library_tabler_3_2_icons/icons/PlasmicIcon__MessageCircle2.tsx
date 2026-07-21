/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MessageCircle2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MessageCircle2Icon(props: MessageCircle2IconProps) {
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
          "M3 20l1.3-3.9c-1.124-1.662-1.53-3.63-1.144-5.538.386-1.908 1.54-3.626 3.244-4.836 1.704-1.21 3.845-1.827 6.024-1.739 2.179.089 4.248.877 5.821 2.22 1.574 1.342 2.546 3.147 2.735 5.078.19 1.931-.417 3.858-1.706 5.422-1.29 1.564-3.173 2.659-5.302 3.08-2.13.422-4.358.142-6.272-.787L3 20z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default MessageCircle2Icon;
/* prettier-ignore-end */
