function receivesAFunction(cb) {
  cb()
}

function returnsANamedFunction(){
  function namedFunc() {
    return 1
  }

  return namedFunc
}
function returnsAnAnonymousFunction(){
  return () => {1}
}