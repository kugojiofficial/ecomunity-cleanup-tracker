/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BookFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BookFilledIcon(props: BookFilledIconProps) {
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
          "M12.088 4.82a10 10 0 019.412.314.999.999 0 01.493.748L22 6v13a1 1 0 01-1.5.866 8 8 0 00-8 0 1 1 0 01-1 0 8 8 0 00-7.733-.148l-.327.18-.103.044-.049.016-.11.026-.061.01L3 20h-.042l-.11-.012-.077-.014-.108-.032-.126-.056-.095-.056-.089-.067-.06-.056-.073-.082-.064-.089-.022-.036-.032-.06-.044-.103-.016-.049-.026-.11-.01-.061-.004-.049L2 19V6a1 1 0 01.5-.866 10 10 0 019.412-.314l.088.044.088-.044z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BookFilledIcon;
/* prettier-ignore-end */
