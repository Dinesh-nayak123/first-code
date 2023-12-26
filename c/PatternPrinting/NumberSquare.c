#include<stdio.h>
int main(){
int n;
printf("Enter a number = ");
scanf("%d",&n);
for (size_t i = 1; i <= n; i++){
   for (int j = 1; j <= n; j++)
{
    printf("%d",j);
}
    printf("\n");
}
    return 0;
}