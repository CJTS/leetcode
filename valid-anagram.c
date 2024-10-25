#include <stdio.h>

int isAnagram(char* s, char* t) {
    int sSize = 0;
    int tSize = 0;
    for(int i = 0; s[i] != '\0'; i++){
        sSize++;
    }
    
    for(int i = 0; t[i] != '\0'; i++){
        tSize++;
    }

    if(tSize != sSize) {
        return 0;
    }

    for(int i = 0; i < sSize; i++) {
        if(s[i] != t[tSize - (1 + i)]) {
            return 0;
        }
    }


    return 1;
}

int main() {
    char* s = "anagram";
    char* t = "nagaram";

    printf("%d\n", isAnagram(s, t));
    return 0;
}