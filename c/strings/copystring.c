#include<stdio.h>
#include<string.h>
int main(){
    // char s1[] = "physics wallah";
    // // char* s2 = s1;          //sallow copy
    // // s1[0] = 'M';
    // printf("%s",s2);
    //deep copy
    char* s1 = "physics wallah";
    char* s2;
    s2 = s1;
    s2 = "collage wallah";
    printf("%s\n",s1);
    printf("%s",s2);

    return 0;
}