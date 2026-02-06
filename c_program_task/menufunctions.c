#include <stdio.h>

int add(int a, int b);
int sub(int a, int b);
int mul(int a, int b);
float divide(int a, int b);

int main()
{
    int operations;
    int userinput1, userinput2;
    int result;

    for (;;)
    {
        printf("\n--Menu--\n");
        printf("1. ADD\n");
        printf("2. SUB\n");
        printf("3. MUL\n");
        printf("4. DIV\n");
        printf("5. EXIT\n");

        printf("Enter operation: ");
        scanf("%d", &operations);

        if (operations == 5)
        {
            printf("Thank you for using calculator.\n");
            break;
        }

        printf("Enter two numbers: ");
        scanf("%d %d", &userinput1, &userinput2);

        if (operations == 1)
            result = add(userinput1, userinput2);
        else if (operations == 2)
            result = sub(userinput1, userinput2);
        else if (operations == 3)
            result = mul(userinput1, userinput2);
        else if (operations == 4)
        {
            if (userinput2 == 0)
            {
                printf("Cannot divide by zero!\n");
                continue;
            }
            result = divide(userinput1, userinput2);
        }

        printf("Result = %d\n", result);
    }

    return 0;
}

int add(int a, int b) { return a + b; }
int sub(int a, int b) { return a - b; }
int mul(int a, int b) { return a * b; }
float divide(int a, int b) { return (float)a / b; }
