#include<stdio.h>
void increasing(int x ,int a){
    if(x>a) return;
    printf("%d\n",x);
    increasing(x+1,a);
    return;
}
int main(){
int n;
printf("Enter a number = ");
scanf("%d",&n);
increasing(1,n);
    return 0;
}