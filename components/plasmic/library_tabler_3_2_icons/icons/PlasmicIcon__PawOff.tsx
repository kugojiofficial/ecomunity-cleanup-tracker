/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PawOffIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PawOffIcon(props: PawOffIconProps) {
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
          "M11.168 11.154c-.71.31-1.184 1.107-2 2.593-.942 1.703-2.846 1.845-3.321 3.291-.097.265-.145.677-.143.962 0 1.176.787 2 1.8 2 1.259 0 3-1 4.5-1s3.241 1 4.5 1c.927 0 1.664-.689 1.783-1.708m1.901-10.21A1.039 1.039 0 0019.782 8h-.015c-.735.012-1.56.75-1.993 1.866-.519 1.335-.28 2.7.538 3.052.129.055.267.082.406.082.739 0 1.575-.742 2.011-1.866.516-1.335.272-2.7-.541-3.052zM11 6.992a3.605 3.605 0 00-.04-.725C10.757 4.97 9.913 4 9.028 4a1.237 1.237 0 00-.758.265m8.186 2.468c.214-1.376-.375-2.594-1.32-2.722A1.164 1.164 0 0014.974 4c-.885 0-1.728.97-1.93 2.267-.214 1.376.375 2.594 1.32 2.722.054.007.108.011.162.011.885 0 1.73-.974 1.93-2.267zM5.69 12.918c.816-.352 1.054-1.719.536-3.052C5.79 8.742 4.955 8 4.217 8c-.14 0-.277.027-.407.082-.816.352-1.054 1.719-.536 3.052C3.71 12.258 4.545 13 5.283 13c.14 0 .277-.027.407-.082zM3 3l18 18"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PawOffIcon;
/* prettier-ignore-end */
