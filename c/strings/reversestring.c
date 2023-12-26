#include<stdio.h>
#include<string.h>
int main(){
    char str[50];
    puts("Enter a string");
    scanf("%[^\n]s",str);
    int size = 0;
    int i = 0;
    while(str[i]!='\0'){
        size++;
        i++;
    }
    for(int j = 0,k = size-1;j<=k;j++,k--){
        char temp = str[j];
        str[j] = str[k];
        str[k] = temp;
    }
    puts("the reverse is : ");
    puts(str);
    return 0;
}