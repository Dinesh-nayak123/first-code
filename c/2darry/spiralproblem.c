#include<stdio.h>
int main(){
    int m;
    printf("Enter no of rows of 1st matrix : ");
    scanf("%d",&m);
    int n;
    printf("Enter no of coloums of 2nd martix : ");
    scanf("%d",&n);
    int arr[m][n];
    printf("\nEnter elements of 1st matrix : ");
    for(int i = 0;i<m;i++){
        for(int j = 0;j<n;j++){
            scanf("%d ",&arr[i][j]);
        }
    }
// spiral print
    int minr = 0;
    int maxr = m-1;
    int minc = 0;
    int maxc = n-1;
    int tne = m*n;
    int count = 0;
    while(count<tne){
        // print the minimun row
        for(int j=minc;j<=maxr;j++){
            printf("%d ",arr[minr][j]);
            count++;
        }
        minr++;
        if(count>=tne) break;
        // print the maximum coloum
        for(int i = minr;i<=maxc;i++){
            printf("%d ",arr[maxc]);
            count++;
        }
        maxc--;
        if(count>=tne) break;
        // print the maximum row
        for(int j = maxc;j>=minc;j--){
            printf("%d ",arr[maxr][j]);
            count++;
        }
        maxr--;
        if(count>=tne) break;
        // print the minimum coloum
        for(int i = maxr;i>=minr;i--){
            printf("%d ",arr[i][minc]);
            count++;
        }
        minc++;
    }
    return 0;
}