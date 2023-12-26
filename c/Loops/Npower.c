#include<stdio.h>
int main(){
int a,b;
printf("Enter the real no = ");
scanf("%d",&a);
printf("Enter the power = ");
scanf("%d",&b);
int value = 1;
for (int i = 1; i<=b; i++)
{
    value = value*a;
}
printf("%d raised to the power %d is %d",a,b,value);

    return 0;
}