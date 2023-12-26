#include<stdio.h>
int main(){
float radius;
printf("Enter Radius = ");
scanf("%f",&radius);
float pi = 3.1415;
float A = pi * radius * radius;
printf("Area Of The Circle = %f",A);
    return 0;
}