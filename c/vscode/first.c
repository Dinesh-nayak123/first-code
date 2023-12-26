#include<stdio.h>
int main(){
float principal,rate,time,si;
printf("Enter Principle = ");
scanf("%f",&principal);
printf("Enter rate = ");
scanf("%f",&rate);
printf("Enter time = ");
scanf("%f",&time);
si = (principal*rate*time)/100;
printf("Your Rate Of Intreast = %f",si);
    return 0;
}