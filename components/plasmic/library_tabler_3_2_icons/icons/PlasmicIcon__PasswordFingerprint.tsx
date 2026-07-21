/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PasswordFingerprintIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PasswordFingerprintIcon(props: PasswordFingerprintIconProps) {
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
          "M17 8c.788 1 1 2 1 3v1m-9-1c0-1.578 1.343-3 3-3s3 1.422 3 3v2m-3-2v2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M6 12v-1.397c-.006-1.999 1.136-3.849 2.993-4.85A6.385 6.385 0 0115 5.748M12 17v4m-2-1l4-2m-4 0l4 2m-9-3v4m-2-1l4-2m-4 0l4 2m12-3v4m-2-1l4-2m-4 0l4 2"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PasswordFingerprintIcon;
/* prettier-ignore-end */
