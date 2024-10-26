//@ts-nocheck
//@ts-ignore
{
  let a;

  let b = null;

  if (b == false) {
    console.log("b is null");
  } else {
    console.log("b is not null");
  }
}

{
  function test() {
    let a = 1;
    var b = 2;
    if (true) {
      let a = 5;
      var b = 6;
      console.log(a, b);
    }
  }
  test();
}
