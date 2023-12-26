#include<stdio.h>
int main(){
int n;
printf("Enter a Number = ");
scanf("%d",&n);
//Ternary Operator
//exp1 ? exp2 :ecp3
(n%2==0) ? printf("Even Number") : printf("Odd Number");
//if(n%2==0)
//  printf("Even Number");
//else
//  printf("Odd Number");
    return 0;
}