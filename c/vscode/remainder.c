#include<stdio.h>
int main(){
int a,b; // a>b
printf("Enter Dividend = ");
scanf("%d",&a);    
printf("Enter Dividend = ");
scanf("%d",&b);
int q = a/b;
int r = a - b*q;//divisior*Quotient + reminder = Dividend
printf("The reminder when %d is divided by %d is : %d",a,b,r);

    return 0;
}