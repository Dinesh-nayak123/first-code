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
        for(int j=i+1;j<n;j++){
            for(int k=j+1;k<n;k++){
            if(arr[i]+arr[j]+arr[k]==x){
                count++;
                printf("(%d,%d,%d)\n",arr[i],arr[j],arr[k]);
            }
            }
        }
    }
    printf("%d",count);
    return 0;
}