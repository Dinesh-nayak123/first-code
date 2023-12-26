#include<stdio.h>
int main(){
    int a = 6;
    int* x = &a;
    *x = 87;
    printf("%d\n",*x);
    
    return 0;
}