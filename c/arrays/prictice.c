#include<stdio.h>
int main(){
    int arr[7] = {1,2,3,4,3,2,1};
   int i = 0;
   int j = 6;
   while(i<j){
    if(arr[i]==arr[j]){
        printf("it is a palindrome.");
        break;
    }
    else{
        printf("it is not a palindrome.");
        break;
    }
    i++;
    j--;
   }
    return 0;
}