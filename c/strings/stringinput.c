#include<stdio.h>
#include<string.h>
int main(){
    char str[40];
    // scanf("%s",str); if scanf is use for scan it will consider only first word which before the space
    // scanf("%[^\n]s",str); it can print full sentence
    gets(str);
    printf("Your input is : %s",str);
    return 0;
}