#include<stdio.h>
#include<limits.h>
int main(){
    int arr[3][3] = {-9,-3,-4,-6,-5,-6,-3,-4,-3};
    int max = INT_MIN;
    for(int i = 0;i<3;i++){
        
        int sum = 0;
        for(int j = 0;j<3;j++){
            sum = sum + arr[i][j];
        }
        if(sum>max){
            max = sum;
        }
        printf("%d ",sum);
        printf("\n");
        }
    printf("The maximum sum of rows is %d ",max);
    return 0;
}