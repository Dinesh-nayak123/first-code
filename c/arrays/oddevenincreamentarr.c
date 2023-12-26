#include<stdio.h>
int main(){
    int n;
    printf("enter a number = ");
    scanf("%d",&n);
    int arr[n];
    for(int i=0;i<n;i++){
        scanf("%d",&arr[i]);
    }
    for(int j=0;j<n;j++){
        if(j%2!=0) arr[j] *=2;
        else arr[j] +=10;
    }
    for(int k=0;k<n;k++)
    printf("%d ",arr[k]);

    return 0;
}