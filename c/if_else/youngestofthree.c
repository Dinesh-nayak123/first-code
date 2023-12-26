#include<stdio.h>
int main(){
int a;
printf("Age Of Rama = ");
scanf("%d",&a);
int b;
printf("Age Of Shyma = ");
scanf("%d",&b);
int c;
printf("Age Of Ajya = ");
scanf("%d",&c);
if(a<b && a<c){
    printf("Rama is youngst");
}
if(b<a && b<c){
    printf("Shyma is youngest");
}
if(c<a && c<b){
    printf("Ajya is youngest");
}
    return 0;
}