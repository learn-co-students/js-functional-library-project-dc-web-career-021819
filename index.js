fi = (function() {
  return {
    libraryMethod: function() {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function(obj, fn) {
      for (const el in obj) {
        fn(obj[el]);
      }
      return obj;
    },

    map: function(obj, fn) {
      const newArr = [];
      for (const el in obj) {
        newArr.push(fn(obj[el]));
      }
      return newArr;
    },

    reduce: function(obj, fn, acc = 0) {
      total = acc;
      for (const el in obj) {
        total = fn(total, obj[el], obj);
      }
      return total;
    },

    find: function(obj, fn) {
      for (const element in obj) {
        if (fn(obj[element])) {
          return obj[element];
        }
      }
    },

    filter: function(obj, fn) {
      newArr = [];
      for (const element in obj) {
        if (fn(obj[element])) {
          newArr.push(obj[element]);
        }
      }
      return newArr;
    },

    size: function(obj) {
      i = 0;
      for (const element in obj) {
        i++;
      }
      return i;
    },

    first: function(obj, num = 1) {
      if (num === 1) {
        return obj.slice(0, num)[0];
      } else {
        return obj.slice(0, num);
      }
    },

    last: function(obj, num = 1) {
      if (num === 1) {
        return obj.slice(-1)[0];
      } else {
        return obj.slice(-1 * num);
      }
    },

    compact: function(arr) {
      const newArr = [];
      for (el of arr) {
        if (el) {
          newArr.push(el);
        }
      }
      return newArr;
    },

    sortBy: function(arr, fn) {
      const newArr = [...arr];
      return newArr.sort((a, b) => {
        return fn(a) - fn(b);
      });
    },

    flatten: function(arr, once = false) {
      // fi.flatten([1, [2], [3, [[4]]]]);
      // /[1, [2, 3], [[4, 5], 6, [7, [8, 9]]]]
      const flatArray = [];
      const flattenIt = function(arr, hasBeenDoneOnce) {
        for (const el of arr) {
          if (typeof el == "object" && (!once || !hasBeenDoneOnce)) {
            flattenIt(el, true);
          } else {
            //Primitives
            flatArray.push(el);
          }
        }
      };
      flattenIt(arr, false);
      return flatArray;
    },

    uniq: function(arr, sorted = false, cb = x => x) {
      if (sorted) {
        for (let i = 0; i < arr.length; i++) {
          while (cb(arr[i]) === cb(arr[i + 1])) {
            arr.splice(i + 1, 1);
          }
        }
      } else {
        for (let i = 0; i < arr.length; i++) {
          for (let j = i + 1; j < arr.length; j++) {
            if (cb(arr[i]) === cb(arr[j])) {
              arr.splice(j, 1);
              j--;
            }
          }
        }
      }
      return arr;
    },
    keys: function(obj) {
      ret_arr = [];
      for (el in obj) {
        ret_arr.push(el);
      }
      return ret_arr;
    },

    values: function(obj) {
      ret_arr = [];
      for (el in obj) {
        ret_arr.push(obj[el]);
      }
      return ret_arr;
    },

    functions: function(obj) {
      ret_arr = [];
      for (el in obj) {
        if (typeof obj[el] === "function") {
          ret_arr.push(el);
        }
      }
      return ret_arr;
    }
  };
})();

fi.libraryMethod();
