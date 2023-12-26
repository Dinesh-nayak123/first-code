#include<stdio.h>
int main(){
int n;
printf("Enter a Numbe = ");
scanf("%d",&n);
if(n%5==0 || n%3==0){
    printf("The No is Divisible By 5 or 3");
}
else{
    printf("The No is not Divisible By 5 or 3");
}
    return 0;
}