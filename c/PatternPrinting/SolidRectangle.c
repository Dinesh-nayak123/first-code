#include<stdio.h>
int main(){
    int n,m;
    printf("Enter a number 0f rows = ");
    scanf("%d",&n);
    printf("Enter a number 0f coloums = ");
    scanf("%d",&m);
    for (int i = 1 ; i <= m; i++)
    {
        for (int i = 1; i <= n; i++)
        {
            printf("* ");
        }
        printf("\n");
    }
    
    return 0;
}