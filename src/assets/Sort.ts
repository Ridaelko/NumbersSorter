const Sort = (list: number[], order: string): number[] => {
  // const listNum = list.filter((element) => {
  //   return typeof element === "number";
  // });
  // console.log(listNum); ok

  if (list.length <= 1) {
    return list;
  }

  const pivot = list[0];
  const smaller: number[] = [];
  const larger: number[] = [];

  if (order === "ascending") {
    for (let i = 1; i < list.length; i++) {
      if (list[i] < pivot) {
        smaller.push(list[i]);
      } else {
        larger.push(list[i]);
      }
    }
  } else if (order === "descending") {
    for (let i = 1; i < list.length; i++) {
      if (list[i] > pivot) {
        larger.push(list[i]);
      } else {
        smaller.push(list[i]);
      }
    }
  }

  // console.log(smaller); ok
  // console.log(larger); ok

  const sortedSmaller: number[] = Sort(smaller, order);
  const sortedLarger: number[] = Sort(larger, order);

  if (order === "ascending") {
    return [...sortedSmaller, pivot, ...sortedLarger];
  } else if (order === "descending") {
    return [...sortedLarger, pivot, ...sortedSmaller];
  } else {
    return [];
  }
};

export default Sort;
