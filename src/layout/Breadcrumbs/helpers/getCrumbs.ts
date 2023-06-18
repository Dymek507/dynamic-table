export const getCrumbs = (loactionPath: string) => {
  const dynamicCrumbs = loactionPath
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      return {
        name: crumb,
        path: `/${array.slice(0, index + 1).join("/")}`,
      };
    });
  return dynamicCrumbs;
};
