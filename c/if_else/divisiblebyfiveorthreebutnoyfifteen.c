#include<stdio.h>
int main(){
int n;
printf("Enter a Number = ");
scanf("%d",&n);
if(n%5==0 || n%3==0){
    if(n%15!=0){
        printf("The Number is  Divisible by 5 or 3 but not divisible by 15.");
    }
    else{
        printf("The number is divisible by 15.");
    }
}
else{
    printf("The Number is Not Divisible By 3 or 5.");
}
    return 0;
}