#include<stdio.h>
int main(){
int a,b,c;
printf("enter first no = ");
scanf("%d",&a);
printf("enter 2nd no = ");
scanf("%d",&b);
printf("enter 3rd no = ");
scanf("%d",&c);
if(a>b){
        if(a>c)
    printf("%d is greatest",a);
    else
    printf("%d is greatest",c);
}
else{
    if(b>c)
    printf("%d is greatest",b);
    else
    printf("%d is greatest",c);
    return 0;
}
}