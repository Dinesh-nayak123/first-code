#include<stdio.h>
int main(){
int n;
printf("Enter a Number = ");
scanf("%d",&n);
int nsp = 1;
int nst = n;
int a = 65;
for(int m = 1;m<=2*n+1;m++){
    // int a = 65;
    char ch = (char)a;
    printf("%c",a);
    a++;
    }
    printf("\n");
for(int i = 1;i<=n;i++)
{
    int a = 65;
    for(int j = 1;j<=nst;j++){
        char ch = (char)a;
        printf("%c",a);
        a++;
    }
    for(int k = 1;k<=nsp;k++){
        printf(" ");
        a++;
    }
    for(int l = 1;l<=nst;l++){
        char ch = (char)a;
        printf("%c",a);
        a++;
    }
    nst--;
    nsp+=2;

    printf("\n");
}
    return 0;
}