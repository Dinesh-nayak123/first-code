#include<stdio.h>
int main(){
    int n;
    printf("Enter A Number = ");
    scanf("%d",&n);
    int x = n*10;
for(int i = n;i<=x;i=i+n)
printf("%d ",i);

    return 0;
}