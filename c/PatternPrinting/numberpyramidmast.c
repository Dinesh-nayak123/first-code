#include<stdio.h>
int main(){
int n;
printf("Enter a Number = ");
scanf("%d",&n);
int nos = n - 1;
for(int i = 1;i<=n;i++)
{
    for(int j = 1;j<=nos;j++)
    {
        printf(" ");
    }
    nos = nos - 1;
    for(int k = 1;k<=i;k++)
    {
        printf("%d",k);
    }
    int a = i - 1;
    for(int l = 1;l<=i-1;l++)
    {
        printf("%d",a);
        a--;
    }
    
    printf("\n");
}
    
    return 0;
}