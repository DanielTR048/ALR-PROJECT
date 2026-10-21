import React from "react";
import { hydrateRoot } from "react-dom/client";
import Site from "./alr-site.jsx";
const root = document.getElementById("root");
hydrateRoot(root, <Site page={root.dataset.page} base={root.dataset.base} />);
