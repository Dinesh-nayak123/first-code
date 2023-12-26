#include<stdio.h>
int main(){
int n;
printf("Enter a Number = ");
scanf("%d",&n);
for(int i = 1;i<=n;i++)
{
    for(int j = 1;j<=(n+1)-i;j++)
    {
        printf(" ");
    }
    for(int k = 1;k<= i;k++)
    {
        int A = k + 64;
        char ch = (char)A;
        printf("%c",A);
    }


    printf("\n");
}
    return 0;
}