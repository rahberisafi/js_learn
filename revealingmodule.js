var counter = (function(){

// private staff

let count = 0;

function print(message) {
  console.log(message + '---' + count);
}

  // return an object
return {
  // value: count,

get: function() {
return count;
},

set: function(value) {
count = value;
},


  increment: function(){
    count += 1;
    print('After increment: ');
  },

  reset: function() {
    print('Before reset: ');
    count = 0;
    print('After reset: ');
  }
}

// reveals the public function
// clear presentation
// however it can accidentally overwrite
// the property values

return {
  get: getCount,
  set: setCount,
  increment: incrementCount,
  reset: resetCount
};



})();

// console.log(counter.count);

counter.increment();
counter.increment();
counter.increment();

// accidentally created a closure
// console.log(counter.value);

counter.set(7);
console.log(counter.get());
counter.reset();
