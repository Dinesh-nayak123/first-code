#include<stdio.h>
int main(){
    int arr[5] = {1,5,6,4,6};
    int sum = 1;
    for(int i=0;i<5;i++){
        sum = sum * arr[i];
    }
    printf("%d",sum);

    return 0;
}