#include<stdio.h>
#include<stdbool.h>
int main(){
    int arr[7] = {1,2,3,4,5,6,7};
    int x = 4;
    int idx = -1;
    bool flag = false;
    for(int i = 0;i<=6;i++){
        if(arr[i]==x){
            flag = true;
            idx = i;
            break;
        }
    }
    if(flag==false){
        printf("%d is not present in the arry",x);
    }
    else{
       printf("%d is present in the arry and the index is %d",x,idx); 
    }

    return 0;
}