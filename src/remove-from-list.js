const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let prevList;
  let list = l;

  const removeK = (currentList) => {
    console.log("list", list);
    console.log("currentList", currentList);
    // console.log("currentListNEXT", currentList.next);
    console.log("prevList", prevList);
    if (currentList === null) {
      return list;
    } else if (
      currentList.value === k &&
      currentList.next !== null &&
      currentList.next.value !== k
    ) {
      currentList.value = currentList.next.value;
      prevList = currentList;
      currentList.next = currentList.next.next;
      removeK(currentList.next);
    } else if (
      currentList.value === k &&
      currentList.next !== null &&
      currentList.next.value === k
    ) {
      currentList.value = currentList.next.value;
      currentList.next = currentList.next.next;
      removeK(list);
    } else if (currentList.value !== k) {
      prevList = currentList;

      removeK(currentList.next);
    } else if (currentList.value === k && currentList.next === null) {
      prevList.next = currentList.next;
    }
  };
  removeK(list);
  return list;
}

module.exports = {
  removeKFromList,
};
