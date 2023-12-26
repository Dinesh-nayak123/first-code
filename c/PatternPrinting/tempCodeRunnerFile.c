
for(int i = 1;i<=n;i++)
{
    int a = 1;
    for(int j = 1;j<=nst;j++){
        printf("%d",a);
        a++;
    }
    for(int k = 1;k<=nsp;k++){
        printf(" ");
        a++;
    }
    for(int l = 1;l<=nst;l++){
        printf("%d",a);
        a++;
    }
    nst--;
    nsp+=2;

    printf("\n");
}
    return 0;
}