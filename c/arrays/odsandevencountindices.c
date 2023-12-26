#include<stdio.h>
int main(){
    int n;
    printf("enter a number = ");
    scanf("%d",&n);
    int arr[n];
    for(int i=0;i<n;i++){
        int l = i+1;
        printf("no of %d = ",l);
        scanf("%d",&arr[i]);
    }
    int even = 0;
    int odd = 0;
    for(int i=0;i<n;i++){
    if(arr[i]%2==0){
        even += arr[i];
    }
    else odd += arr[i];
    }
    int diff = odd-even;
    printf("even count is %d\n",even);
    printf("odd count is %d\n",odd);
    printf("difference bet odd and even count is %d\n",diff);

    return 0;
}