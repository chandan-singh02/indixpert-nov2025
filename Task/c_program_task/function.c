#include <stdio.h>

int multiply(int a, int b)
{
    return a * b;
}

float divide(int a, int b)
{
    return (float)a / b;
}

int main()
{
    int x, y;
    int mul;
    float div;

    printf("enter two numbers: ");
    scanf("%d %d", &x, &y);

    mul = multiply(x, y);
    printf("multiply here = %d\n", mul);

    if (y != 0)
    {
        div = divide(x, y);
        printf("division here = %.2f\n", div);
    }
    else
    {
        printf("Division not possible");
    }

    return 0;
}
