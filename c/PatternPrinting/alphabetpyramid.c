#include<stdio.h>
int main(){
int n;
printf("Enter a Number = ");
scanf("%d",&n);
int nos = n - 1;
int num = 1;
for(int i = 1;i<=n;i++)
{
    int a = 1;
    for(int j = 1;j<=nos;j++)
    {
        printf(" ");
    }
    nos = nos - 1;
    for(int k = 1;k<=num;k++)
    {
        int d = a + 64;
        char ch = (char)d;
        printf("%c",d);
        a = a + 1;
    }
    num = num + 2;
    
    printf("\n");
}

    return 0;
}