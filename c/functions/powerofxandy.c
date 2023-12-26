#include<stdio.h>
#include<math.h>
int main(){
int x;
printf("Enter value of x = ");
scanf("%d",&x);
int y;
printf("Enter value of y = ");
scanf("%d",&y);
int root = pow(x,y);
printf("The power of x and y is %d",root);

    return 0;
}