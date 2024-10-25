#include <stdio.h>

int comp (const int* a, const int* b) {
   return ( *a - *b );
}

int containsDuplicate(int* nums, int numsSize) {
    qsort(nums, numsSize, sizeof(int), comp);
    for (int i = 0; i < numsSize - 1; i++) {
        if (nums[i] == nums[i+1]) return 1;
    }
    return 0;
}

int main() {
    int nums[] = {2,14,18,22,22};
    printf("%d\n", containsDuplicate(nums, 5));

    return 0;
}