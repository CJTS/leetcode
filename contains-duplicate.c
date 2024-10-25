#include <stdio.h>

int containsDuplicate(int* nums, int numsSize) {
    int mapValue[numsSize];
    int mapQnt[numsSize];
    int exist = 0;
    int numbersRead = 0;

    for(int i = 0; i < numsSize; i++) {
        mapValue[i] = 0;
        mapQnt[i] = 0;
    }

    for(int i = 0; i < numsSize; i++) { // Vou andar no array recebido
        exist = 0;
        int j = 0;
        for(; j < numbersRead; j++) { // Vou procurar no array existente se existe o valor ja)
            if(nums[i] == mapValue[j]) { // Se existe, aumenta tamanho
                mapQnt[j]++;
                exist = 1;
            }
        }

        if(exist == 0) { // Se não existe, coloca no array
            mapValue[numbersRead] = nums[i];
            mapQnt[j] = 1;
            numbersRead++;
        }
    }

    printf("numbersRead: %d\n", numbersRead);

    printf("mapValue\n");
    for(int i = 0; i < numsSize; i++) {
        printf("%d ", mapValue[i]);
    }
    printf("\n");

    printf("mapQnt\n");
    for(int i = 0; i < numsSize; i++) {
        printf("%d ", mapQnt[i]);
        if(mapQnt[i] > 1) {
            return 1;
        }
    }
    printf("\n");

    return 0;
}

int main() {
    int nums[] = {2,14,18,22,22};
    printf("%d\n", containsDuplicate(nums, 5));

    return 0;
}