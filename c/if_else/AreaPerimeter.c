#include<stdio.h>
int main(){
int l;
printf("Enter The Length = ");
scanf("%d",&l);
int b;
printf("Ente The Breath = ");
scanf("%d",&b);
int area = l * b;
int peremeter = 2 * (l+b);
if(area>peremeter){
   printf("Area is greater than peremeter");
}
else{
    printf("Area is not greater than peremeter");
}
    return 0;
}