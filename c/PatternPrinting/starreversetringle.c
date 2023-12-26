#include<stdio.h>
int main(){
    int n,m;
    printf("Enter a number 0f rows = ");
    scanf("%d",&n);
    int a = n;
        for (int i = 1 ; i <= n; i++)
    {
        for (int j = 1; j <= a - i; j++)
        {
            printf("* ");
        }
        //a--;
        printf("\n");
    }
        return 0;
}