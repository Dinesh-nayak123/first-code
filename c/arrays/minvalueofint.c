#include<stdio.h>
#include<limits.h>
int main(){
     int n;
    printf("Enter a Number = ");
    scanf("%d",&n);
    int arr[n] ;
    for(int i=0;i<n;i++){
    scanf("%d",&arr[i]);
    }
    int min = INT_MAX;
    for(int i=0;i<n;i++){
        if(min>arr[i])
        min = arr[i];
    }
    printf("maximum is %d",min);
    return 0;
}