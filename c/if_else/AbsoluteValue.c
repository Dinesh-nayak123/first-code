#include<stdio.h>
int main(){
int n;
printf("Take a Number = ");
scanf("%d",&n);
if(n < 0){
   n = n * (-1);
}
printf("The Absolute No is : %d",n);
    return 0;
}