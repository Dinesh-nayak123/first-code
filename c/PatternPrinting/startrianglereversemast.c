#include<stdio.h>
int main(){
int n;
printf("Enter a number of rows= ");
scanf("%d",&n);
// int nsp = 0;
// int nst = n;
int a = n;
for(int i = 1;i<=n;i++)
{
    // for(int j = 1;j<=nsp;j++)
    // {
    //     printf(" ");
    // }
    // for(int k = 1;k<=nst;k++)
    // {
    //     printf("*");
    // }
    // nsp++;
    // nst--;
    for(int j = 1;j<=i-1;j++)
    {
        printf(" ");
    }
    for(int k = 1;k<=a;k++)
    {
        printf("*");
        
    }
    a = a-1;
    printf("\n");
}
    return 0;
}