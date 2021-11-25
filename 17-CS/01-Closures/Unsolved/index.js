const name = "Kim";

function person() {
  const name = "Lee";

  return function displayName() {
    console.log(name);
  };
}

const displayFunc = person();
displayFunc();
// Invoke `displayName()` in order to print "Lee" in the console

console.log(name);

//Run in node.
