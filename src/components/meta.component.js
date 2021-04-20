import React from "react";
import { Helmet } from "react-helmet";

// ToDo: use default meta pdf/x4
// ToDo: use meta from callas
// ToDo: use meta from data

export function Meta({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
