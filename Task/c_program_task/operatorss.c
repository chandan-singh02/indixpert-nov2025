#include <stdio.h>

int main()
{
    int a = 2;

    int b = ++a + a++ + 4;
    printf("%d\n", a);
    printf("%d", b);

    return 0;
}
