#include<stdio.h>
int main(){
    char str[] = "hello kunal what are you doing ?";
    int i = 0;
    while(str[i]!='\0'){
        printf("%c",str[i]);
        i++;
    }
    return 0;
}