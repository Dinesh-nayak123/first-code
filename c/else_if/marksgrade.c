#include<stdio.h>
int main(){
    float n;
    printf("enter mark = ");
    scanf("%f",&n);
    if (n>90){
        printf("Excellent");
    }
    else if(n>80){
        printf("very good");
    }
    else if(n>70){
        printf("good");
    }
    else if(n>60){
        printf("can do better");
    }
    else if(n>50){
        printf("average");
    }
    else if(n>41){
        printf("below average");
    }
    else{
        printf("fail");
    }
   
     return 0;
}