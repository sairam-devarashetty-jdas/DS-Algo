var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length >= nums2.length) {
    ha = nums1;
    la = nums2;
  } else {
    ha = nums2;
    la = nums1;
  }

  let result = 0;
  let haI = (ha.length + la.length) % 2 === 0 ? (ha.length + la.length)/2 - 1 : Math.floor((ha.length + la.length)/2);
  let laI = 0;

  while (
    (ha[haI] > la[laI]  && ha[haI] > la[laI+1])
      ||
     (ha[haI] < la[laI]  && ha[haI] < la[laI+1])
      ||
    (ha[haI] < la[laI]  && ha[haI+1] < la[laI])
     || 
    (ha[haI] > la[laI]  && ha[haI+1] > la[laI])  
  ) {
      if ((ha[haI] > la[laI]  && ha[haI] > la[laI+1])
          ||
          (ha[haI] > la[laI]  && ha[haI+1] > la[laI])  
         ){
         laI = laI + haI;
         haI = Math.floor(haI/2);
         laI = laI - haI;
      } else {
           haI = laI + haI;
          laI = Math.floor(laI/2);      
          haI = haI - laI ;           
      }
  }
  print(haI);
  print(laI);
  print((ha[haI] > la[laI]  && ha[haI] > la[laI+1]));
  print((ha[haI] < la[laI]  && ha[haI+1] < la[laI]));

  if((ha.length + la.length) % 2 === 0) {
    return (ha[haI] + la[laI])/2
  }
    return ha[haI] > la[laI] ? ha[haI] : la[laI];
};

nums1 = [1,3,7]
nums2 = [2,5,8,9,11,13]

print(findMedianSortedArrays(nums1, nums2));

