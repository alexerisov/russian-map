export const getIdFromRsmKey = (rsmKey: string): number => {
  const idString = rsmKey?.split('-')[1];
  return Number(idString) || 0;
};
