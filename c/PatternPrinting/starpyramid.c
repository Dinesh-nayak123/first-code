#include<stdio.h>
int main(){
int n;
printf("Enter a number = ");
scanf("%d",&n);
int nst = 1;    //no of stars.
int nos = n;   //no of spaces.
for(int i = 1;i<=n;i++)
{
    // for(int j = 1;j<=(n+1)-i;j++)
    for(int j = 1;j<=nos;j++)
    {
        printf(" ");
    }
    nos = nos - 1;
    // for(int k = 1;k<=(2*i)-1;k++) diff method
    for(int k = 1;k<=nst;k++)
    {
        printf("*");
    }
    nst = nst + 2;
    printf("\n");
}

    return 0;
}