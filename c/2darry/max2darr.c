#include<stdio.h>
#include<limits.h>
int main(){
    int r,c;
    printf("Enter no of rows = ");
    scanf("%d",&r);
    printf("Enter no of rows = ");
    scanf("%d",&c);
    printf("Enter the elements\n");
    int arr[r][c];
    for(int i = 0;i<r;i++){
        for(int j = 0;j<c;j++){
            scanf("%d ",&arr[i][j]);
        }
    }
    for(int i = 0;i<r;i++){
        for(int j = 0;j<c;j++){
            printf("%d ",arr[i][j]);
        }
        printf("\n");
    }
    int max = INT_MIN;
    for(int i = 0;i<r;i++){
        for(int j = 0;j<c;j++){
            if(arr[i][j]>arr[0][0]) max = arr[i][j];
        }
        
    }
    printf("the max of the given matrix is %d",max);
    return 0;
}