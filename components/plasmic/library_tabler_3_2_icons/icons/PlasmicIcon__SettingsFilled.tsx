/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SettingsFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SettingsFilledIcon(props: SettingsFilledIconProps) {
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
          "M14.647 4.081a.723.723 0 001.08.448c2.439-1.485 5.23 1.305 3.745 3.744a.725.725 0 00.447 1.08c2.775.673 2.775 4.62 0 5.294a.723.723 0 00-.448 1.08c1.485 2.439-1.305 5.23-3.744 3.745a.725.725 0 00-1.08.447c-.673 2.775-4.62 2.775-5.294 0a.723.723 0 00-1.08-.448c-2.439 1.485-5.23-1.305-3.745-3.744a.724.724 0 00-.447-1.08c-2.775-.673-2.775-4.62 0-5.294a.724.724 0 00.448-1.08c-1.485-2.439 1.305-5.23 3.744-3.745a.722.722 0 001.08-.447c.673-2.775 4.62-2.775 5.294 0zM12 9a3 3 0 100 6 3 3 0 000-6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SettingsFilledIcon;
/* prettier-ignore-end */
