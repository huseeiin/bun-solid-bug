import { cache } from "@solidjs/router";
import { _get } from "./api";

export const get = cache(_get, "ids");
