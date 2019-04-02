fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let i = 0;
      for(let item in collection){
        if(typeof item === "number"){
          callback(item, i, collection);
        } else {
          callback(collection[item], i, collection);
        }
        i++;
      }
      return collection;
    },

    map: function(collection, callback) {
      let newCollection = [];
      let i = 0;
      for(let item in collection){
        if(typeof item === "number"){
          newCollection.push(callback(item, i, collection));
        } else {
          newCollection.push(callback(collection[item], i, collection));
        }
        i++;
      }
      return newCollection;
    },

    reduce: function(collection, callback, acc)
    {
      let newCollection = [...collection]
      if (!acc){
        acc = newCollection.shift()
        // var value = newCollection[0]
      } //else{
        var value = acc
      //}
      for(let item in newCollection){
          value = callback(value, newCollection[item], newCollection)
      }
      return value
    },
    find: function(collection, predicate){
      for(let item in collection) {
        if(predicate(collection[item])){
          return collection[item]
        }
      }
    },
    filter: function(collection, predicate){
      let array = []
      for(let item in collection) {
        if(predicate(collection[item])){
          array.push(collection[item])
        }
      }
      return array
    },
    size: function(collection){
      i = 0
      for(let item in collection) {
        i ++
      }
      return i
    },
    first: function(collection, num = 0){
      let array = []
      if (num !== 0){
        for(let i = 0; i < num; i++) {
            array.push(collection[i])
        }
      } else {
        return collection[0]
      }
      return array
    },

    last: function(collection, num = 0){
      let array = []
      if (num !== 0){
        for(let i = collection.length - 1; i > (collection.length - 1 - num); i--) {
            array.unshift(collection[i])
        }
      } else {
        return collection[collection.length - 1]
      }
      return array
    },

    compact: function(collection){
      let newArray = []
      for(let item in collection) {
        if(collection[item]){
          newArray.push(collection[item])
        }
      }
      return newArray
    }



  }
})()

fi.libraryMethod()
