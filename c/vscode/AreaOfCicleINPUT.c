#include<stdio.h>
int main(){
printf("Enter The Radius = ");    
float radius;
scanf("%f",&radius);
float pi = 3.1415;
float area = pi * radius * radius;
printf("Area Of The Circle = %f",area);
    return 0;
}