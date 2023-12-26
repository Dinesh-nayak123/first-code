#include<stdio.h>
int main(){
int cp;
int sp;
printf("Cost price = ");
scanf("%d",&cp);
printf("Sell Price = ");
scanf("%d",&sp);
if(sp>cp){
printf("profit");
}
if(sp<cp){
    printf("Loss");
}
if(sp==cp){
    printf("No Profit No Loss");
}
    return 0;
}