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

    reduce: function() {
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

    functions: function() {

    },


  }
})()

fi.libraryMethod()
