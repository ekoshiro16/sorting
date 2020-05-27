describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      expect(split([4, 6, 8, 1, 4])).toEqual([[4, 6, 8],[1, 4]])
    });
  });

  describe('Split Array function', function() {
    it('is able to split an array into two halves for even array', function() {
      expect(split([2, 6, 8, 1, 4, 3])).toEqual([[2, 6, 8],[1, 4, 3]])
    });
  });

  describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
        expect(merge([2, 4], [1, 3])).toEqual([1, 2, 3, 4])
    });

    it('test #2, larger arrays', function() {
      expect(merge([2, 4, 6], [1, 3, 5])).toEqual([1, 2, 3, 4, 5, 6])
    }) 

    it('test #3, huge arrays', function() {
      expect(merge([9, 5, 7, 3, 1], [10, 8, 6, 2, 4])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })
  }); 
   
// Index left 0 right 0 
//   // 2 1 

//   // [1]

// index left 0 right 1
//   // 2 3 

//   // [1, 2]

// index left 1 right 1
//   // 4 3

//   // [1, 2, 3]

//   index left 1 right 2
