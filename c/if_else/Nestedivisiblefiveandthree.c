#include<stdio.h>
int main(){
int n;
printf("Enter a Eumber : ");
scanf("%d",&n);
if(n%5==0){
    if(n%3==0){
        printf("The Number Is Divisible By 5 And 3.");
    }
    else{
        printf("The Number Is Not Divisible By 5 And 3.");
    }
}
else{
    printf("The Number Is Not Divisible By 5 And 3.");
}
    return 0;
}