const merge = function (nums1, m, nums2, n) {
  let idx = m + n - 1;
  n--;
  m--;

  while (n >= 0) {
    if (m >= 0 && nums1[m] > nums2[n]) {
      nums1[idx] = nums1[m];
      m--;
    } else {
      nums1[idx] = nums2[n];
      n--;
    }
    idx--;
  }
};