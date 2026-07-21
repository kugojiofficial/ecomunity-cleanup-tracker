/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SignatureOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SignatureOffIcon(props: SignatureOffIconProps) {
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
          "M3 17c3.333-3.333 5-6 5-8 0-.394-.017-.735-.05-1.033M6 6C5 6 3.968 7.085 4 9c.034 2.048 1.658 4.877 2.5 6C8 17 9 17.5 10 16l2-3c.333 2.667 1.333 4 3 4 .219 0 .708-.341 1.231-.742M20 16c.303.245.64.677 1 1M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default SignatureOffIcon;
/* prettier-ignore-end */
