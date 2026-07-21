/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ghost2FilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ghost2FilledIcon(props: Ghost2FilledIconProps) {
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
          "M12 1.999l.041.002.208.003a8 8 0 017.747 7.747l.003.248.177.006a3 3 0 012.819 2.819L23 13a3 3 0 01-3 3l-.001 1.696 1.833 2.75a1 1 0 01-.72 1.548L21 22H11c-3.445.002-6.327-2.49-6.901-5.824l-.028-.178-.071.001a3 3 0 01-2.995-2.824L1 13a3 3 0 013-3l.004-.25A8 8 0 0112 2v-.001zM12 12a2 2 0 00-2 2 1 1 0 001 1h2a1 1 0 001-1 2 2 0 00-2-2zm-1.99-4l-.127.007A1 1 0 0010 10l.127-.007A1 1 0 0010.01 8zm4 0l-.127.007A1 1 0 0014 10l.127-.007A1 1 0 0014.01 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ghost2FilledIcon;
/* prettier-ignore-end */
