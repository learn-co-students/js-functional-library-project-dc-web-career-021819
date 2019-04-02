fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(obj, cb) {
      for(const el in obj){
        cb(obj[el])
      }
      return obj
    },

    map: function(obj, cb) {
      new_obj = []
      for (const el in obj) {
        new_obj.push(cb(obj[el]))
      }
      return new_obj
    },

    reduce: function(obj, cb, acc) {
      if (!acc) {
        acc = obj.slice(0,1)[0]
        newObj = obj.slice(1)
        for (const el in newObj) {
          acc = cb(acc, newObj[el], newObj)
      }
    }else{
      for (const el in obj) {
        acc = cb(acc, obj[el], obj)
    }
    }
    return acc
  },

  find: function (obj, fn) {
    for (const el of obj) {
      if (fn(el)) {
        return el
      }
    }
  },

  filter: function (obj, fn) {
    const filterArray = []
    for (const el of obj) {
      if (fn(el)) {
        filterArray.push(el)
      }
    }
    return filterArray
  },

  size: function (obj) {
    return Object.keys(obj).length
  },

  first: function (arr, n = 1) {
    if (n === 1) {
      return arr.slice()[0]
    } else {
      return arr.slice(0, n)
    }
  },

  last: function (arr, n = 1) {
    if (n === 1) {
      return arr.slice(-1)[0]
    } else {
      return arr.slice(-(n))
    }
  },

  compact: function (array) {
    let newArr = []
    for (el of array) {
      if (el) {
        newArr.push(el)
      }
    }
    return newArr
  },

  sortBy: function (array, cb) {
    let newArr = [...array]
    return newArr.sort(function (a, b) {
      return cb(a) - cb(b)
    })
  },

  //   const flatArray = function (array) {
    //     for (const el of array) {
      //       if (typeof el === 'object') {
        //         flatArray(array[el]);
        //       } else {
          //         newArray.push(array[el]);
          //     }
          //   }
          //   flatArray(array);
          //   return newArray
          // }
  flatten: function (array, shallow = false) {
    const flatArray = []
    if (!shallow) {
      function deepDive(array) {
        if (Array.isArray(array)) {
          for (const el in array) {
            deepDive(array[el])
          }
        } else {
          flatArray.push(array)
        }
      }
      deepDive(array)
    } else {
      function shallowDive(array) {
        for (const el of array ) {
          if (Array.isArray(el)) {
            for (nested of el) {
              flatArray.push(nested)
            }
          } else {
            flatArray.push(el)
          }
        }
      }
      shallowDive(array)
    }

    return flatArray
  },

  uniq: function (arr, sorted = false, cb = x => x) {
    if (sorted) {
      for (var i = 0; i < arr.length; i++) {
        while (cb(arr[i]) === cb(arr[i + 1])) {
          arr.splice(i + 1, 1)
        }
      }
    } else {
      for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
          if (cb(arr[i]) === cb(arr[j])) {
            arr.splice(j, 1)
            j--
          }
        }
      }
    }
    return arr
  },

  keys: function (obj) {
    const newArr = []
    for (const key in obj) {
      newArr.push(key)
    }
    return newArr
  },

  values: function (obj) {
    const newArr = []
    for (const key in obj) {
      newArr.push(obj[key])
    }
    return newArr
  },

  functions: function(obj) {
    const newArr = []
    for (const key in obj) {
      if (typeof(obj[key]) === 'function') {
        newArr.push(key)
      }
    }
    return newArr
    },


  }
})()

fi.libraryMethod()
