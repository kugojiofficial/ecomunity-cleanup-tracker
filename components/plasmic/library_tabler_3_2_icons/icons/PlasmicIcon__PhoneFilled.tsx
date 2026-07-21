/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhoneFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhoneFilledIcon(props: PhoneFilledIconProps) {
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
          "M9 3a1 1 0 01.877.519l.051.11 2 5a1 1 0 01-.313 1.16l-.1.068-1.674 1.004.063.103a10 10 0 003.132 3.132l.102.062 1.005-1.672a1 1 0 011.113-.453l.115.039 5 2a1 1 0 01.622.807L21 15v4c0 1.657-1.343 3-3.06 2.998C9.361 21.477 2.522 14.638 2 6a3 3 0 012.824-2.995L5 3h4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhoneFilledIcon;
/* prettier-ignore-end */
