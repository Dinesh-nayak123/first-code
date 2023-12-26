#include<stdio.h>
int main(){
int n;
printf("Enter a Number = ");
scanf("%d",&n);
int a=0;
for(int i=2;i<=n-1;i++){
    if(n%i==0)
    a = 1;
    break;
}
if(a==0){
    printf("it is a prime number");
}
else{
    printf("it is not a prime number");
}
    return 0;
}