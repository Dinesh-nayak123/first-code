#include<stdio.h>
int main(){
  printf("Enter The Radius = ");
  float radius;
  scanf("%f",&radius);
  float pi = 3.1415;
  float volume = 4 / 3 * pi * radius * radius * radius;
   printf("Volume Of The Spare = %f",volume);
    return 0;
}