#include<stdio.h>
int main(){
int n;
printf("Enter a Number = ");
scanf("%d",&n);
int product = 1;
for(int i = 1;i<=n;i++){
    product = product * i;
printf("\nthe factorial %d is %d",i,product);
}
    return 0;
}