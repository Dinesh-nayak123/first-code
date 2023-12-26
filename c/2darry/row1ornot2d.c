#include<stdio.h>
#include<limits.h>
int main(){
    int arr[3][4] = {0,0,0,1,1,0,1,0,1,0,0,0};
    int maxcount = 0;
    int maxidx = INT_MIN;
    for(int i = 0;i<3;i++){
        
        int count = 0;
        for(int j = 0;j<4;j++){
            if(arr[i][j]==1){
            count = count + 1;
            }
        }
        if(count>maxcount){
            maxcount = count;
            maxidx = i;
        }
        printf("%d ",count);
        printf("\n");
        }
    printf("%d no of index have max 1 and total 1 is %d ",maxidx,maxcount);
    return 0;
}