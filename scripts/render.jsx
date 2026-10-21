import React from "react";
import { renderToString } from "react-dom/server";
import Site from "../alr-site.jsx";
export const render = (props) => renderToString(<Site {...props} />);
