#include <stdio.h>
#include <stdlib.h>

#define DEBUG 0

struct node {
    int value;
    struct node *next;
};

struct node *orderlyInsert(struct node *orderedListHead, int element);
struct node *insert(struct node *listHead, int element);
void printList(struct node *listHead);
void freeList(struct node *listHead);
int compareLists(struct node *listHead, struct node *orderedListHead);

int main() {
    struct node *studentsListHead = NULL;
    struct node *orderedStudentsListHead = NULL;

    int numCases;
    int numStudents;
    int score;

    scanf("%d", &numCases);
    if (DEBUG) {
        printf("numCases: %d\n", numCases);
    }

    for (int i = 0; i < numCases; i++) {
        studentsListHead = NULL;
        orderedStudentsListHead = NULL;
        scanf("%d", &numStudents);
        if (DEBUG) {
            printf("numStudents: %d\n", numStudents);
        }
        for (int j = 0; j < numStudents; j++) {
            scanf("%d", &score);
            studentsListHead = insert(studentsListHead, score);
            orderedStudentsListHead =
                orderlyInsert(orderedStudentsListHead, score);
        }
        printList(studentsListHead);
        printList(orderedStudentsListHead);
        printf("%d\n", compareLists(studentsListHead, orderedStudentsListHead));
    }

    freeList(studentsListHead);
    freeList(orderedStudentsListHead);

    return 0;
}

struct node *orderlyInsert(struct node *orderedListHead, int element) {
    struct node *iterator;

    if (orderedListHead == NULL) {
        orderedListHead = (struct node *)malloc(sizeof(struct node));
        orderedListHead->value = element;
        orderedListHead->next = NULL;
        return orderedListHead;
    }

    if (element > orderedListHead->value) {
        struct node *newNode = (struct node *)malloc(sizeof(struct node));
        newNode->value = element;
        newNode->next = orderedListHead;
        orderedListHead = newNode;
        return orderedListHead;
    }

    iterator = orderedListHead;
    while (iterator->next != NULL) {
        struct node *next = iterator->next;
        if (element > next->value) {
            struct node *newNode = (struct node *)malloc(sizeof(struct node));
            newNode->value = element;
            newNode->next = next;
            iterator->next = newNode;
            return orderedListHead;
        }
        iterator = iterator->next;
    }

    struct node *newNode = (struct node *)malloc(sizeof(struct node));
    newNode->value = element;
    newNode->next = NULL;
    iterator->next = newNode;
    return orderedListHead;
}

struct node *insert(struct node *listHead, int element) {
    struct node *iterator;

    if (listHead == NULL) {
        listHead = (struct node *)malloc(sizeof(struct node));
        listHead->value = element;
        listHead->next = NULL;
        return listHead;
    }

    iterator = listHead;
    while (iterator->next != NULL) {
        iterator = iterator->next;
    }

    struct node *newNode = (struct node *)malloc(sizeof(struct node));
    newNode->value = element;
    newNode->next = NULL;
    iterator->next = newNode;

    return listHead;
}

void printList(struct node *listHead) {
    if (DEBUG) {
        printf("printList\n");
    }
    struct node *iterator = listHead;

    while (iterator != NULL) {
        if (DEBUG) {
            printf("%d ", iterator->value);
        }
        iterator = iterator->next;
    }
    if (DEBUG) {
        printf("\n");
    }
}

void freeList(struct node *listHead) {
    struct node *tmp;

    while (listHead != NULL) {
        tmp = listHead;
        listHead = listHead->next;
        free(tmp);
    }
}

int compareLists(struct node *listHead, struct node *orderedListHead) {
    int counter = 0;
    struct node *iteratorList = listHead;
    struct node *iteratorOrderedList = orderedListHead;

    while (iteratorList != NULL || iteratorOrderedList != NULL) {
        if (iteratorList->value == iteratorOrderedList->value) {
            counter++;
        }
        iteratorList = iteratorList->next;
        iteratorOrderedList = iteratorOrderedList->next;
    }

    return counter;
}