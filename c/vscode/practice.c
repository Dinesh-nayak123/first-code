#include<stdio.h>
int main(){
int a;
printf("Enter Dividend 1 = ");
scanf("%d",&a);
int b;
printf("Enter Dividend 2 = ");
scanf("%d",&b);
int r = a % b;
printf("The Dividend 1 is %d and The Dividend 2 is %d Then the reminder is %d",a,b,r);
    return 0;
}