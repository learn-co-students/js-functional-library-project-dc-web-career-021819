fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(obj, fn) {
      for (const element in obj){
        fn(obj[element]);
      }
      return obj
    },

    map: function(obj, fn) {
      const newArr = [];
      for (const element in obj){
        // const newElement = fn(obj[element]);
        newArr.push(fn(obj[element]));
      }
      return newArr;

    },

    reduce: function(obj, fn, acc) {
      if (!acc) {
        acc = obj.slice(0, 1)[0]
        newObj = obj.slice(1)
        for (const element in newObj){
          acc = fn(acc, newObj[element], newObj)
        }
      }else{
        for (const element in obj){
          acc = fn(acc, obj[element], obj)
        }
      };
      return acc
    },

    find: function(obj, fn) {
      for (const element in obj) {
        if (fn(obj[element])) {
          return obj[element];
        }
      }
    },

    filter: function(obj, fn) {
      const newArr = []
      for (const element in obj) {
        if (fn(obj[element])) {
          newArr.push(obj[element]);
        }
      }
      return newArr;
    },

    size: function(obj) {
      // i = 0;
      // for (const element in obj) {
      //   i++;
      // }
      // return i
      return Object.keys(obj).length
    },

    first: function(obj, n = 1) {
      if (n === 1){
        return obj.slice(0, n)[0]
      }else{
        return obj.slice(0, n)
      };
    },

    last: function(obj, n = 1) {
      if (n === 1) {
        return obj.slice(-1)[0];
      }else{
        return obj.slice(-1 * n);
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
      return newArr.sort((a, b) => fn(a) - fn(b));
    },

    flatten: function(arr, once = false) {
      const flatArray = [];
      const flattenIt = function(arr, x){
        for (const el of arr) {
          if (typeof el === "object" && (!once || !x)) {
            flattenIt(el, true);
          }else{
            flatArray.push(el);
          }
        }
      }
      flattenIt(arr, false);
      return flatArray;
      // flatArray = [];
      // for (const el of arr) {
      //   // debugger;
      //   if (!Array.isArray(el)) {
      //     flatArray.push(el);
      //   }else{
      //     while(!Array.isArray(el)){
      //       for (const e of el){
      //         if (!Array.isArray(e)) {
      //           flatArray.push(e);
      //         }else{
      //           el = el[0];
      //         }
      //       }
      //     }
      //   }
      // }
      // return flatArray;
    },

    uniq: function(arr, sorted = false, cb = x => x) {
      if (sorted) {
        for (var i = 0; i < arr.length; i++) {
          while (cb(arr[i]) === cb(arr[i + 1])) {
            arr.splice(i + 1, 1);
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
      return arr;
    },

    keys: function(obj) {
      const newArr = [];
      for (const el in obj) {
        newArr.push(el);
      }
      return newArr;
    },

    values: function(obj) {
      const newArr = [];
      for (const el in obj) {
        newArr.push(obj[el]);
      }
      return newArr;
    },

    functions: function(obj) {
      const newArr = [];
      for (const el in obj) {
        if (typeof(obj[el]) === 'function'){
          newArr.push(el);
        }
      }
      return newArr;
    },
  }
})()

fi.libraryMethod()
