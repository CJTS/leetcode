#include <stdio.h>

int main() {
  int numbers[] = {1,2,3,1};
  int value;
  int valueAux;
  int length;
  int i= 0;
  int j = 0;
  char indicador = 0;

  length = sizeof(numbers) / sizeof(numbers[0]);

  for(i = 0; i < length; i++) {
    if(indicador == 1) {
      break;
    };
    if(i == (length - 1)) {
      break;
    };
    value = numbers[i];
    for(j = i+1; j < length; j++) {
      valueAux = numbers[j];
      if(value == valueAux){
        indicador = 1;
        break;
      };
    };
  };

    if (indicador == 0) {
        printf("false\n");
        return 0;
    }

    if (indicador == 1) {
        printf("true\n");
        return 1;
    }

    return 0;
}
