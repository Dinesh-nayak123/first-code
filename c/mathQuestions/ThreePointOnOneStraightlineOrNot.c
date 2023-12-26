#include<stdio.h>
int main(){
float x1,y1,x2,y2,x3,y3;
printf("Enter Origin x1 = ");
scanf("%f",&x1);
printf("Enter Origin x2 = ");
scanf("%f",&x2);
printf("Enter Origin x3 = ");
scanf("%f",&x3);
printf("Enter Origin y1 = ");
scanf("%f",&y1);
printf("Enter Origin y2 = ");
scanf("%f",&y2);
printf("Enter Origin y3 = ");
scanf("%f",&y3);
double m1 = (y2-y1)/(x2-x1);
printf("The line Of AB is %f",m1);
double m2 = (y3-y2)/(x3-x2);
printf("\nThe line Of AB is %f",m2);
if(m1==m2){
    printf("\nThree Point On a Straight line");
}
else{
    printf("\nThree Point Not On a Straight line");
}

    return 0;
}