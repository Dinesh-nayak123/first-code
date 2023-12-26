#include<stdio.h>
int main(){
    //int n;
//printf("Enter a Number = ");
//scanf("%d",&n);
int sum = 0;
int ld = 0;
//int armstrong = 1;
for (int i = 1; i <= 500; i++)
{
    ld = i%10;
   // armstrong = ld*ld*ld;
    sum = sum + ld ;//(ld*ld*ld);
    i = i/10;
   // if(i==sum){
   // printf("armstrong no is %d",sum);
//}
}
//printf("armstrong no is %d",sum);

    return 0;
}