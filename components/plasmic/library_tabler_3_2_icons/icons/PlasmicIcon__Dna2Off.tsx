/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Dna2OffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Dna2OffIcon(props: Dna2OffIconProps) {
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
          "M17 3v1c-.007 2.46-.91 4.554-2.705 6.281M12 12c-3.328 1.99-5 4.662-5.008 8.014v1m10.008 0v-1c0-1.44-.315-2.755-.932-3.944M12 12c-1.903-1.138-3.263-2.485-4.082-4.068M8 4h9M7 20h10M12 8h4m-8 8h8M3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Dna2OffIcon;
/* prettier-ignore-end */
