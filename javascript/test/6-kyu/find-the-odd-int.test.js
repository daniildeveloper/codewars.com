describe("Must return number that is in array odd times", function () {
  it("should return a number", function(){
    expect(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])).toEqual(5);
  });
});