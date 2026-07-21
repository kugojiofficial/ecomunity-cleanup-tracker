import * as React from "react";
import {
  PlasmicMessage,
  DefaultMessageProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicMessage";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface MessageProps extends DefaultMessageProps {}

function Message_(props: MessageProps, ref: HTMLElementRefOf<"div">) {

  return <PlasmicMessage message={{ ref }} {...props} />;
}

const Message = React.forwardRef(Message_);
export default Message;
