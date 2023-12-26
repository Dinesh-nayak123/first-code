#include<stdio.h>
int main(){
    int x,y,z;
    printf("No of rows = ");
    scanf("%d",&x);
    printf("No of coloums = ");
    scanf("%d",&y);
    printf("Enter common number = ");
    scanf("%d",&z);
    int arr[x][y];
    // for(int i = 0;i<x;i++){
    //     for(int j = 0;j<y;j++){
    //         scanf("%d",&arr[i][j]);
    //     }
    // }
    int ten = z;
     for(int i = 0;i<x;i++){
        for(int j = 0;j<y;j++){
            printf("%d ",ten);
        }
        printf("\n");
    }
    

    return 0;
}