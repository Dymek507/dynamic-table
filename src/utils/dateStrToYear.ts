export const dateStrToYear = (dateStr: string): string => {
  if (!dateStr) return "-";
  //remove "*" from dateStr
  dateStr = dateStr.replace("*", "");
  //split dateStr by "-"
  const dateArr = dateStr.split("-");
  return dateArr[0];
};
