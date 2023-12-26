#include<stdio.h>
void swap(int* x,int* y){
    int temp = *x;
    *x = *y;
    *y = temp;
    return;
}
int main(){
int a = 2;
int b = 9;
swap(&a,&b);

printf("the new a is %d\n",a);
printf("the new b is %d",b);
    return 0;
}