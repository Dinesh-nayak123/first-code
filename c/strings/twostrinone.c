#include<stdio.h>
#include<string.h>
int main(){
    char s1[12] = "physics ";          //deep copy
    char s2[12] = "wallah";
    strcat(s1,s2);
    printf("%s",s1);

    return 0;
}