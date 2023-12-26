#include<stdio.h>
int main(){
int a,b,c;
printf("Age of Ram : ");
scanf("%d",&a);
printf("Age of Shyam : ");
scanf("%d",&b);
printf("Age of Ajya : ");
scanf("%d",&c);
if(a==b && b==c && c==a){
        printf("All have same age");
}
else{
if(a<b){
    if(a<c){
        printf("Ram is youngest");
    }
    else{
        printf("Ajya is youngest");
    }
}
else{
    if(b<a){
        printf("Shyam is youngest");
    }
    else{
        printf("Ajya is youngest");
    }
}
}

    return 0;
}