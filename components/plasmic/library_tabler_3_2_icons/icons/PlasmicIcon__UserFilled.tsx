/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UserFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UserFilledIcon(props: UserFilledIconProps) {
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
          "M12 2a5 5 0 11-5 5l.005-.217A5 5 0 0112 2zm2 12a5 5 0 015 5v1a2 2 0 01-2 2H7a2 2 0 01-2-2v-1a5 5 0 015-5h4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UserFilledIcon;
/* prettier-ignore-end */
