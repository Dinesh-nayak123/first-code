#include<stdio.h>
int main(){
int x;
printf("positive integer = ");
scanf("%d",&x);
if(x%5==0) {
    printf("dividible by 5");
}
else{
    printf("not divisible by 5");
}
    return 0;
}