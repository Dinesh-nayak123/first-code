#include<stdio.h>
int main(){
int n;
printf("Enter a Number = ");
scanf("%d",&n);
int nos = n;
int num = 1;
for(int i = 1;i<=n;i++)
{
    for(int j = 1;j<=nos;j++)
    {
        printf(" ");
    }
    nos = nos - 1;
    for(int k = 1;k<=num;k++)
    {
        printf("%d",k);
    }
    num = num + 2;
    


    printf("\n");
}

    return 0;
}