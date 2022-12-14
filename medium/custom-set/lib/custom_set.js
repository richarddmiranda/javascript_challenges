function uniqueArray(array) {
  let uniqueArray = [];
  array.forEach(element => {
    if (!uniqueArray.includes(element)) uniqueArray.push(element);
  })

  return uniqueArray;
}


class CustomSet {

  constructor(array = []) {
    this.set = uniqueArray(array);
  }

  isEmpty() {
    return this.set.length === 0;
  }

  contains(element) {
    return this.set.includes(element)

  }

  isSubset(comparison) {
    if (this.set.length === 0) return true;
    return this.set.every(element => comparison.contains(element))

  }

  isDisjoint(comparison) {
    if (this.set.length === 0 || comparison.set.length === 0) return true;
    return this.set.every(element => !comparison.contains(element))
  }

  isSame(comparison) {
    if (this.set.length === 0 && comparison.set.length === 0) return true;
    return this.set.every(element => comparison.contains(element)) &&
          comparison.set.every(element => this.contains(element))
  }

  add(element) {
    if (!this.contains(element)) this.set.push(element);
    return this;
  }

  intersection(comparison) {
    let intersected = new CustomSet();

    if (this.set.length === 0 || comparison.set.length === 0) return intersected;

    this.set.forEach(element => {
      if (comparison.contains(element)) intersected.add(element);
    })
    return intersected;
  }

  difference(comparison) {
    let differing = new CustomSet();

    if (this.set.length === 0 ) return differing;

    this.set.forEach(element => {
      if (!comparison.contains(element)) differing.add(element);
    })
    return differing;
  }

  union(comparison) {
    let unified = new CustomSet(this.set);
    comparison.set.forEach(element => {
      if (!unified.contains(element)) unified.add(element);
    })
    return unified;
  }

}

module.exports = CustomSet