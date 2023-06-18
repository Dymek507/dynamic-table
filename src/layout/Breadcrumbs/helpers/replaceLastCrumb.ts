export const replaceLastCrumbName = (
  crumbs: { name: string; path: string }[],
  lastCrumbName: string
) => {
  if (crumbs.length < 3) return crumbs;
  const lastCrumbIndex = crumbs.length - 1;
  crumbs[lastCrumbIndex].name = lastCrumbName;
  return crumbs;
};
