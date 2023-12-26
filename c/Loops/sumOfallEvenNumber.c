#include<stdio.h>
int main(){
int n;
printf("Enter a Number = ");
scanf("%d",n);
int sum = 0;

while (n!=0)
{   
   
    if(n%2==0)
    sum = sum + n;
    n = n/10;
}
printf("The sum of even no is %d",sum);

return 0;
}