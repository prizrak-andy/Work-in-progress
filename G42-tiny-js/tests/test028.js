// test for array contains

Array.contains = function(element) {
  for (var i=0;i<this.length;i++)
    if (this[i]==element) return true;
  return false;
};

var a = [1,2,4,5,7];
var b = ["bread","cheese","sandwich"];

result = a.contains(1) && !a.contains(42) && b.contains("cheese") && !b.contains("eggs");
