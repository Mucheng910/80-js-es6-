'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
   return collection_b.filter(item=>collection_a.includes(item));
  // ;let instersect=[...new Set( [...collection_a].filter(x=>collection_b.has(x)))];
  // return instersect
}

module.exports = get_intersection;
