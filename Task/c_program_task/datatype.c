#include <stdio.h>

int main()
{
    char z, y, x, w, v, u, t, s, r, q;

    printf("Enter first character: ");
    scanf(" %c", &q);
    printf("Enter second character: ");
    scanf(" %c", &r);
    printf("Enter third character: ");
    scanf(" %C", &s);
    printf("Enter fourth character: ");
    scanf(" %c", &t);
    printf("Enter fifth character: ");
    scanf(" %c", &v);
    printf("Enter sixth character: ");
    scanf(" %c", &u);
    printf("Enter seventh character: ");
    scanf(" %c", &w);
    printf("Enter eighth character: ");
    scanf(" %c", &x);
    printf("Enter ninth character: ");
    scanf(" %c", &y);
    printf("Enter ninth character: ");
    scanf(" %c", &z);

    printf("Reverse order:  %c %c %c %c %c %c %c %c %c\n\n",
           z, y, x, w, v, u, t, s, r, q);

    return 0;
}
