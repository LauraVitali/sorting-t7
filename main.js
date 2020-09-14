 const deck = [
  {
    value: 11,
    suit: "♤",
  },
  {
    value: 10,
    suit: "♡",
  },
  {
    value: 8,
    suit: "♤",
  },
  {
    value: 6,
    suit: "♧",
  },
  {
    value: 4,
    suit: "♡",
  },
  {
    value: 9,
    suit: "♧",
  },
  {
    value: 4,
    suit: "♢",
  },
  {
    value: 6,
    suit: "♤",
  },
  {
    value: 13,
    suit: "♤",
  },
  {
    value: 13,
    suit: "♢",
  },
  {
    value: 6,
    suit: "♡",
  },
  {
    value: 4,
    suit: "♤",
  },
  {
    value: 11,
    suit: "♧",
  },
  {
    value: 7,
    suit: "♡",
  },
  {
    value: 8,
    suit: "♡",
  },
  {
    value: 5,
    suit: "♡",
  },
  {
    value: 8,
    suit: "♧",
  },
  {
    value: 2,
    suit: "♧",
  },
  {
    value: 12,
    suit: "♡",
  },
  {
    value: 9,
    suit: "♢",
  },
  {
    value: 13,
    suit: "♡",
  },
  {
    value: 3,
    suit: "♧",
  },
  {
    value: 5,
    suit: "♢",
  },
  {
    value: 12,
    suit: "♤",
  },
  {
    value: 1,
    suit: "♢",
  },
  {
    value: 2,
    suit: "♡",
  },
  {
    value: 3,
    suit: "♢",
  },
  {
    value: 2,
    suit: "♤",
  },
  {
    value: 9,
    suit: "♤",
  },
  {
    value: 5,
    suit: "♤",
  },
  {
    value: 7,
    suit: "♤",
  },
  {
    value: 11,
    suit: "♡",
  },
  {
    value: 12,
    suit: "♢",
  },
  {
    value: 7,
    suit: "♢",
  },
  {
    value: 6,
    suit: "♢",
  },
  {
    value: 10,
    suit: "♧",
  },
  {
    value: 1,
    suit: "♤",
  },
  {
    value: 12,
    suit: "♧",
  },
  {
    value: 10,
    suit: "♤",
  },
  {
    value: 13,
    suit: "♧",
  },
  {
    value: 1,
    suit: "♧",
  },
  {
    value: 7,
    suit: "♧",
  },
  {
    value: 3,
    suit: "♤",
  },
  {
    value: 5,
    suit: "♧",
  },
  {
    value: 9,
    suit: "♡",
  },
  {
    value: 8,
    suit: "♢",
  },
  {
    value: 11,
    suit: "♢",
  },
  {
    value: 4,
    suit: "♧",
  },
  {
    value: 2,
    suit: "♢",
  },
  {
    value: 10,
    suit: "♢",
  },
  {
    value: 1,
    suit: "♡",
  },
  {
    value: 3,
    suit: "♡",
  },
];
/*
Sort the deck of cards so that it becomes [1,1,1,1,2,2...]
*/

function compare(a,b) {
    if (a.value < b.value) {
        return -1;
    }

    if (a.value > b.value) {
        return 1;
    }

    return 0;
}

deck.sort(compare);
