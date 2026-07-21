/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArticleFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArticleFilledIcon(props: ArticleFilledIconProps) {
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
          "M19 3a3 3 0 012.995 2.824L22 6v12a3 3 0 01-2.824 2.995L19 21H5a3 3 0 01-2.995-2.824L2 18V6a3 3 0 012.824-2.995L5 3h14zm-2 12H7l-.117.007a1 1 0 000 1.986L7 17h10l.117-.007a1 1 0 000-1.986L17 15zm0-4H7l-.117.007a1 1 0 000 1.986L7 13h10l.117-.007a1 1 0 000-1.986L17 11zm0-4H7l-.117.007a1 1 0 000 1.986L7 9h10l.117-.007a1 1 0 000-1.986L17 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArticleFilledIcon;
/* prettier-ignore-end */
