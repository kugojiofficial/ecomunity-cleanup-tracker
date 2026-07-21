/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AffiliateFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AffiliateFilledIcon(props: AffiliateFilledIconProps) {
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
          "M18.5 3a2.5 2.5 0 11-.912 4.828l-4.556 4.555a5.475 5.475 0 01.936 3.714l2.624.787a2.5 2.5 0 11-.575 1.916l-2.623-.788a5.5 5.5 0 01-10.39-2.29L3 15.5l.004-.221a5.5 5.5 0 012.984-4.673L5.2 7.982a2.498 2.498 0 01-2.194-2.304L3 5.5l.005-.164a2.5 2.5 0 114.111 2.071l.787 2.625a5.475 5.475 0 013.714.936l4.555-4.556a2.487 2.487 0 01-.167-.748L16 5.5l.005-.164A2.5 2.5 0 0118.5 3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AffiliateFilledIcon;
/* prettier-ignore-end */
