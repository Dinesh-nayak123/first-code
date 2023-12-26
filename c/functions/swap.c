#include<stdio.h>
int main(){
int a;
printf("Enter a = ");
scanf("%d",&a);
int b;
printf("Enter b = ");
scanf("%d",&b);
int c = a;
a = b;
b = c;
printf("the new a is %d\n",a);
printf("the new b is %d",b);
    return 0;
}