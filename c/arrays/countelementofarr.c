#include<stdio.h>
int main(){
    int n;
    printf("enter a number = ");
    scanf("%d",&n);
      int x;
    printf("enter a number = ");
    scanf("%d",&x);
    int arr[n];
    for(int i=0;i<n;i++){
        int l = i+1;
        printf("no of %d = ",l);
        scanf("%d",&arr[i]);
    }
    int count = 0;
    for(int i=0;i<n;i++){
    if(arr[i]>x){
        count = count + 1 ;
    }
    }
    printf("%d",count);
    

    return 0;
}