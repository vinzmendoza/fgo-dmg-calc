interface unsortedData {
  id: number;
  name: string;
  class: string;
}
export const sortDescending = (unsortedData: unsortedData[] | undefined) => {
  if (!unsortedData) return;
  const sortedList = unsortedData.sort((a, b) => {
    let itemA = a.name.toLowerCase();
    let itemB = b.name.toLowerCase();

    if (itemA < itemB) return -1;

    if (itemA > itemB) return 1;

    return 0;
  });

  return sortedList;
};
