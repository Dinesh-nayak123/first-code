#include<stdio.h>
int main() {
    // int arr[5]={2,4,6,8,1}; method 1
    // printf("%d",arr[1]);
    // int arr[5];
    // arr[0] = 2; //method 2
    // arr[1] = 4;
    // arr[2] = 6;
    // arr[3] = 8;
    // arr[4] = 1;
    int arr[5];
    for(int i=0;i<=4;i++){
        printf("\nEnter element number %d = ",i+1);
        scanf("%d",&arr[i+1]);
    }
    printf("%d",arr[1]);
    return 0;
}