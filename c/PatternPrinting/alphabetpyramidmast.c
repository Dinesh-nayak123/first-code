#include<stdio.h>
int main(){
int n;
printf("Enter a Number = ");
scanf("%d",&n);
int nos = n - 1;
for(int i = 1;i<=n;i++)
{
    int a = 1;
    int b = 1;
    for(int j = 1;j<=nos;j++)
    {
        printf(" ");
    }
    nos--;
    for(int k = 1;k<=i;k++)
    {
        int d = a + 64;
        char ch = (char)d;
        printf("%c",d);
        a++;
    }
    for(int l = 1;l<=i-1;l++)
    {
        int w = b + 64;
        char ch = (char)w;
        printf("%c",w);
        b++;
    }

    printf("\n");
}
    return 0;
}