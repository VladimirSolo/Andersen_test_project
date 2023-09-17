import { lazy } from "react";

const FormLazy = lazy(() => import("./Form"));

export { FormLazy as Form };
