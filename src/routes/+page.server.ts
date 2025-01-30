import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  return {
    value: 1,
    x: 2,
    y: 3,
    z: 4,
  };
};
