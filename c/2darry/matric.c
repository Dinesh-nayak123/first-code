#include<stdio.h>
int main(){
    int n;
    printf("Enter no of rows = ");
    scanf("%d",&n);
    int arr[n][n];
    for(int i = 0;i<n;i++){
        for(int j = 0;j<n;j++){
            scanf("%d ",&arr[i][j]);
        }
    }
    printf("\n");
     for(int i = 0;i<n;i++){
        for(int j = 0;j<i;j++){         //j -> i to j <- n-1 or j -> 0 to j <- i
            int temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
        
    }
    // rotate
    for(int i = 0;i<n;i++){
        int j = 0;
        int k = n-1;
        while(j<k){
            // swap arr[i][j] and arr[i][k]
             int temp = arr[i][j];
            arr[i][j] = arr[i][k];
            arr[i][k] = temp;
            j++;
            k--;
        }
    }
    printf("\n");
    // output
    for(int i = 0;i<n;i++){
        for(int j = 0;j<n;j++){
            printf("%d ",arr[i][j]);
        }
        printf("\n");
    }
    return 0;
}