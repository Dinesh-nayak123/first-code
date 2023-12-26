#include<stdio.h>
// void check(int arr[]){
//     for(i = 0,j = n)

// }
int main(){
    int n;
    printf("enter a number = ");
    scanf("%d",&n);
    int arr[n];
    for(int i=0;i<n-1;i++)
        scanf("%d ",&arr[i]);
        int i = 0;
        int j = n-1;
    while(i<j){
        if(arr[i]==arr[j]){ 
            printf("it is a palindrome.");
            break;
        }
        else {
        printf("it is not apalindrome.");
        break;
        }
        i++;
        j--;
        
    }
    return 0;
}