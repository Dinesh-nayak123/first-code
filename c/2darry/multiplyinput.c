#include<stdio.h>                                 //multification formula res[i][j] = a[i][k]*b[k][j]  k = 0 -> n
int main(){
    // 1st matrix
    int m;
    printf("Enter no of rows of 1st matrix : ");
    scanf("%d",&m);
    int n;
    printf("Enter no of rows of 1st matrix : ");
    scanf("%d",&n);
    int a[m][n];
    // input 1st matrix
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            scanf("%d ",&a[i][j]);
        }
    }
    // 2nd matrix
    int p;
    printf("Enter no of rows of 2nd matrix : ");
    scanf("%d",&p);
    int q;
    printf("Enter no of rows of 2nd matrix : ");
    scanf("%d",&q);
      int b[p][q];
    // input 2nd matrix
    for(int i=0;i<p;i++){
        for(int j=0;j<q;j++){
            scanf("%d ",&b[i][j]);
        }
    }
    if(n!=p){
        printf("The matrix cannot be multiplied.");
    }
    else{
        // multiplication
        int res[m][q];
        for(int i=0;i<m;i++){
            for(int j=0;j<q;j++){
                res[i][j] = 0;
                for(int k = 0;k<n;k++){
                    res[i][j] += a[i][k]*b[k][j];
                }
            }
        }
        // print
        for(int i=0;i<m;i++){
            for(int j=0;j<q;j++){
                printf("%d ",&res[i][j]);
            }
        }
    }
    return 0;
}