#include<stdio.h>
#include<limits.h>
int main(){
int arr[7] = {1,2,3,333,98,98,97};
    int max = INT_MIN;
    int smax = INT_MIN;
    for(int i=0;i<=6;i++){
        if(max<arr[i]){
        smax = max;
        max = arr[i];
        }
        else if(smax<arr[i] && max!=arr[i]){
            smax = arr[i];
        }
    }
 
    printf("second maximum is %d",smax);
    return 0;
}